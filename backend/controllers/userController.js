// controllers/userController.js
const pool = require('../config/db');

// Get user profile
exports.getUserProfile = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await pool.query('SELECT * FROM Users WHERE user_id = $1', [userId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
  const { userId } = req.params;
  const { name, bio, website, location, profilePicture } = req.body;
  try {
    const result = await pool.query(
      `UPDATE Users SET name = $1, bio = $2, website = $3, location = $4, profile_picture = $5, updated_at = NOW()
       WHERE user_id = $6 RETURNING *`,
      [name, bio, website, location, profilePicture, userId]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Follow a user
exports.followUser = async (req, res) => {
  const { userId } = req.params;
  const { followerId } = req.body; // Assuming the follower's ID is passed in the body
  try {
    await pool.query(
      `INSERT INTO Followers (follower_id, following_id) VALUES ($1, $2)`,
      [followerId, userId]
    );
    res.json({ message: 'User followed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Unfollow a user
exports.unfollowUser = async (req, res) => {
  const { userId } = req.params;
  const { followerId } = req.body;
  try {
    await pool.query(
      `DELETE FROM Followers WHERE follower_id = $1 AND following_id = $2`,
      [followerId, userId]
    );
    res.json({ message: 'User unfollowed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user's followers
exports.getFollowers = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await pool.query(
      `SELECT follower_id FROM Followers WHERE following_id = $1`,
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user's following list
exports.getFollowing = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await pool.query(
      `SELECT following_id FROM Followers WHERE follower_id = $1`,
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
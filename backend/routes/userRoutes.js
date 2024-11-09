const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile, followUser, unfollowUser, getFollowers, getFollowing } = require('../controllers/userController');

// Get a user's profile by username or ID
router.get('/:userId', getUserProfile);

// Update a user's profile (name, bio, profile picture, etc.)
router.put('/:userId', updateUserProfile);

// Follow a user
router.post('/:userId/follow', followUser);

// Unfollow a user
router.delete('/:userId/unfollow', unfollowUser);

// Get a user's followers
router.get('/:userId/followers', getFollowers);

// Get the users that a user is following
router.get('/:userId/following', getFollowing);

module.exports = router;
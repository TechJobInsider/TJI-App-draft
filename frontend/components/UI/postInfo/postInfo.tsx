import styles from 'frontend\components\UI\postInfo\postInfo.module.css';

const PostInfo = () => {
    return (
        <section className={styles.postInfo}>
            <div className={styles.postContent}>
                <p className={styles.postText}>
                    <span className={styles.username}>Username</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
                    <a href="#" className={styles.moreLink}>more</a>
                </p>
                <a href="#" className={styles.commentsLink}>View all 16 comments</a>
                <div className={styles.commentSection}>
                    <div className={styles.commentInput}>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/057a1420dc5501b15d58f3f10ee7fc304bf954b47aca76acdcdea4bf6b5ef5f4?placeholderIfAbsent=true&apiKey=9a159c62a26f452b9d24259b64e8c686"
                            alt="User Avatar"
                            className={styles.userAvatar}
                        />
                        <input
                            type="text"
                            id="commentInput"
                            className={styles.commentPlaceholder}
                            placeholder="Add a comment..."
                            aria-label="Add a comment"
                        />
                    </div>
                    <div className={styles.reactions}>
                        <button className={styles.reactionEmoji} aria-label="Like">❤️</button>
                        <button className={styles.reactionEmoji} aria-label="Applaud">🙌</button>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8b1d71313a33de3854454595f330050fc042511e003f93c44f2e5768acea278?placeholderIfAbsent=true&apiKey=9a159c62a26f452b9d24259b64e8c686"
                            alt="Reaction Icon"
                            className={styles.reactionIcon}
                        />
                    </div>
                </div>
                <time className={styles.postTimestamp}>30 minutes ago</time>
            </div>
        </section>
    );
};

export default PostInfo;

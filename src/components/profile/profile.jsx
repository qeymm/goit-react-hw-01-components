import PropTypes from 'prop-types';
import styles from './ProfileStyle.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsList}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>
            {stats.followers.toLocaleString()}
          </span>
        </li>
        <li className={styles.statsList}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>
            {stats.views.toLocaleString()}
          </span>
        </li>
        <li className={styles.statsList}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>
            {stats.likes.toLocaleString()}
          </span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

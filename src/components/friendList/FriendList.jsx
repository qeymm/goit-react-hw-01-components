import PropTypes from 'prop-types';
import style from './FriendListStyle.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(friend => (
        <li className={style.item} key={friend.id}>
          <span
            className={`${style.status} ${
              friend.isOnline ? style.online : style.offline
            }`}
          ></span>
          <img
            className={style.avatar}
            src={friend.avatar}
            alt="User Avatar"
            width="48"
          />
          <p className={style.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

//Checking PropTypes//
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

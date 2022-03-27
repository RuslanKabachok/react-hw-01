import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendsListItem';
import css from './Friends.module.css';

export const Friends = ({ friends }) => {
  return (
    <ul className={css.friends}>
      {friends.map(item => (
        <FriendsListItem items={item} key={item.id} />
      ))}
    </ul>
  );
};

Friends.prototypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

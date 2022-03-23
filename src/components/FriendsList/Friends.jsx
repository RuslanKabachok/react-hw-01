import css from './Friends.module.css';
import data from 'friends.json';

export const Friends = ({ friends }) => {
  return (
    <ul className={css.friends}>
      {data.map(friend => (
        <li key={friend.id} className={css.item}>
          <div className={`${css.status} ${css[friend.isOnline]}`}></div>
          <img className={css.avatar} src={friend.avatar} alt="User avatar" />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

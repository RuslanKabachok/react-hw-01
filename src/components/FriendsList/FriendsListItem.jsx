import css from './FriendsListItem.module.css';

export const FriendsListItem = ({ items }) => {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${css[items.isOnline]}`}></span>
      <img className={css.avatar} src={items.avatar} alt="User avatar" />
      <p className={css.name}>{items.name}</p>
    </li>
  );
};

import PropTypes from 'prop-types';
import css from './StatList.module.css';
import data from 'data.json';

export const StatList = ({ stats }) => {
  return (
    <ul className={css.list}>
      {data.map(info => (
        <li key={info.id} className={css.item}>
          <span className={css.label}>{info.label}</span>
          <span className={css.percentage}>{info.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

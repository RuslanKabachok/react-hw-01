import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ stats }) => {
  return (
    <section className={css.statistics}>
      {
        <ul className={css.list}>
          {stats.map(info => (
            <li key={info.id} className={css.item}>
              <span className={css.label}>{info.label}</span>
              <span className={css.percentage}>{info.percentage}%</span>
            </li>
          ))}
        </ul>
      }
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

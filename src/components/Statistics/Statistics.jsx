import { Title } from './Title';
import { StatList } from './StatList';
import css from './Statistics.module.css';
import data from 'data.json';

export const Statistics = () => {
  return (
    <section className={css.statistics}>
      <Title title="Upload stats" />
      <StatList stats={data} />
    </section>
  );
};

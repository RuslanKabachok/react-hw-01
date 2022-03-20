import { Title } from './Title';
import { StatList } from './StatList';
import css from './Statistics.module.css';

export const Statistics = () => {
  return (
    <section className={css.statistics}>
      <Title title="Upload stats" />
      <StatList />
    </section>
  );
};

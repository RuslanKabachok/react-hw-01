import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const Transactions = ({ items }) => {
  return (
    <table className={css.transactions}>
      <thead className={css.head}>
        <tr className={css.main}>
          <th className={css.row}>Type</th>
          <th className={css.row}>Amount</th>
          <th className={css.row}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.body}>
        {items.map(transaction => (
          <tr key={transaction.id} className={css.info}>
            <td className={css.type}>{transaction.type}</td>
            <td className={css.amount}>{transaction.amount}</td>
            <td className={css.currency}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Transactions.prototypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

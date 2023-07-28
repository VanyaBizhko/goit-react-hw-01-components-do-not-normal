import styles from './TransactionHistory.module.css'
const TransactionHistory = ({ transactions }) => {
    return (
     <table className={styles.transaction_history}>
  <thead>
    <tr className={styles.table}>
      <th className={styles.title}>Type</th>
      <th className={styles.title}>Amount</th>
      <th className={styles.title}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map(({ id, type, amount, currency }) => (
         <tr key={id}>
      <td className={styles.table_body}>{type}</td>
      <td className={styles.table_body}>{amount}</td>
      <td className={styles.table_body}>{currency}</td>
    </tr>
    )
    )}
  </tbody>
</table>
    )
}
export default TransactionHistory
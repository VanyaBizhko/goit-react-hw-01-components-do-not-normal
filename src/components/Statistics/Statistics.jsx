import styles from './Statistics.module.css'
const Statistics = ({data, title}) => {
    
    return (
        <section className={styles.statistics}>
            
              {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.stat_list}>
                {data.map(({ id, label, percentage }) => (
          <li className={styles.item} key={id}>
            <span className={styles.label}>{label} </span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
                </ul>
        </section>
    );
}
export default Statistics;
import styles from './FriendList.module.css'
const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friend_list}>
            {friends.map(( {name, avatar, id, isOnline} ) => (
            <li className={styles.item} key={id}>
                <span className={`${styles.status} ${isOnline ? styles.green : styles.red}`}>
            {isOnline ? "Online" : "Offline"}
          </span>
                <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={styles.name}>{name}</p>
            </li>
            ))
            }
        </ul>
    )
}
export default FriendList
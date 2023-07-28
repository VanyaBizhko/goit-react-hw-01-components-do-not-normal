import PropTypes from "prop-types";
import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'
import FriendList from './FriendList/FriendList'
import TransactionHistory from "./TransactionHistory/TransactionHistory";

import user from './data/user.json'
import data from './data/data.json'
import friends from './data/friends.json'
import transactions from './data/transactions.json'

const App = () => {
    return (
        < div >
        < Profile
    id = {user.id}
    name = {user.username}
    tag = {user.tag}
    avatar = { user.avatar }
                stats={user.stats}
                location={user.location}
            />
            
            <Statistics
                data={data}
                title='Upload stats'
        id={data.id}
        label={data.label}
        percentage={data.percentage}
            />
            <FriendList
                friends={friends}
                id={friends.id}
                name={friends.name}
                avatar={friends.avatar}
                isOnline={friends.isOnline}
            />
            <TransactionHistory
                transactions={transactions}
                id={transactions.id}
                type={transactions.type}
                amount={transactions.amount}
                currency={transactions.currency} />
        </div >
   ) }

export default App
Profile.propTypes = {
id:PropTypes.string,
name:PropTypes.string,
tag:PropTypes.string,
avatar:PropTypes.string,
stats:PropTypes.object,
     
}
Statistics.propTypes = {
data:PropTypes.array,
id:PropTypes.string,
label:PropTypes.string,
percentage:PropTypes.number,
}
FriendList.propTypes = {
friends:PropTypes.array,
id:PropTypes.number,
name:PropTypes.string,
avatar:PropTypes.string,
isOnline:PropTypes.bool,
}
TransactionHistory.propTypes = {
transactions:PropTypes.array,
id:PropTypes.string,
type:PropTypes.string,
amount:PropTypes.string,
currency:PropTypes.string,
}
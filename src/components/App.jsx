import { Profile } from './profile/profile';
import user from '../data/user.json';
import { Statistics } from './statistics/Statistics';
import data from '../data/data.json';
import { FriendList } from './friendList/FriendList';
import friends from './../data/friends.json';
import { TransactionHistory } from './transaction_history/TransactionHistory';
import transactions from './../data/transactions.json';

export const App = () => {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

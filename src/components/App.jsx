import user from 'user.json';
import data from 'data.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Friends } from './FriendsList/Friends';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics stats={data} />

      <Friends />
    </div>
  );
};

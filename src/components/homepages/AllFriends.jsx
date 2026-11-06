import React from 'react';
import useFriends from '../hooks/useFriends';
import FriendCard from '../ui/FriendCard';

const AllFriends = () => {
  const {friends,setFriends} = useFriends();
  // console.log(friends); 



  return (
    <div className="w-10/12  mx-auto mt-8">
      <div className='grid grid-cols-4 gap-5'>
      {
        friends.map(friend =>
         <div>
<FriendCard key={friend.id} friend={friend}></FriendCard>
         </div>
        )
      }
      
    </div>

    </div>
  );
};

export default AllFriends;
import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {
  return (
    
    <Link to={`/friendDetailsPage/${friend.id}`}>
      
          <div className="card bg-[#FFFFFF] space-y-1 h-[350px] shadow-lg">
  <figure className="px-10 pt-10">
    <img 
      src={friend.picture}
      alt="Shoes"
      className=" w-[80px] h-[80px] rounded-full object-contain" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-semibold text-2xl">{friend.name}

    </h2>

    <p className='text-[#647488] text-xl'>{friend.days_since_contact}d ago</p>

 
  
   <div className='flex justify-center gap-2'>
  {
    friend.tags.map((tag, index) =>
      <p
        key={index}
        className='text-[18px] bg-[#CBFADB] rounded-full px-4 py-1 inline-block'
      >
        {tag}
      </p>
    )
  }
</div>
  
  <div className='text-center'>
    <p className= {` text-white text-[18px] px-4 py-1 rounded-full mt-3 ${friend.status === "overdue"? "bg-[#EF4444]" : friend.status === "Almost Due"? "bg-[#EFAD44]": friend.status === "on_track"? "bg-[#244D3F]" : ""}`}>
    {friend.status}</p>

  </div>
 
</div>
</div>

    
    
    </Link>
    
  );
};

export default FriendCard;
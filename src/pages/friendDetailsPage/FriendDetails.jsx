import React, { useContext, useState } from 'react';
import useFriends from '../../components/hooks/useFriends';
import { useParams } from 'react-router';
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import { FiArchive, FiPhoneCall } from 'react-icons/fi';
import { LuVideo } from 'react-icons/lu';
import { PiChatTextBold } from 'react-icons/pi';
import { FriendContext } from '../../context/friendContextProvider';


const FriendDetails = () => {

 

const { calls,texts,videos,handleCall,handleText,handleVideo} = useContext(FriendContext);
console.log(calls, handleCall );
console.log(calls.length);

 

  const { id } = useParams();

  const { friends } = useFriends();
  // console.log(friends);

  const expectedFriend = friends.find(friend => Number(friend.id) === Number(id));

  // console.log(expectedFriend);


 


 
  //  console.log("Friends:", friends);
// console.log("Expected Friend:", expectedFriend);

  
  

  if (!expectedFriend) {
    return <h2>Loading...</h2>;
  }
  return (

    <div className='w-10/12 mx-auto'>


             <div className='flex gap-5'>
      <div>

        <div>
          <div className='w-[350px] h-[360px] shadow-lg mt-0 rounded-xl overflow-hidden'>
            <div className="card bg-[#FFFFFF] w-full h-full space-y-0 pt-0">
              <figure className="px-10 pt-10">
                <img
                  src={expectedFriend.picture}
                  alt="Shoes"
                  className=" w-[80px] h-[80px] rounded-full object-contain" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-semibold text-2xl">{expectedFriend.name}

                </h2>

                <p className='text-[#647488] text-xl'>{expectedFriend.days_since_contact}d ago</p>



                <div className='flex justify-center gap-2'>
                  {
                    expectedFriend.tags.map((tag, index) =>
                      <p
                        key={index}
                        className='text-[18px] bg-[#CBFADB] rounded-full px-4 py-1 inline-block'
                      >
                        {tag}
                      </p>
                    )
                  }
                </div>

                <p className={` text-white text-[18px] px-4 py-1 rounded-full mt-3 ${expectedFriend.status === "overdue" ? "bg-[#EF4444]" : expectedFriend.status === "Almost Due" ? "bg-[#EFAD44]" : expectedFriend.status === "on_track" ? "bg-[#244D3F]" : ""}`}>
                  {expectedFriend.status}</p>

                <p className='text-[#647488]'>"Former colleague, great mentor"
                  <br />Preferred: email</p>

              </div>
            </div>


          </div>


          <div className='w-[350px] h-[175px] mt-6 shadow-lg'>

            <div className='text-center space-y-3'>
              <h2 className='w-full h-[53px] flex items-center justify-center gap-2 bg-[#FFFFFF] shadow-lg'>
                <RiNotificationSnoozeLine /> Snooze 2 weeks
              </h2>

              <h2 className='w-full h-[53px] flex items-center justify-center
     bg-[#FFFFFF] shadow-lg'>
                <FiArchive /> Archive
              </h2>

              <h2 className='w-full h-[53px] text-red-500 flex items-center justify-center bg-[#FFFFFF] shadow-lg'>
                <RiDeleteBin6Line />Delete
              </h2>
            </div>

          </div>
        </div>



      </div>

      <div>
        <div className='mt-9 flex gap-4 w-[776px] h-[113px]'>


          <div className='w-[257px] h-[134px] bg-[#FFFFFF] shadow-lg flex flex-col items-center justify-center'>

            <h2 className='text-[30px] font-semibold'>62</h2>

            <p className='text-[18px] text-[#647488]'>
              Days Since Contact
            </p>

          </div>
          <div className='w-[257px] h-[134px] bg-[#FFFFFF] shadow-lg flex flex-col items-center justify-center'>

            <h2 className='text-[30px] font-semibold'>30</h2>

            <p className='text-[18px] text-[#647488]'>
              Goal (Days)
            </p>

          </div>
          <div className='w-[257px] h-[134px] bg-[#FFFFFF] shadow-lg flex flex-col items-center justify-center'>

            <h2 className='text-[30px] font-semibold'>Feb 27, 2026</h2>

            <p className='text-[18px] text-[#647488]'>
              Next Due
            </p>

          </div>

        </div>
        <div className='w-[776px] h-[163px] bg-[#FFFFFF] shadow-lg rounded-xl px-6  mt-9'>

          <div className='flex items-center  justify-between pt-6 mx-4 my-6'>

            <div>
              <h2 className='font-semibold text-2xl'>Relationship Goal</h2>
            </div>
            <div>
              <a role="button" className="btn">Edit</a>
            </div>
          </div>
          <h2 className='text-[18px] text-[#647488] mx-4 mt-0'>Connect every <span className='font-bold text-black'>30 days</span></h2>

        </div>

        <div className='w-[776px] h-[175px] mt-9 shadow-lg m-4 '>
          <h2 className='text-[18px] text-[#647488] px-3 py-3 p-4'>Quick Check-In</h2>
          <div className='flex w-11/12 mx-auto gap-4'>



            <button onClick={()=> handleCall(expectedFriend)} 
            
            className="btn btn-lg w-[218px] h-[95px] flex flex-col items-center justify-center p-5">
              <span><FiPhoneCall /></span><span className='text-[18px]'>Call</span>
            </button>




            <button onClick={()=> handleText(expectedFriend)}
            
            className="btn btn-lg w-[218px] h-[95px] flex flex-col items-center justify-center p-5">
              <span><PiChatTextBold /></span><span className='text-[18px]'>Text</span>
            </button>





            <button onClick={()=>handleVideo(expectedFriend)}
             className="btn btn-lg w-[218px] h-[95px] flex flex-col items-center justify-center p-5">
              <span><LuVideo /></span><span className='text-[18px]'>Video</span>
            </button>



          </div>
        </div>
      </div>
    </div>

    </div>


  );
};

export default FriendDetails;
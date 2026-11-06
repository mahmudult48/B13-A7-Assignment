import React, { useContext } from 'react';
import image from '../../assets/call.png';
import image2 from '../../assets/text.png';
import image3 from '../../assets/video.png';
import { FriendContext } from '../../context/friendContextProvider';

const TimeLine = () => {

  const { calls, texts, videos } = useContext(FriendContext);
  console.log(calls);




  

  return (
    
      <div className='space-y-6'>

       <div className='w-10/12 mx-auto'>
         <h2 className='font-bold text-[48px]'>Timeline </h2>
        <p className='text-[#647488]'>Filter timeline</p>
       </div>
        <div className='space-y-8 w-10/12 mx-auto mt-5 bg-[#F8FAFC]'>

      {
        calls.map(call => 


          <div className='w-[1110px] h-[83px] bg-[#FFFFFF]  shadow-md'>
            <div className='flex h-full items-center gap-5'>
                     <div>
                       <img className='w-[40px] h-[40px] mx-4' src={image} alt="" />
                     </div>
                      <div>
                        <h2 className='text-[20px] font-semibold'>Meetup with <span className='text-[#647488]'>{call.name}</span></h2>
                        <h2 className='text-[#647488] text-[20px] font-semibold'>{call.next_due_date}</h2>
                      </div>
                      </div>


            </div>
        )
  }
      {
        texts.map(text => 


          <div className='w-[1110px] h-[83px] bg-[#FFFFFF]  shadow-lg'>
            <div className='flex h-full items-center gap-5'>
                     <div>
                       <img className='w-[40px] h-[40px] mx-4' src={image2} alt="" />
                     </div>
                      <div>
                        <h2 className='text-[20px] font-semibold'>Meetup with <span className='text-[#647488]'>{text.name}</span></h2>
                        <h2 className='text-[#647488] text-[20px] font-semibold'>{text.next_due_date}</h2>
                      </div>
                      </div>


            </div>
        )
  }
      {
        videos.map(video => 


          <div className='w-[1110px] h-[83px] bg-[#FFFFFF]  shadow-lg'>
            <div className='flex h-full items-center gap-5'>
                     <div>
                       <img className='w-[40px] h-[40px] mx-4' src={image3} alt="" />
                     </div>
                      <div>
                        <h2 className='text-[20px] font-semibold'>Meetup with <span className='text-[#647488]'>{video.name}</span></h2>
                        <h2 className='text-[#647488] text-[20px] font-semibold'>{video.next_due_date}</h2>
                      </div>
                      </div>


            </div>
        )
  }

  {

  }
    </div>
      </div>

    
  );
};

export default TimeLine;
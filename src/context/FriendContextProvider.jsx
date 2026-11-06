import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendContext = createContext();

 const FriendContextProvider = ({children}) => {

    const[calls ,setCalls] = useState([]);
    const[texts ,setTexts] = useState([]);
    const[videos ,setVideos] = useState([]);



    const handleCall = (expectedFriend) => {
  setCalls([...calls, expectedFriend]);
  toast.success(`Call with ${expectedFriend.name}`);
}
  

   const handleText = (expectedFriend)=>{
    setTexts([...texts,expectedFriend]);
    toast.success(`Text with ${expectedFriend.name}`);
   }

   const handleVideo = (expectedFriend)=>{

    setVideos([...videos,expectedFriend]);
    toast.success(`Video with ${expectedFriend.name}`);

   }
   const data = {
    calls,
    texts,
    videos,
    handleCall,
    handleText,
    handleVideo

   }

  return (
    <div>
       <FriendContext.Provider value={data}>
        {children}

       </FriendContext.Provider>
    </div>
  );
};

export default FriendContextProvider;
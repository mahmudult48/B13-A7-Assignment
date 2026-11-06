import React, { useEffect, useState } from 'react';

const useFriends = () => {
  const [friends, setFriends] = useState([]);


  console.log(friends);

useEffect(()=>{

  const fetchData = async()=>{
    const res = await fetch("/data.json");
    const data = await res.json();
    console.log(data);
    setFriends(data);
  }
fetchData();
},[])


return{friends}
  
};

export default useFriends;
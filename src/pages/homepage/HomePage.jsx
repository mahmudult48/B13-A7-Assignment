import React from 'react';
import Banner from '../../components/homepages/Banner';
import Stats from '../../components/homepages/Stats';
import AllFriends from '../../components/homepages/AllFriends';

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Stats></Stats>
      <AllFriends></AllFriends>

    </div>
  );
};

export default HomePage;
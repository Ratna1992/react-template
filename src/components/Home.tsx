// Home.tsx
import React from 'react';
import Welcome from '../props/Welcome'
import SearchBox from './SearchBox';
const Home: React.FC = () => {
  return <>
    <Welcome isLoggedIn={true} />
    
      <SearchBox />
    
  </>;
};

export default Home;

// Home.tsx
import React from 'react';
import Welcome from '../props/Welcome'
const Home: React.FC = () => {
  return <>
    <Welcome isLoggedIn={true} />
  </>;
};

export default Home;

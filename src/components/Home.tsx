// Home.tsx
import React from 'react';
import Welcome from './Welcome'
const Home: React.FC = () => {
  return <>
    <Welcome isLoggedIn={true} />
  </>;
};

export default Home;

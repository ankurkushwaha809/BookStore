import React from 'react';
import Banner from '../components/Banner';
import FreeBook from '../components/FreeBook';

function Home({ theme }) {
  return (
    <>

      <Banner theme={theme} />
      <FreeBook theme={theme} />
    </>
  );
}

export default Home;

import React from 'react';
import Banner from '../components/Banner';
import '../css/Home.css';

function Home() {
    return (
        <div className="home">
          {/* Banner */}
          <Banner/>

          <div className="home__division">
              <Card/>
              <Card/>
              <Card/>
          </div>
          <div className="home__division">
              <Card/>
              <Card/>
              <Card/>
          </div>
        </div>
    )
}

export default Home

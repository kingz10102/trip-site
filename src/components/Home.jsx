import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import '../css/Home.css';

function Home() {
    return (
        <div className="home">
          {/* Banner */}
          <Banner/>

          <div className="home__division">
              <Card
              src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=740"
              title="'Limin' in the moment"
              description="Unique activities we can do together, led by a world of hosts."
          />
              <Card
                src="https://images.unsplash.com/photo-1578530332818-6ba472e67b9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=740"
                title="Marvelous Getways"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=740"
                title="Extravangant Stays"
                description="Comfortable private places, with room for friends or family."/>
          </div>
          <div className="home__division">
          <Card
                src="https://images.unsplash.com/photo-1500759285222-a95626b934cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=665"
                title="Havana, Cuba"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="$200/night"
            />
            <Card
                src="https://images.unsplash.com/photo-1554759068-c560c4563912?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=665&q=60"
                title="Labadee, Haiti"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="$350/night"
            />
            <Card
                src="https://images.unsplash.com/photo-1512813389649-acb9131ced20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=665&q=80"
                title="Yucatán, Mexico"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="$100/night"
            />
          </div>
        </div>
    )
}

export default Home

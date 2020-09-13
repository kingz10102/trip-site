import React from 'react';
import { Button } from "@material-ui/core";
import '../css/SearchPage.css';
import { Search } from '@material-ui/icons';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className="sarchPage">
           <div className="searchPage__info">
           <p>100 Vacations · 14 July to 30 July· 2 guest</p>
                <h1>Destination Events</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of Vacation</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and Stays</Button>
                <Button variant="outlined">More filters</Button>
           </div>
           <SearchResult
                img="https://images.unsplash.com/photo-1500759285222-a95626b934cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=665"
                location="Havana, Cuba"
                title="¡Viva la Cuba! on a 5 day cruise"
                description="2 guest · Interior stateroom · 1 King bed · 1 Bathroom · Wifi · 35'inch LED TV ·Free Room Service"
                star={4.91}
                price="$200 / night"
                total="$1000 total  taxes and fees included"/>
            <SearchResult
                img="https://www.gettingstamped.com/wp-content/uploads/2017/05/Labadee-Haiti-Featured-Image-Royal-Caribbean-Port-1.jpg"
                location="Labadee, Haiti"
                title="Sak'Pase Ayiti on a 7 day cruise"
                description="2 guest · Oceanview stateroom · 1 King bed · 1 bathrooms · Wifi · Unilimited Drink Package "
                star={5.0}
                price="$299 / night"
                total="$2,093 total taxes and fees included"
            />
            <SearchResult
                img="https://images.unsplash.com/photo-1512813389649-acb9131ced20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=665&q=80"
                location="Yucatán, Mexico"
                title=" Mayan Riveria All-Inclusive Resort"
                description="2 guest · 1 bedroom · 1 bed · 1 bathroom · Wifi · 24 HR Room Service"
                star={4.3}
                price="$199 / night"
                total="$820 total taxes and fees included"
            />
            <SearchResult
                img="https://www.goingplacestravel.com/images/content/misc/Black_family_Orlando_website.jpg"
                location=" Walt Disney World Resort"
                title="4-Night, 4-Day Room-and-Ticket Package"
                description="6 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Kids eat FREE "
                star={4.3}
                price="$499 / per person"
                total="$2,994 total taxes and fees included"
            />
            <SearchResult
                img="https://images.unsplash.com/photo-1569789010436-421d71a9fc38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=665&q=80"
                location="Universal Studios Orlando"
                title=" 2-Park, 2-Day + 2 Days Free Promotional Ticket "
                description="5 guest · 2 bedrooms · 1 King Bed ·  2 Twin Bed · 1.5 shared bthrooms · Free Wifi · Free Contential Breakfast  · 2 Free Park Hoopers  "
                star={4.3}
                price="$399 / per person"
                total="$ 2,175 total taxes and fees included"
            />
            <SearchResult
                img="https://reservations.tnsinc.com/img_galleria/22336/img_22336_22.jpg"
                location="Cove Haven Entertainment Resorts"
                title=" Weekend Getaway to LOVE"
                description="2 guest · 1 bedroom · 1 King Bed · 1 Bathroom · Wifi · Kitchen · Complimentary Spa Treatment · Free Buffet"
                star={4.7}
                price="$620 / night"
                total="$1,860 total taxes and fees included"
            />
        </div>
    )
}

export default SearchPage

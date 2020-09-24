import React,{ useState }from 'react';
import DatePicker from '../components/DatePicker';
import '../css/Banner.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


function Banner() {
    // provide functionality with search date button
    const [showSearch, setShowSearch] = useState(false);
    const history = useHistory();
    
    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <DatePicker/>}
                {/* if btn is click it will show selector or not */}
                <Button onClick={()=>setShowSearch(!showSearch)}
                className="banner__searchButton"
                variant="outlined">
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
             
            </div>
            <div className="banner__info">
                <h1>Journey to your Destination</h1>
                <h5>
                    Lorem ipsum dolor sit amet 
                    consectetur adipisicing 
                    elit. Officia, 
                </h5>
                <Button 
                onClick={() => history.push('/search')}
                variant="outlined">
                    Explore your adventure 
                </Button>
            </div>
        </div>
    )
}

export default Banner

import React from 'react';
import '../css/Banner.css';
import { Button } from '@material-ui/core';

function Banner() {
    return (
        <div className="banner">
            <div className="banner__info">
                <h1>Journey to your Destination</h1>
                <h5>
                    Lorem ipsum dolor sit amet 
                    consectetur adipisicing 
                    elit. Officia, 
                </h5>
                <Button 
                variant="outlined">
                    Tour Ports 
                </Button>
            </div>
        </div>
    )
}

export default Banner

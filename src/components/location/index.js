import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/place/Jawaharlal+Nehru+Stadium,+Delhi/@28.5828456,77.2321778,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce2f93178ea85:0x639d387dcb58c69!8m2!3d28.5828456!4d77.2343665" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;
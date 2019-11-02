import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    Summer: {
        text: 'Let\'s hit the beach!',
        iconName: 'sun'
    },
    Winter: {
        text: 'Burr, it is chilly!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`} >
            <i className={`${iconName} icon-left massive icon`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon-right massive icon`} />
        </div>
    );

}

export default SeasonDisplay;
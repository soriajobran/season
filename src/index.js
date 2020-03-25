import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Sppiner from './Spinner'
import useLocation from './useLocation'

const App = () => {
    const [lat, errMessage] = useLocation()
    let content
    if(errMessage) {
        content = <div>Error: {errMessage} </div>
    } else if(lat) {
        content = <SeasonDisplay lat={lat} />
    } else {
        content = <Sppiner message='Waiting for your location' />
    }

    return <div className='border red'>{content}</div>
}          

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
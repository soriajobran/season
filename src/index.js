import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Sppiner from './Spinner';

class App extends React.Component {

    state = {lat: null, errMessage: ''};

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
                // to update the state it is needed to call seState methode.
            err => this.setState({ errMessage: err.message})
        );
    }

    renderContent() {
        if(this.state.lat && !this.state.errMessage) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        if(this.state.errMessage && !this.state.lat) {
            return <div>Error: {this.state.errMessage} </div>
        }

        return <Sppiner message='Waiting for your location' />
    }

    render() {
        return(
            <div className='border red'>
                 {this.renderContent()}
            </div>
        );
        
    }
    
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
import React, { Component } from 'react';
import MyMapComponent from './map-cmp'


class MapStateManager extends Component {
    constructor() {
        super()
        this.state = {
            center: { lat: 51.461674, lng: -0.073542 },
            markers: [
                { position: { lat: 51.5, lng: -0.09 }, label: 'asdasd', title: 'asdasd' },
                { position: { lat: 35, lng: 34 }, label: 'flkjhnldkfgnh', title: 'flkjhnldkfgnh' },
                { position: { lat: 36, lng: 34 }, label: 'flkjhnldkfgnh', title: 'flkjhnldkfgnh' },
                { position: { lat: 37, lng: 34 }, label: 'flkjhnldkfgnh', title: 'flkjhnldkfgnh' },
                { position: { lat: 38, lng: 34 }, label: 'flkjhnldkfgnh', title: 'flkjhnldkfgnh' },
                { position: { lat: 34, lng: 36 }, label: 'flkjhnldkfgnh', title: 'flkjhnldkfgnh' },
            ]
        }
    }

    async componentDidMount() {
        // await navigator.geolocation.getCurrentPosition(async (position) => {
        //     await this.setState({ center: { lat: position.coords.latitude, lng: +position.coords.longitude } })
        // })
    }

    render() {
        const { markers } = this.state
        return (
            <div className="App">
                <MyMapComponent
                    isMarkerShown
                    markers={markers}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDrvlLEZx4_vYizhbzaIy1un8VEIqo5BAk&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    center={this.state.center}
                />
            </div>
        );
    }
}

export default MapStateManager
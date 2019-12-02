import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'


const AnyReactComponent = ({ text }) => <div>{text}</div>

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 36.782169,
            lng: -80.793457
        },
        zoom: 11
       
       
    }
    render () {
        return (
            <div style={{ height: '50vh', width: '300%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyB126OG7e6SgjlOSN-CGN2-JW_ohkrkLqU' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                     >
                     <AnyReactComponent
                        lat={35.782169}
                        lng={-80.793457}
                        text="My Marker"
                    />

                </GoogleMapReact>

            </div>
        )
    }
}

export default Map
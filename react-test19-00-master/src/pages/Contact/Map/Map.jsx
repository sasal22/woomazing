import React from "react";
import GoogleMapReact from 'google-map-react';
import './Map.scss'

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Map = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 1
      };
    return (
        <section className="contactMap">
            <div className="contactMap__container container">

                <h3>Контакты</h3>
                <p>Главная — <span className="contactMap__text">Контакты</span></p>
                <div className="contactMap__map">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </section>
    );
};

export default Map;
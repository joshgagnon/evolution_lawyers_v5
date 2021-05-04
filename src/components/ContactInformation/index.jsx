import React, { Component } from "react";
import { Button, TextField, Grid, Cell, Card } from 'react-md';
import config from "../../../data/SiteConfig";
import './ContactInformation.scss';
import { clickPhone, clickEmail } from '../Navigation';
import ScrollAnimation from 'react-animate-on-scroll';

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '800px',
    height: '400px',
    margin: '20px auto',
    maxWidth: '80%'
};

const center = {
    lat: -36.860686996627386,
    lng: 174.74971966108103
};

function MyMap() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: config.mapsKey
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
       // const bounds = new window.google.maps.LatLngBounds();
       // map.fitBounds(bounds);
       // setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker position={center} label={'Evolution Lawyers'} />
        </GoogleMap>
    ) : <></>
}

const Map = React.memo(MyMap)

const ContactInformation= ({ className }) => {
   return <section id="contact-information">
       <Grid>
           <Cell  size={12} desktopOffset={0} tabletOffset={0} phoneOffset={0}>
               <ScrollAnimation animateIn='slideInLeft' animateOnce={true} offset={10} style={{textAlign: 'center'}}>
                   <div className="title-section" style={{marginTop: 50}}>
                       <h1 className="line">Contact Information</h1>

                       <div className="separator" />
                   </div>
               </ScrollAnimation>
           </Cell>
           <Cell  size={6} tabletSize={4}  desktopOffset={0} tabletOffset={0} phoneOffset={0} className={"address-col"}>
            <div className="address">
                <div className="address-row"><em>Address</em></div>
                { config.address.map((add, i) => {
                    return <div className="address-row" key={i}>
                        { add }
                    </div>
                })}
                <div className="address-row"><em>By appointment only</em></div>
            </div>
           </Cell>

       <Cell  size={6}  tabletSize={4} tabletOffset={0} phoneOffset={0} className={"contact-col"}>
           <div className="contact-row"><a href={`tel:${config.phone.replace(' ', '')}`}  onClick={clickPhone}><span className="fa fa-phone" /> { config.phone }</a></div>
           <div className="contact-row"><a href={`tel:${config.fax.replace(' ', '')}`}><span className="fa fa-fax" /> { config.fax }</a></div>
           <div className="contact-row"><a href={`mailto:${config.email}`} onClick={clickEmail}><span className="fa fa-envelope" /> { config.email }</a></div>
       </Cell>
       </Grid>

       { typeof window !== 'undefined' && <Map />}
       </section>

 };


 export default ContactInformation;

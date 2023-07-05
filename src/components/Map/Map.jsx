import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
// import LocationOnOutlined from "@bit/mui-org.material-ui-icons.location-on-outlined";
import { Rating } from "@material-ui/lab";
import useStyles from "./styles";

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");
  // const coordinates = { lat: 26.85, lng: 80.949997 };
  // console.log(props.coordinates);
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {/* {console.log("hey")} */}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;

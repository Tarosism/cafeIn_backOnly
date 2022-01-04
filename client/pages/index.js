import React, { useState, useCallback, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import LoginNav from "../components/LoginNav";
import Nav from "../components/Nav";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import proj4 from "proj4";
import CafeList from "../components/CafeList";

export default function index() {
  const state = useSelector((state) => state.userReducer);
  const { isLoggedIn } = state;

  const grs80 =
    "+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43";
  const wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs ";

  //const toLat = proj4(grs80, wgs84, [953937.9, 1952051.9]);
  const toLat = proj4(grs80, wgs84, [207088.508452371, 454739.360770068]); //x, y순으로 적기 => 127 , 36 순으로 나옴

  const center = {
    lat: toLat[1],
    lng: toLat[0],
  };
  const containerStyle = {
    width: "500px",
    height: "500px",
  };
  return (
    <>
      {isLoggedIn ? <LoginNav /> : <Nav />}
       {/* <LoadScript googleMapsApiKey="AIzaSyCQOOCGwW4h5R1FImc1IKrseUw_YklS6IU">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript> */}
      <h1>
        카페를 선택해봐
        {/* {center.lat}, {center.lng} */}
      </h1>
      <CafeList />
    </>
  );
}

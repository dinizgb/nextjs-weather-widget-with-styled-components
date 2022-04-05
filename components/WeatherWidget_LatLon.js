import React, { useState, useEffect } from "react";
import Image from 'next/image';
import styled from 'styled-components';

const WeatherWidgetWrapper = styled.div`
    min-width: 250px;
    background: #173A5E;
    border: 1px solid #124d8a;
    border-radius: 6px;
    padding: 15px 15px 0 15px;
    margin: 20px;
    &:hover {
        background: #124d8a;
    }
`

const WidgetTitle = styled.h3`
    font-size: 16px;
    font-weight: 400;
    color: #eee;
`

const IconArea = styled.div`
    padding: 0 5px;
`

const TempText = styled.div`
    font-size: 30px;
    font-weight: 300;
    color: #eee;
    margin-top: 24px;
`

export default function WeatherWidget_LatLon() {
    const [weather, setWeather] = useState({});
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                fetchWeather(position.coords.latitude, position.coords.longitude);
            });
            const fetchWeather = async (latitude, longitude) => {
                try{
                    const weatherReq = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ee94006c9bb74ce892f181126211305&q=${latitude},${longitude}&days=1&aqi=no&alerts=no`);
                    const weatherData = await weatherReq.json();
                    setWeather({icon: <Image src={"https:" + weatherData.current.condition.icon} alt={`It is ${weatherData.current.temp_c} in your city`} width={80} height={80} />, temperature: weatherData.current.temp_c + "º C"});
                }
                catch{
                    console.log("xWthErr");
                }
            };
        }
    }, []);
    return (
        <WeatherWidgetWrapper>  
            <div className="row">
                <WidgetTitle>With Latitude and Longitude</WidgetTitle>
            </div>
            <div className="row">
                <IconArea>{weather.icon}</IconArea>
                <TempText>{weather.temperature}</TempText>
            </div>
        </WeatherWidgetWrapper>
    )
}
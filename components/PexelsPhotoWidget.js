import React, { useState, useEffect } from "react";
import Image from 'next/image';
import styled from 'styled-components';

const WeatherWidgetWrapper = styled.div`
    width: 280px;
    height: 350px;
    background: url("${props => props.background}") bottom center;
    border-radius: 8px;
    padding: 15px 0 0 0;
    margin: 20px;
    display: block;
    position: relative;
`

const WidgeTextArea = styled.div`
    width: 100%;
    height: 230px;
    position: absolute;
    bottom: 0;
    background: rgba(255,255,255,0) url("/images/cloud-bg.png");
    border-radius: 8px;
`

const TempText = styled.div`
    font-size: 46px;
    font-weight: 100;
    color: #666;
    margin: 90px 0 20px 0;
`

const WidgetTitle = styled.h3`
    font-size: 24px;
    font-weight: 300;
    color: #666;
    margin-bottom: 10px;
`

const DetailsArea = styled.span`    
    font-size: 12px;
    font-weight: 400;
    color: #666;
    letter-spacing: 2px;
`

export default function PexelsPhotoWidget(props) {
    const [weather, setWeather] = useState({});
    const [widgetBg, setWidgetBg] = useState();

    useEffect(() => {
        const fetchWeather = async () => {
            try{
                const weatherReq = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ee94006c9bb74ce892f181126211305&q=${props.params}&days=${props.days}&aqi=no&alerts=no`);
                const weatherData = await weatherReq.json();
                setWeather({condition: weatherData.current.condition.text, temperature: weatherData.current.temp_c + "º C"});
            }
            catch(e){
                console.log(e);
            }
        };
        const fetchPexels = async () => {
            try{
                const pexelsReq = await fetch(`https://api.pexels.com/v1/search?query=${props.pexelsQuery}&per_page=3`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': '563492ad6f917000010000010d12aa27ae77483d854466c2d3135df4',
                    }
                });
                const pexelsData = await pexelsReq.json();
                const bgPhoto = pexelsData.photos[0].src.large;
                console.log("bgPhoto", bgPhoto);
                setWidgetBg(bgPhoto);
            }
            catch(e){
                console.log(e);
            }
        };

        fetchWeather();
        fetchPexels();
    }, []);

    return (
        <WeatherWidgetWrapper background={widgetBg}>
            <WidgeTextArea>
                <div className="row">
                    <TempText>{weather.temperature}</TempText>
                </div>
                <div className="row">
                    <WidgetTitle>{props.title}</WidgetTitle>
                </div>
                <div className="row">
                    <DetailsArea>{props.currentDay} | {props.hour} | {weather.condition}</DetailsArea>
                </div>
            </WidgeTextArea>
        </WeatherWidgetWrapper>
    )
}
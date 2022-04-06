import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import getConditionColor from '/utils/getConditionColor';

const WeatherWidgetWrapper = styled.div`
    min-width: 250px;
    height: 350px;
    background: ${props => props.background} no-repeat bottom center;
    padding: 15px 15px 0 15px;
    margin: 20px;
    border-radius: 6px;
`

const WidgetTitle = styled.h3`
    font-size: 21px;
    font-weight: 400;
    letter-spacing: 4px;
    color: #eee;
    margin-top: 85px;
`

const TempText = styled.div`
    font-size: 50px;
    font-weight: 300;
    color: #eee;
    margin: 30px 0;
`

const DetailsArea = styled.span`    
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    letter-spacing: 3px;
`

export default function ColoredWidget(props) {
    const [weather, setWeather] = useState({});

    useEffect(() => {
        const fetchWeather = async () => {
            try{
                const weatherReq = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ee94006c9bb74ce892f181126211305&q=${props.params}&days=${props.days}&aqi=no&alerts=no`);
                const weatherData = await weatherReq.json();
                setWeather({widgetBg: getConditionColor(weatherData.current.condition.text, weatherData.location.localtime), temperature: weatherData.current.temp_c + "º C", condition: weatherData.current.condition.text});
            }
            catch{
                console.log("xWthErr");
            }
        };
        fetchWeather();
    }, []);
    return (
        <WeatherWidgetWrapper background={weather.widgetBg}>  
            <div className="row">
                <WidgetTitle>{props.title}</WidgetTitle>
            </div>
            <div className="row">
                <TempText>{weather.temperature}</TempText>
            </div>
            <div className="row">
                <DetailsArea>{weather.condition}</DetailsArea>
            </div>
        </WeatherWidgetWrapper>
    )
}
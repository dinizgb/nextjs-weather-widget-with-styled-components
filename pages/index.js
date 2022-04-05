import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Head from 'next/head';
import WeatherWidget_LatLon from "/components/WeatherWidget_LatLon";
import SimpleWidget from '/components/SimpleWidget';
import PexelsPhotoWidget from '/components/PexelsPhotoWidget';
import GifWidget from '/components/GifWidget';
import ColoredWidget from '/components/ColoredWidget';

const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  margin: 50px auto;
  padding: 0 0 10px 0;
  border-bottom: 1px solid #124d8a;
`;

export default function Home() {
  const today = new Date();
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const day = weekday[today.getDay()];
  const hour = today.getHours() + ":" + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();

  return (
    <>
    <Head>
      <title>NextJS Weather Widget with Styled Components</title>
      <meta name="description" content="NextJS Weather Widget with Styled Components" />
      <meta property="og:title" content="NextJS Weather Widget with Styled Components" key="title" />
      <meta property="og:description" content="NextJS Weather Widget with Styled Components" />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap" rel="stylesheet"></link>
    </Head>
      <main>
        <div className="container">
          <StyledWrapper>
            <div className="row">
              <h2>Default Usage Example</h2>
            </div>
            <div className="row space-between">
              <WeatherWidget_LatLon/>
              <SimpleWidget 
              params={'193.62.157.66'} 
              days={1}
              title={'With IP (FIX IP from London)'}
              />
              <SimpleWidget 
              params={'Tokyo'} 
              days={1}
              title={'With City Name (Tokyo)'}
              />
            </div>
          </StyledWrapper>
          <StyledWrapper>
            <div className="row">
              <h2>Pexels Photo integrated Example</h2>
            </div>
            <div className="row space-between">
              <PexelsPhotoWidget 
              params={'São Paulo'} 
              days={1}
              title={'São Paulo'}
              pexelsQuery={'São Paulo'}
              currentDay={day}
              hour={hour}
              />
              <PexelsPhotoWidget 
              params={'London'} 
              days={1}
              title={'London'}
              pexelsQuery={'London'}
              currentDay={day}
              hour={hour}
              />
              <PexelsPhotoWidget 
              params={'Hong Kong'} 
              days={1}
              title={'Hong Kong'}
              pexelsQuery={'Hong Kong'}
              currentDay={day}
              hour={hour}
              />
            </div>
          </StyledWrapper>
          <StyledWrapper>
            <div className="row">
              <h2>Animated Example</h2>
            </div>
            <div className="row space-between">
              <GifWidget 
              params={'Honolulu'} 
              days={1}
              title={'Honolulu'}
              />
              <GifWidget 
              params={'Cape Town'} 
              days={1}
              title={'Cape Town'}
              />
              <GifWidget 
              params={'Dubai'} 
              days={1}
              title={'Dubai'}
              />
            </div>
            <div className="row space-between">
              <GifWidget 
              params={'Amsterdam'} 
              days={1}
              title={'Amsterdam'}
              />
              <GifWidget 
              params={'Vancouver'} 
              days={1}
              title={'Vancouver'}
              />
              <GifWidget 
              params={'Kuala Lumpur'} 
              days={1}
              title={'Kuala Lumpur'}
              />
            </div>
            <div className="row space-between">
              <GifWidget 
              params={'Seoul'} 
              days={1}
              title={'Seoul'}
              />
              <GifWidget 
              params={'Bombaim'} 
              days={1}
              title={'Bombaim'}
              />
              <GifWidget 
              params={'Rome'} 
              days={1}
              title={'Rome'}
              />
            </div>
          </StyledWrapper>
          <StyledWrapper>
            <div className="row">
              <h2>Colored Example</h2>
            </div>
            <div className="row space-between">
              <ColoredWidget 
              params={'São Paulo'} 
              days={1}
              title={'São Paulo'}
              />
              <ColoredWidget 
              params={'Cairo'} 
              days={1}
              title={'Cairo'}
              />
              <ColoredWidget 
              params={'New York'} 
              days={1}
              title={'New York'}
              />
            </div>
            <div className="row space-between">
              <ColoredWidget 
              params={'London'} 
              days={1}
              title={'London'}
              />
              <ColoredWidget 
              params={'Wellington'} 
              days={1}
              title={'Wellington'}
              />
              <ColoredWidget 
              params={'Hong Kong'} 
              days={1}
              title={'Hong Kong'}
              />
            </div>
          </StyledWrapper>
        </div>
      </main>
    </>
  );
}
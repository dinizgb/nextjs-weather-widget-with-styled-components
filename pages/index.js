import styled from 'styled-components';
import Head from 'next/head';
import WeatherWidget_LatLon from '../components/WeatherWidget_LatLon';
import WeatherWidget_Ip from '../components/WeatherWidget_Ip';
import WeatherWidget_City from '../components/WeatherWidget_City';

export default function Home() {
  return (
    <>
    <Head>
      <title>NextJS Weather Widget with Styled Components</title>
      <meta name="description" content="NextJS Weather Widget with Styled Components" />
      <meta property="og:title" content="NextJS Weather Widget with Styled Components" key="title" />
      <meta property="og:description" content="NextJS Weather Widget with Styled Components" />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
    </Head>
      <main>
        <div className="container">
          <div className="row space-between">
            <WeatherWidget_LatLon/>
            <WeatherWidget_Ip/>
            <WeatherWidget_City/>
          </div>
        </div>
      </main>
    </>
  );
}
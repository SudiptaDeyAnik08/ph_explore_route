import React from 'react'
import { useLoaderData } from 'react-router-dom'

function SingleCountry() {
    const countryData = useLoaderData()[0];

    const {flags,altSpellings,capital,region,startOfWeek} = countryData;

   console.log(countryData?.name?.common)
  return (
    <div>
        <h3>{countryData?.name?.common}</h3>
        <img src={flags.png} alt="" />
        <p>altSpellings: {altSpellings[1]}</p>
        <p>capital: {capital[0]}</p>
        <p>region: {region}</p>
        <p>startOfWeek: {startOfWeek}</p>
    </div>
  )
}

export default SingleCountry
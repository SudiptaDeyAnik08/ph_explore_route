import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function Country() {

    const countries = useLoaderData();

    console.log(countries)


  return (
    <div>
        {
            countries.map(res => <li key={res.cca3}>
                <Link to={`/singleCountry/${res.name.common}`}  >{res.name.common}</Link>
            </li> )
        }
    </div>
  )
}

export default Country
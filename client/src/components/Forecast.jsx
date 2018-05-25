import React from 'react';

import ForecastDay from './ForecastDay.jsx'

const Forecast = (props) => {
  return (
    <div>
      Locations: 
      <div>
        {props.locations.map((location, index) => {
          return <ForecastDay location={location} index={index} key={index} />
        })}
      </div>
    </div>
  )
}

export default Forecast;
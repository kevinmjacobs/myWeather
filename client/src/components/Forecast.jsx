import React from 'react';

const Forecast = (props) => {
  props.forecast.date = ((new Date(props.forecast.date).getMonth() + 1) + '/' + (new Date(props.forecast.date).getDate()));
  return (
    <tbody class="forecast">
      <tr class="date">{props.forecast.date}</tr>
      <tr class="temp">{props.forecast.high}/{props.forecast.low}</tr>
    </tbody>
  )
}

export default Forecast;
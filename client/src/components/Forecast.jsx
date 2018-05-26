import React from 'react';

const Forecast = (props) => {
  props.forecast.date = ((new Date(props.forecast.date).getMonth() + 1) + '/' + (new Date(props.forecast.date).getDate()));
  return (
    <tbody class="forecast">
      <tr class="date">{props.forecast.date}</tr>
      <tr class="hi">H:{props.forecast.high}</tr>
      <tr class="low">L:{props.forecast.low}</tr>
    </tbody>
  )
}

export default Forecast;
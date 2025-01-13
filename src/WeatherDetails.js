import React from 'react'

const WeatherDetails = (props) => {
  return (
    <div className='image'>
        <img src={props.clrImage} alt="" />
        <p>Sunny</p>
    </div>
  )
}

export default WeatherDetails
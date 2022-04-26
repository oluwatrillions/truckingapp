import React from 'react';
import './FunFactInfo.css'

function FunFactInfo({info}) {
  return <div className='factsMetrics'>
    {info.map((infoData) => {
      const {id, metrics, type} = infoData
      return <div className='infoMetrics' key={id}>
        <h3>{metrics}k<span>+</span></h3>
        <h4>{ type}</h4>
      </div>
    })}

  </div>;
}

export default FunFactInfo;

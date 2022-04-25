import React from 'react';

function FunFactsData({info}) {
    return <div>
        {info.map((data) => {
            const [ id, metrics, type ] = data
            return <div key={id}>
                <h4>{metrics}</h4>
                <h3>{ type}</h3>
            </div>
      })}
  </div>;
}

export default FunFactsData;

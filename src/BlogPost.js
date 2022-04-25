import React from 'react';
import image from './images/shipp.png'

function BlogPost({dataInfo}) {
    return <div>
      {dataInfo.map((datas) => {
        const {id, day, month, name, time, description} = datas
        return <div key={id}>
            <div>
                <img src={image} alt='' />
                <h4>{day}</h4>
                <h3>{month}</h3>
            </div>
            <div>
              <h4>POSTED BY {name}, {time} MINUTES AGO.</h4>
              <h5>{ description}</h5>
          </div>
          <h4>READ MORE</h4>
        </div>
      })}
  </div>;
}

export default BlogPost

import React from 'react';
import './Blogpost.css'

function BlogPost({dataInfo}) {
    return <div>
      {dataInfo.map((datas) => {
        const {id, day, month, images, name, time, description} = datas
        return <div className='blogpost' key={id}>
            <div className='dataInfo'>
                <img src={images} alt='' />
                <h4>{day}</h4>
                <h3>{month}</h3>
            </div>
            <div className='blogInfo'>
              <h4 className='blogCred'>POSTED BY <span>{name}</span>, {time} MINUTES AGO.</h4>
            <h5 className='blogDesc'>{description}</h5>
            <h4 className='blogMore'>READ MORE</h4>
          </div>
          </div>          
      })}
  </div>
}

export default BlogPost

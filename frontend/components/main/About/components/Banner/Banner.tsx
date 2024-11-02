import React from 'react'

import "./Banner.scss"

const Banner = () => {
  return (
    <div className='itp-c-banner_container'>
        <div className='itp-c-banner_label'>
            {[...Array(10)].map((e, i) => <span key={i}>welcome to the future</span>)}
        </div>
        <div className='itp-c-banner'>
            <div className='itp-c-banner_text itp-c-banner_text--left'>setki zdobytych<br></br>stanowisk</div>
            <div className='itp-c-banner_figure'>tbd</div>
            <div className='itp-c-banner_text itp-c-banner_text--right'>30 lat<br></br>historii</div>
        </div>
    </div>
  )
}

export default Banner
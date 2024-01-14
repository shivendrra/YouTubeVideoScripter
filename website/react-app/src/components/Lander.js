import React from 'react';
import SideSec from './sub-components/SideSec';

export default function Lander() {
  return (
    <>
      <div className='mainLander'>
        <div className="row">
          <div className="sideSec col-lg-3">
            <SideSec />
          </div>
          <div className="col-lg-9">
            <div className="main-text-area">
              <textarea class="form-control" aria-label="With textarea" placeholder='Write your Script here'></textarea>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
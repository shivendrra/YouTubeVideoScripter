import React from 'react';
import SideSec from './sub-components/SideSec';

export default function Lander() {
  return (
    <>
    <div className='mainLander'>
      <div className="row">
        <div className="sideSec col-lg-3">
          <SideSec/>
        </div>
        <div className="col-lg-9">
          <ul>
            <li>Name</li>
            <li>Name</li>
            <li>Name</li>
            <li>Name</li>
            <li>Name</li>
          </ul>
        </div>
      </div>

    </div>
    </>
  )
}
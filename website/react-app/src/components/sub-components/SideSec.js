import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function SideSec() {
  return (
    <>
      <div className="SideSec">
        <h4>Saved Sessions</h4>
        <hr />
        <div className="saved-sess py-2">
          <div className="saved-card px-2 mb-3">
            <div className="saved-title">
            <h6 className=' my-auto py-2'>Rakesh Sharma: First Indian to the space</h6>
            </div>
            <span className='saved-option px-2'>
              <FontAwesomeIcon icon={faBars} />
            </span>
            <span className='saved-open px-2'>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
          <div className="saved-card px-2 mb-3">
            <div className="saved-title">
            <h6 className=' my-auto py-2'>Rakesh Sharma: First Indian to the space</h6>
            </div>
            <span className='saved-option px-2'>
              <FontAwesomeIcon icon={faBars} />
            </span>
            <span className='saved-open px-2'>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
          <div className="saved-card px-2 mb-3">
            <div className="saved-title">
              <h6 className=' my-auto py-2'>Rakesh Sharma: First Indian to the space</h6>
            </div>
            <span className='saved-option px-2'>
              <FontAwesomeIcon icon={faBars} />
            </span>
            <span className='saved-open px-2'>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function SavedSession(props) {
  return (
    <>
      <div className="saved-card px-2 mb-3">
        <div className="saved-title">
          <h6 className='my-auto py-2'>{props.title}</h6>
        </div>
        <span className='saved-option px-2'>
          <FontAwesomeIcon icon={faBars} />
        </span>
        <span className='saved-open px-2'>
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </div>
    </>
  )
}

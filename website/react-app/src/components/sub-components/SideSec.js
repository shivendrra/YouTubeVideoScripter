import React, { useState, useEffect } from "react";
import SavedSession from "./SavedSession";

export default function SideSec(props) {
  const [savedSessions, setSavedSessions] = useState([]);

  const handleNewSession = () => {
    console.log("Request for new session");
  }

  useEffect(() => {
    const fetchedSessions = [
      "Rakesh Sharma: First Indian to space",
      "Another Saved Session Title",
      "Yet Another Saved Session Title",
    ];

    setSavedSessions(fetchedSessions);
  }, []);

  return (
    <>
      <div className="SideSec">
        <div className="sideSec-head">
          <div className="col-lg-11 my-auto" onClick={handleNewSession}>
            <h6 className="my-auto">Saved Sessions</h6>
          </div>
          <div className="col-lg-1 my-auto">
            <i id="newSession" className="fa-regular fa-square-plus" title="New Session"></i>
          </div>
        </div>
        <hr />
        <div className="saved-sess py-2">
          {savedSessions.map((title, index) => (
            <SavedSession key={index} title={title} />
          ))}
        </div>
      </div>
    </>
  );
}

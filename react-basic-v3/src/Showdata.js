import React, { Fragment } from 'react'

function Showdata({runNumber, name}) {
    console.log(runNumber);

  return(
    <Fragment>
  <div className="text-center">{runNumber}</div>
  <div className="text-center">{name}</div>
  </Fragment>
  );
}

export default Showdata;

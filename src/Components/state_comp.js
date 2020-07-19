import React from "react";
export default function Statecomp({ countryData }) {
  countryData.map((user, i) => {
    if (!countryData[i]) 
        return <h1>LOADING</h1>;
  });
  return (
    <div>
      {/*<div>
        {countryData.map((user, i) => {
          return (
            <div>
              <div className="black">
                <h3>{`Index >> ${i}`}</h3>
                <h4>{`State->${countryData[i].State}`}</h4>
                <h5>
                  {`${countryData[i].State} CONFIRMED cases-> ${countryData[i].confirmed}`}
                </h5>
                <h5>
                  {`${countryData[i].State} ACTIVE cases-> ${countryData[i].active}`}
                </h5>
                <h5>
                  {`${countryData[i].State} RECOVERED cases-> ${countryData[i].recovered}`}
                </h5>
                <h5>
                  {`${countryData[i].State} DEATHS cases-> ${countryData[i].deaths}`}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    */}
    </div>
  );
}

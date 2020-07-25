import React from "react";
export default function table2({fullData }){
    if (!fullData[0]) return <h1 className="tc red">*******************</h1>;
    return(
        <div>
        <div>
        {fullData.map((user, i) => {
          return (
            <div key={i}>
              <div className="black">
              {/* <h1>{fullData[0].state}</h1> */}
                <h3>{`Index >> ${i}`}</h3>
                <h4>{`state->${fullData[i].state}`}</h4>
                <h5>
                  {`${fullData[i].state} delta Confirmed-> ${fullData[i].deltaconfirmed}`}
                </h5>
                <h5>
                  {`${fullData[i].state} CONFIRMED cases-> ${fullData[i].confirmed}`}
                </h5>
                <h5>
                  {`${fullData[i].state} ACTIVE cases-> ${fullData[i].active}`}
                </h5>
                <h5>
                  {`${fullData[i].state} RECOVERED cases-> ${fullData[i].recovered}`}
                </h5>
                <h5>
                  {`${fullData[i].state} DEATHS cases-> ${fullData[i].deaths}`}
                </h5>
                <h5>
                  {`${fullData[i].state} State Code-> ${fullData[i].statecode}`}
                </h5>
              </div>
            </div> 
          );
        })}
      </div>
        </div>
    )
}
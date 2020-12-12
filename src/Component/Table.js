import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "./Table.css";
function Table(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalBodyFunc = (district, state) => {
    const data = Object.entries(district.districtData);
    if (district !== undefined)
      return (
        <div
          className="modalBody"
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <div className="table">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
              }}
            >
              <div
                style={{
                  gridColumnEnd: "span 6",
                  backgroundColor: "white",
                }}
              >
                <h2>{state.state}</h2>
              </div>
              <div
                style={{
                  gridColumnEnd: "span 6",
                  backgroundColor: "white",
                }}
              >
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <CloseIcon
                    style={{ cursor: "pointer" }}
                    onClick={handleClose}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
              }}
            >
              <div
                style={{
                  gridColumnEnd: "span 4",
                  backgroundColor: "white",
                  padding: "5px",
                  borderBottom: "1px solid gray",
                }}
              >
                District
              </div>
              <div
                style={{
                  gridColumnEnd: "span 2",
                  backgroundColor: "white",
                  padding: "5px",
                  borderBottom: "1px solid gray",
                }}
              >
                Confirmed
              </div>
              <div
                style={{
                  gridColumnEnd: "span 2",
                  backgroundColor: "white",
                  padding: "5px",
                  borderBottom: "1px solid gray",
                }}
              >
                Active
              </div>
              <div
                style={{
                  gridColumnEnd: "span 2",
                  backgroundColor: "white",
                  padding: "5px",
                  borderBottom: "1px solid gray",
                }}
              >
                Recovered
              </div>
              <div
                style={{
                  gridColumnEnd: "span 2",
                  backgroundColor: "white",
                  padding: "5px",
                  borderBottom: "1px solid gray",
                }}
              >
                Death
              </div>
            </div>
            <div
              style={{ height: "auto", maxHeight: "60vh", overflowY: "auto" }}
            >
              {data.map((place, index) => (
                <div
                  key={index}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(12, 1fr)",
                  }}
                >
                  <div
                    style={{
                      gridColumnEnd: "span 4",
                      backgroundColor: "white",
                      padding: "5px",
                      borderBottom: "1px solid gray",
                      borderRight: "1px solid gray",
                      borderLeft: "1px solid gray",
                    }}
                  >
                    {place[0]}
                  </div>
                  <div
                    style={{
                      gridColumnEnd: "span 2",
                      backgroundColor: "white",
                      padding: "5px",
                      borderBottom: "1px solid gray",
                      borderRight: "1px solid gray",
                    }}
                  >
                    {place[1].confirmed}
                  </div>
                  <div
                    style={{
                      gridColumnEnd: "span 2",
                      backgroundColor: "white",
                      padding: "5px",
                      borderBottom: "1px solid gray",
                      borderRight: "1px solid gray",
                    }}
                  >
                    {place[1].active}
                  </div>
                  <div
                    style={{
                      gridColumnEnd: "span 2",
                      backgroundColor: "white",
                      padding: "5px",
                      borderBottom: "1px solid gray",
                      borderRight: "1px solid gray",
                    }}
                  >
                    {place[1].recovered}
                  </div>
                  <div
                    style={{
                      gridColumnEnd: "span 2",
                      backgroundColor: "white",
                      padding: "5px",
                      borderBottom: "1px solid gray",
                      borderRight: "1px solid gray",
                    }}
                  >
                    {place[1].deceased}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
  };
  // console.log(props.DistrictData);
  const state = props.fullData;
  const [stateQuery, setStateQuery] = useState("");
  const [modalBody, setModalBody] = useState(<div>Hello</div>);
  const districtData = (district, state) => {
    handleOpen();
    const display = modalBodyFunc(district, state);
    setModalBody(display);
  };

  return (
    <div className="parent">
      <div className="child">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            width: "100%",
          }}
        >
          <div style={{ gridColumnEnd: "span 12" }}>
            <input
              placeholder="Search"
              onChange={(event) => {
                setStateQuery(event.target.value);
              }}
              value={stateQuery}
              type="text"
              style={{
                width: "100%",
                border: "none",
                color: "red",
                backgroundColor: "#DCDDDE",
                padding: "5px",
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              width: "100%",
            }}
          >
            <div
              style={{
                gridColumnEnd: "span 4",
                backgroundColor: "white",
                padding: "5px",
                borderBottom: "1px solid gray",
                borderRight: "1px solid gray",
                borderLeft: "1px solid gray",
                borderRadius: "5px 0px 0px 0px",
              }}
            >
              State
            </div>
            <div
              style={{
                gridColumnEnd: "span 2",
                backgroundColor: "white",
                padding: "5px",
                borderBottom: "1px solid gray",
                borderRight: "1px solid gray",
              }}
            >
              Confirmed
            </div>
            <div
              style={{
                gridColumnEnd: "span 2",
                backgroundColor: "white",
                padding: "5px",
                borderBottom: "1px solid gray",
                borderRight: "1px solid gray",
              }}
            >
              Active
            </div>
            <div
              style={{
                gridColumnEnd: "span 2",
                backgroundColor: "white",
                padding: "5px",
                borderBottom: "1px solid gray",
                borderRight: "1px solid gray",
              }}
            >
              Recovered
            </div>
            <div
              style={{
                gridColumnEnd: "span 2",
                backgroundColor: "white",
                padding: "5px",
                borderBottom: "1px solid gray",
                borderRight: "1px solid gray",
                borderRadius: "0px 5px 0px 0px",
              }}
            >
              Death
            </div>
          </div>
        </div>
        {state
          .filter((state) =>
            state.state.toLowerCase().includes(stateQuery.toLowerCase())
          )
          .map((state, index) => {
            if (state.state === "Total") {
              return null;
            }
            return (
              <div
                key={index}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  onClick={() => {
                    districtData(props.DistrictData[state.state], state);
                  }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(12, 1fr)",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      gridColumnEnd: "span 4",
                      backgroundColor: "white",
                      padding: "5px",
                      cursor: "pointer",
                      borderBottom: "1px solid gray",
                      borderRight: "1px solid gray",
                      borderLeft: "1px solid gray",
                    }}
                  >
                    {state.state}
                  </div>
                  <div
                    style={{
                      gridColumnEnd: "span 2",
                      backgroundColor: "white",
                      padding: "5px",
                      cursor: "pointer",
                      borderBottom: "1px solid gray",
                      borderRight: "1px solid gray",
                    }}
                  >
                    {state.confirmed}
                  </div>
                  <div
                    style={{
                      gridColumnEnd: "span 2",
                      backgroundColor: "white",
                      padding: "5px",
                      cursor: "pointer",
                      borderBottom: "1px solid gray",
                      borderRight: "1px solid gray",
                    }}
                  >
                    {state.active}
                  </div>
                  <div
                    style={{
                      gridColumnEnd: "span 2",
                      backgroundColor: "white",
                      padding: "5px",
                      cursor: "pointer",
                      borderBottom: "1px solid gray",
                      borderRight: "1px solid gray",
                    }}
                  >
                    {state.recovered}
                  </div>
                  <div
                    style={{
                      gridColumnEnd: "span 2",
                      backgroundColor: "white",
                      padding: "5px",
                      cursor: "pointer",
                      borderBottom: "1px solid gray",
                      borderRight: "1px solid gray",
                    }}
                  >
                    {state.deaths}
                  </div>
                </div>
              </div>
            );
          })}
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {modalBody}
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Table;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 500 + rand();
  const left = 500 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function Table(props) {
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const body = (
  //   <div style={modalStyle} className={classes.paper}>
  //     <h2 id="simple-modal-title">Text in a modal</h2>
  //     <p id="simple-modal-description">
  //       Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  //     </p>
  //   </div>
  // );
  const modalBodyFunc = (district, stateName) => {
    const data = Object.entries(district.districtData);
    if (district !== undefined)
    console.log(district)
      return (
        <div
          style={{
            backgroundColor: "white",
            width: "70%",
            // transform: `translate(${0}%, ${0}%)`,
            marginTop:"5%",
            marginLeft:"10%"
          }}
        >
          <h2>{stateName}</h2>
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                width: "100%",
              }}
            >
              <div style={{ gridColumnEnd: "span 4", backgroundColor: "gray" }}>
                District
              </div>
              <div style={{ gridColumnEnd: "span 2", backgroundColor: "gray" }}>
                Confirmed
              </div>
              <div style={{ gridColumnEnd: "span 2", backgroundColor: "gray" }}>
                Active
              </div>
              <div style={{ gridColumnEnd: "span 2", backgroundColor: "gray" }}>
                Recovered
              </div>
              <div style={{ gridColumnEnd: "span 2", backgroundColor: "gray" }}>
                Death
              </div>
            </div>
            {data.map((place,index) => (
              <div
                key={index}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(12, 1fr)",
                  width: "100%",
                }}
              >
                <div
                  style={{ gridColumnEnd: "span 4", backgroundColor: "white" }}
                >
                  {place[0]}
                </div>
                <div
                  style={{ gridColumnEnd: "span 2", backgroundColor: "white" }}
                >
                  {place[1].confirmed}
                </div>
                <div
                  style={{ gridColumnEnd: "span 2", backgroundColor: "white" }}
                >
                  {place[1].active}
                </div>
                <div
                  style={{ gridColumnEnd: "span 2", backgroundColor: "white" }}
                >
                  {place[1].recovered}
                </div>
                <div
                  style={{ gridColumnEnd: "span 2", backgroundColor: "white" }}
                >
                  {place[1].deceased}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
  };
  // console.log(props.DistrictData);
  const state = props.fullData;
  const [stateQuery, setStateQuery] = useState("");
  const [modalBody, setModalBody] = useState("");
  const districtData = (district, stateName) => {
    handleOpen();
    const display = modalBodyFunc(district, stateName);
    setModalBody(display);
  };

  return (
    <div>
      <div>{/* {body} */}</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            width: "60%",
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
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            width: "60%",
          }}
        >
          <div style={{ gridColumnEnd: "span 4", backgroundColor: "gray" }}>
            State
          </div>
          <div style={{ gridColumnEnd: "span 2", backgroundColor: "gray" }}>
            Confirmed
          </div>
          <div style={{ gridColumnEnd: "span 2", backgroundColor: "gray" }}>
            Active
          </div>
          <div style={{ gridColumnEnd: "span 2", backgroundColor: "gray" }}>
            Recovered
          </div>
          <div style={{ gridColumnEnd: "span 2", backgroundColor: "gray" }}>
            Death
          </div>
        </div>
      </div>
      {state
        .filter((state) =>
          state.state.toLowerCase().includes(stateQuery.toLowerCase())
        )
        .map((state, index) => {
          return (
            <div
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                onClick={() => {
                  districtData(props.DistrictData[state.state], state.state);
                }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(12, 1fr)",
                  width: "60%",
                }}
              >
                <div
                  style={{ gridColumnEnd: "span 4", backgroundColor: "gray" }}
                >
                  {state.state}
                </div>
                <div
                  style={{ gridColumnEnd: "span 2", backgroundColor: "green" }}
                >
                  {state.confirmed}
                </div>
                <div
                  style={{ gridColumnEnd: "span 2", backgroundColor: "green" }}
                >
                  {state.active}
                </div>
                <div
                  style={{ gridColumnEnd: "span 2", backgroundColor: "green" }}
                >
                  {state.recovered}
                </div>
                <div
                  style={{ gridColumnEnd: "span 2", backgroundColor: "green" }}
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
  );
}

export default Table;

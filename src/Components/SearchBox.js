import React, { Component } from "react";
import ReactSearchBox from "react-search-box";
import styles from "./SearchBox.module.css";
import date from "date-and-time";
import Cards from "./Cards";
import { fetchData, fetchINDIA } from "../api/api";
import { state_data } from "./state_list";
import CustomizedTables from "./Tables_component";

const date_time = () => {
  const now = new Date();
  const time_view = date.format(now, "YYYY/MM/DD HH:mm:ss");
  return time_view;
};

export default class SearchBox extends Component {

  render() {
    const { data_cases, countryData } = this.state;
    return (
      <div>
        {/** 
        <div className="tc flex flex-wrap justify-center">
          <div className={styles.searchbox}>
            <label className={styles.label}>Search your city</label>
            <ReactSearchBox
              placeholder="States"
              value=""
              data={state_data}
              onSelect={(record) => this.setState({ select: record })}
              inputBoxFontColor="Red"
              dropDownHoverColor="grey"
            />
            <label className={styles.date_time}>{date_time()}</label>

            <Cards data_cases={data_cases} /> 
            countryData={this.state.countryData}/> 
            <state_comp data = {IndiaData}/> 
            
          </div>
          
        </div> 
        */}

      </div>
    );
  }
  // reference: https://www.npmjs.com/package/react-search-box
}

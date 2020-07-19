import React, { Component } from "react";
import ReactSearchBox from "react-search-box";
import styles from "./SearchBox.module.css";
import date from "date-and-time";
import Cards from "./Cards";
import { fetchData } from "../api/api";
import {state_data} from './state_list';
import { fetchINDIA } from "../api/api";

const date_time = () => {
  const now = new Date();
  const time_view = date.format(now, "YYYY/MM/DD HH:mm:ss");
  return time_view;
};

export default class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      data_cases: {},
      IndiaData: {},
    };
  }
  async componentDidMount() {
    try {
      const fetchedData = await fetchData();
    // const indiaData=await fetchINDIA();
    this.setState({
      data_cases: fetchedData
      // countryData: indiaData
    });
      
    } catch (error) {
      console.log(error);
    }

                  //API for India 
    try {
      const IndiaDataApi = await fetchINDIA();

      this.setState({
          IndiaData:IndiaDataApi
      })
      
    } catch (error) {
      console.log(error)
    }
    
  }


  
  render() {
    const { data_cases } = this.state;
    return (
      <div className = 'tc flex flex-wrap justify-center'>
        <div className={styles.searchbox}>
          <label className={styles.label}>Search your city</label>
          <ReactSearchBox
            placeholder="States"
            value=""
            data={state_data}
            onSelect={(record) => console.log(record)}
            inputBoxFontColor="Red"
            dropDownHoverColor="grey"
          />
          <label className={styles.date_time}>{date_time()}</label>

          <Cards data_cases={data_cases} /> 
          {/* countryData={this.state.countryData}/> */}
          {/* <state_comp data = {IndiaData}/> */}
        </div>
      </div>
    );
  }
  // reference: https://www.npmjs.com/package/react-search-box
}

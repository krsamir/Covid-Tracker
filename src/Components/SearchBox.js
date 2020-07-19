import React, { Component } from "react";
import ReactSearchBox from "react-search-box";
import styles from "./SearchBox.module.css";
import date from "date-and-time";
import Cards from "./Cards";
import { fetchData,fetchINDIA } from "../api/api";
import {state_data} from './state_list';
<<<<<<< HEAD
import { fetchINDIA } from "../api/api";
=======
import Statecomp from './state_comp';
>>>>>>> d12d23e0607d9b79535d1410f6c6a7a2888671ed

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
<<<<<<< HEAD
      IndiaData: {},
=======
      countryData: [],
      select: ''
>>>>>>> d12d23e0607d9b79535d1410f6c6a7a2888671ed
    };
  }
  async componentDidMount() {
    try {
      const fetchedData = await fetchData();
      const indiaData=await fetchINDIA();
    this.setState({
      data_cases: fetchedData,
      countryData: indiaData
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
    const { data_cases,countryData } = this.state;
    return (
      <div className = 'tc flex flex-wrap justify-center'>
        <div className={styles.searchbox}>
          <label className={styles.label}>Search your city</label>
          <ReactSearchBox
            placeholder="States"
            value=""
            data={state_data}
            onSelect={(record) => this.setState({select:record})}
            inputBoxFontColor="Red"
            dropDownHoverColor="grey"
          />
          <label className={styles.date_time}>{date_time()}</label>

          <Cards data_cases={data_cases} /> 
<<<<<<< HEAD
          {/* countryData={this.state.countryData}/> */}
          {/* <state_comp data = {IndiaData}/> */}
=======
          <Statecomp countryData={countryData} />
          {/*console.log(countryData)*/}
>>>>>>> d12d23e0607d9b79535d1410f6c6a7a2888671ed
        </div>
      </div>
    );
  }
  // reference: https://www.npmjs.com/package/react-search-box
}

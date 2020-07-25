import React, { Component } from "react";
import { fetchApiData, fetchINDIA } from "./api/api";
// import StateTable from "./Components/Tables_component";
import Card from './Components/cardComponent';
import Table2 from './Components/table2'
// import Tabular from './Components/Tabular_data'

export default class App extends Component{
    constructor() {
        super();
        this.state = {
          fullData: [],
          countryData: [],
          select: "",
        };
      }
      async componentDidMount() {
        try {
          const fetchedData = await fetchApiData();
          const indiaData = await fetchINDIA();
          this.setState({
            fullData:fetchedData,
            countryData: indiaData,
          })
        } catch (error) {
          console.log(error);
        }
      }
 
        render() {
        const { fullData, countryData} = this.state;
        
        return (
          <div>
            <Card fullData = {fullData}/>
            {/* <Tabular/> */}
            <Table2 fullData={fullData}/>
            {/* <StateTable  countryData = {countryData}/>                       */}
          </div>
        );
      }

}
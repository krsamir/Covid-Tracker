import React, { Component } from "react";
import { fetchApiData, fetchDistrictApi } from "./api/api";
//import TablesComponent from "./Components/Tables_component";
import Card from "./Components/cardComponent";
// import Table2 from './Components/table2'
import Tabular from "./Components/Tabular_data";
// import StateDistrictTable from './Components/stateDistrictTable.js'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fullData: [],
      select: "",
      DistrictData: {},
    };
  }
  async componentDidMount() {
    try {
      const fetchedData = await fetchApiData();
      const fetchedDistrictData = await fetchDistrictApi();
      this.setState({
        fullData: fetchedData,
        DistrictData: fetchedDistrictData,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { fullData, DistrictData } = this.state;

    return (
      <div>
        <Card fullData={fullData} />
        {/* <StateDistrictTable fullData={fullData}/> */}
        <Tabular fullData={fullData} DistrictData={DistrictData} />
        {/* <TablesComponent fullData = {fullData}/> */}
        {/* <Table2 fullData={fullData}/> */}
      </div>
    );
  }
}

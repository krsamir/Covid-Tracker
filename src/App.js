import React, { Component } from "react";
import { fetchApiData, fetchDistrictApi } from "./api/api";
//import TablesComponent from "./Components/Tables_component";
import Card from "./Components/cardComponent";
import Table from "./Component/Table"
// import Table2 from './Components/table2'
// import Tabular from "./Components/Tabular_data";
// import DistrictCard from './Components/DistrictCard'
// import CovidTable from './Components/CovidTable'
export default class App extends Component {
  constructor() { 
    super();
    this.state = {
      fullData: [],
      select: "",
      DistrictData:{},
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
        {/* <DistrictCard fullData={fullData} DistrictData={DistrictData}/> */}
        <Card fullData={fullData} />
        <Table fullData={fullData} DistrictData={DistrictData}/>
        {/* <CovidTable fullData={fullData} /> */}
        {/* <Tabular fullData={fullData} DistrictData={DistrictData} /> */}
        {/* <TablesComponent fullData = {fullData}/> */}
        {/* <Table2 fullData={fullData}/> */}
      </div>
    );
  }
}

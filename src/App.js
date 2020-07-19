import React, { Component } from "react";
import { fetchData, fetchINDIA } from "./api/api";
import StateTable from "./Components/Tables_component";
import SpacingGrid from './Components/cardComponent';

export default class App extends Component{
    constructor() {
        super();
        this.state = {
          data_cases: {},
          countryData: [],
          select: "",
        };
      }
      async componentDidMount() {
        try {
          const fetchedData = await fetchData();
          const indiaData = await fetchINDIA();
          this.setState({
            data_cases: fetchedData,
            countryData: indiaData,
          });
        } catch (error) {
          console.log(error);
        }
      }
    
      render() {
        const { data_cases, countryData } = this.state;
        return (
          <div>
            <SpacingGrid data_cases={data_cases}/>
            <StateTable countryData = {countryData}/>
          </div>
        );
      }

}
import React, { Component } from "react";
import { fetchData, fetchINDIA } from "./api/api";
import StateTable from "./Components/Tables_component";
import Card from './Components/cardComponent';
import Tabular from './Components/Tabular_data'
import Paper from "@material-ui/core/Paper";

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
          })
        } catch (error) {
          console.log(error);
        }
      }

        render() {
        const { data_cases, countryData} = this.state;
        
        return (
          <div>
          <Paper>
            <Card data_cases={data_cases}/>
            <StateTable countryData = {countryData}/>
            </Paper>
          </div>
        );
      }

}
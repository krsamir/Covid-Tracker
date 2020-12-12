import React, { Component, useEffect, useState } from "react";
import { fetchApiData, fetchDistrictApi } from "./api/api";
//import TablesComponent from "./Components/Tables_component";
import Card from "./Components/cardComponent";
import Table from "./Component/Table"
import {useSpring, animated} from 'react-spring'
// import Table2 from './Components/table2'
// import Tabular from "./Components/Tabular_data";
// import DistrictCard from './Components/DistrictCard'
// import CovidTable from './Components/CovidTable'
// export default class App extends Component {
  export default function App(){
  // constructor() { 
  //   super();
  //   this.state = {
  //     fullData: [],
  //     select: "",
  //     DistrictData:{},
  //   };
  // }
  // async componentDidMount() {
  //   try {
  //     const fetchedData = await fetchApiData();
  //     const fetchedDistrictData = await fetchDistrictApi();
  //     this.setState({
  //       fullData: fetchedData,
  //       DistrictData: fetchedDistrictData,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const [fullData,setFullData] = useState([]);
  // const [select,setSelect] = useState("");
  const [DistrictData,setDistrictData] = useState({});
  useEffect(()=>{
    const fetchData = async() => {
      try {
       const fetchedData = await fetchApiData();
      const fetchedDistrictData = await fetchDistrictApi();
      setFullData(fetchedData);
      setDistrictData(fetchedDistrictData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  },[])

  // render() {
    // const { fullData, DistrictData } = this.state;
    const anim = useSpring({opacity: 1, from: {opacity: 0}});
    return (
      <div>
        {/* <DistrictCard fullData={fullData} DistrictData={DistrictData}/> */}
        <animated.div style={anim}>
        <Card fullData={fullData} />
        <Table fullData={fullData} DistrictData={DistrictData}/>
        </animated.div>
        {/* <CovidTable fullData={fullData} /> */}
        {/* <Tabular fullData={fullData} DistrictData={DistrictData} /> */}
        {/* <TablesComponent fullData = {fullData}/> */}
        {/* <Table2 fullData={fullData}/> */}
      </div>
    );
  }
// }

import React, { useEffect, useState } from "react";
import { fetchApiData, fetchDistrictApi } from "./api/api";
import Card from "./Components/cardComponent";
import Table from "./Component/Table";
import { useSpring, animated } from "react-spring";
export default function App() {
  const [fullData, setFullData] = useState([]);
  const [DistrictData, setDistrictData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchApiData();
        const fetchedDistrictData = await fetchDistrictApi();
        setFullData(fetchedData);
        setDistrictData(fetchedDistrictData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const anim = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <div>
      <animated.div style={anim}>
        <Card fullData={fullData} />
        <Table fullData={fullData} DistrictData={DistrictData} />
      </animated.div>
    </div>
  );
}

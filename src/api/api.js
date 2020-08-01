import axios from "axios";

const url = "https://api.covid19india.org/data.json";
export const fetchApiData = async () => {
  try {
    const response = await axios.get(url);
    const dataX = response.data;
    // const modifiedApiData = {
    //     cases_time_series : dataX.cases_time_series,
    //     statewise : dataX.statewise
    //   };
    const state_wise = dataX.statewise.map((data_num) => ({
      active: data_num.active,
      confirmed: data_num.confirmed,
      recovered: data_num.recovered,
      deaths: data_num.deaths,
      deltaconfirmed: data_num.deltaconfirmed,
      deltadeaths: data_num.deltadeaths,
      deltarecovered: data_num.deltarecovered,
      lastupdatedtime: data_num.lastupdatedtime,
      state: data_num.state,
      statecode: data_num.statecode,
    }));
    //   console.log(modifiedApiData);
    return state_wise;
  } catch (error) {
    console.log(error);
  }
};

const url2 = "https://api.covid19india.org/state_district_wise.json";

export const fetchDistrictApi = async () => {
  try {
    const response2 = await axios.get(url2);
    const responseData = response2.data;
    const arrays = Object.entries(responseData)
    const states = [];
    const dist =[];
    for (let i =0;i<arrays.length;i++){
      states.push(arrays[i][0])
      // const distArray = Object.entries(arrays[i][1].districtData)
    }
    const modifiedData={
      states:states,
      arrays:arrays
    }
    // console.log(arrays[5][1].districtData)
    return (responseData)
  } catch (error) {}
};
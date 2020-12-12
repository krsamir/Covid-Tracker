import axios from "axios";

const url = "https://api.covid19india.org/data.json";
export const fetchApiData = async () => {
  try {
    const response = await axios.get(url);
    const dataX = response.data;
    const state_wise = dataX.statewise.map((data_num) => ({
      active: parseInt(data_num.active),
      confirmed: parseInt(data_num.confirmed),
      recovered: parseInt(data_num.recovered),
      deaths: parseInt(data_num.deaths),
      deltaconfirmed: parseInt(data_num.deltaconfirmed),
      deltadeaths: parseInt(data_num.deltadeaths),
      deltarecovered: parseInt(data_num.deltarecovered),
      lastupdatedtime: data_num.lastupdatedtime,
      state: data_num.state,
      statecode: data_num.statecode,
    }));
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
    const arrays = Object.entries(responseData);
    const states = [];
    for (let i = 0; i < arrays.length; i++) {
      states.push(arrays[i][0]);
    }
    return responseData;
  } catch (error) {}
};

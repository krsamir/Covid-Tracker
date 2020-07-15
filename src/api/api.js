import axios from "axios";
//const url = 'https://covid19.mathdro.id/api';
const url = "https://covid19.mathdro.id/api/countries/india";
export const fetchData = async () => {
  let changeableUrl = url;
  // if (country) {
  //     changeableUrl = `${url}/countries/${country}`
  // }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(changeableUrl);
    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

/*
export const fetchINDIA=async()=>{
    const urlc=`${url}/countries/INDIA/confirmed` 
    try{
        const {dataI}= await axios.get(urlc);
        const IndiaData=dataI.map((dataconf)=>({
            State: dataconf.provinceState,
            confirmed: dataconf.confirmed,
            recovered:dataconf.recovered,
            deaths:dataconf.deaths,
            active:dataconf.active
            
        }))
        return IndiaData;
    }
    catch(error){
        console.log(error)
    }
}
export const fetchDailyData = async()=>{
    try {
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        })) 
        return modifiedData;
    } catch (error) {
        console.log(error)
    }
}
export const fetchCountries = async()=>{
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`)
        return countries.map((country )=>country.name)
    } catch (error) {
        console.log(error)
    }
}
export const fetchCountry=async(country)=>{
    let changeableUrl = url;
    if (country) {
        changeableUrl = `${url}/countries/${country}/confirmed`
    }
     try{
        const {dataI}= await axios.get(changeableUrl);
        const IndiaData=dataI.map((dataconf)=>({
            State: dataconf.provinceState,
            confirmed: dataconf.confirmed,
            recovered:dataconf.recovered,
            deaths:dataconf.deaths,
            active:dataconf.active
            
        }))
        return IndiaData;
    }
    catch(error){
        console.log(error)
    }
}
*/

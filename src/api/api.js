import axios from "axios";

const url = "https://api.covid19india.org/data.json";
export const fetchApiData = async () => {
    try {
        const response = await axios.get(url);
        const dataX = response.data
        // const modifiedApiData = {
        //     cases_time_series : dataX.cases_time_series,
        //     statewise : dataX.statewise
        //   };
           const state_wise = dataX.statewise.map((data_num)=>({
               active :data_num.active,
               confirmed :data_num.confirmed,
               recovered : data_num.recovered,
               deaths : data_num.deaths,
               deltaconfirmed: data_num.deltaconfirmed,
               deltadeaths : data_num.deltadeaths,
               deltarecovered: data_num.deltarecovered,
               lastupdatedtime:data_num.lastupdatedtime,              
               state: data_num.state,
               statecode : data_num.statecode
           }));
        //   console.log(modifiedApiData);
          return state_wise
    } catch (error) {
        console.log(error);
    }
}

const url2 = 'https://api.covid19india.org/v4/data.json';

// export const district_wise  
















export const fetchINDIA=async()=>{
    const url_India = `https://covid19.mathdro.id/api/countries/india/confirmed`;
    try{
        const {data}= await axios.get(url_India);
        const IndiaData=data.map((dataconf)=>({
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

    /*const handlestatechange = async(state)=>{
        await fetchINDIA();
    } 
    handlestatechange();
/*
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

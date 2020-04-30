import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async() => {
    try {
        const {data: {confirmed, recovered, deaths, lastUpdated}} = await axios.get(url);
        return {confirmed,recovered,deaths,lastUpdated, };
        
        
    } catch (error){

    }
}

export const fetchDailyData = async () => {
    try{
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportData,
        }));
        return modifiedData;
    } catch (error){

    }
}
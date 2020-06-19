import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'
import styles from './SearchBox.module.css'; 
import date from 'date-and-time';

const date_time =()=>{
    const now = new Date();
    const time_view=date.format(now, 'YYYY/MM/DD HH:mm:ss');
    return time_view;    
}

export default class SearchBox extends Component { 
    data = [
        {
            key: 'An',
            value: 'Andhra Pradesh',
        },
        {
            key: 'Ar',
            value: 'Arunachal Pradesh',
        },
        {
            key: 'As',
            value: 'Assam',
        },
        {
            key: 'Bi',
            value: 'Bihar',
        },
        {
            key: 'Ch',
            value: 'Chhattisgarh',
        },
        {
            key: 'Go',
            value: 'Goa'
        },
        {
            key: 'Gu',
            value: 'Gujrat'
        },
        {
            key: 'Ha',
            value: 'Haryana'
        },
        {
            key: 'Hi',
            value: 'Himachal Pradesh'
        }
    ]
    render() {
        return (
            <div className = {styles.searchbox}>
                <label className={styles.label}>Search your city</label>
               <ReactSearchBox
                placeholder="States"
                value=""
                data={this.data}
                onSelect={record => console.log(record)}
                inputBoxFontColor = "Red"
                dropDownHoverColor = "grey"
            /> 
            <label className={styles.date_time}>{date_time()}</label>
            </div>
            
        )
    }
    // reference: https://www.npmjs.com/package/react-search-box
}
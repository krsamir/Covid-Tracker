import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'
import styles from './SearchBox.module.css'; 

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
               <ReactSearchBox 
                placeholder="States"
                value=""
                data={this.data}
                onSelect={record => console.log(record)}
                inputBoxFontColor = "Red"
                dropDownHoverColor = "grey"
            /> 
            </div>
            
        )
    }
    // reference: https://www.npmjs.com/package/react-search-box
}
import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'

export default class App extends Component {
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
            <ReactSearchBox
                placeholder="States"
                value=""
                data={this.data}
                onSelect={record => console.log(record)}
            />
        )
    }
    // reference: https://www.npmjs.com/package/react-search-box
}
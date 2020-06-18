import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './SearchBox';
import View from './View'
import OutlinedCard from './OutlinedCard'
ReactDOM.render(
  <React.StrictMode>
    <SearchBox/>
    <OutlinedCard/>
  </React.StrictMode>,
  document.getElementById('root')
);
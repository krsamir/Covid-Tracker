import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './SearchBox';
import View from './View'
import Cards from './Cards'
ReactDOM.render(
  <React.StrictMode>
    <SearchBox/>
    <Cards/>
  </React.StrictMode>,
  document.getElementById('root')
);
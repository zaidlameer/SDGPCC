import React from 'react';
import FileUpload from './components/FileUpload';
import './App.css';

const App = () => (
  <div className='container mt-30'>
    <h5 className='display-30 text-center mb-30'>
      <i className='' /> Upload your scalp photo from here to Update
    </h5>

    <FileUpload />
  </div>
);

export default App;
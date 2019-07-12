import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div class="btn-group">
        <button type="button" class="btn btn-secondary">Split dropdown</button>
        <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item disabled" href="#">Disabled action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Separated link</a>
        </div>
      </div>
    </div>
  );
}

export default App;

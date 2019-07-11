import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <strong></strong> 
    </div>
    
    <script>
      $(".alert").alert();
    </script>
  );
}

export default App;

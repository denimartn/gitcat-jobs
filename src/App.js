import React from 'react';
import './App.css';
import './tailwind.output.css'
import axios from 'axios'
function App() {

const res = async () => {
    const res = await axios.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?=javascript&location=uk")
    console.log(res)
    
  }
  return (
    <div className="App">
<button onClick={res}>Click</button>
    </div>
  );
}

export default App;

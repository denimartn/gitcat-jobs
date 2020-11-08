import React, { useState } from "react";
import "./App.css";
import "./NavBar.js"
import "./tailwind.output.css";
import axios from "axios";
import NavBar from "./NavBar.js";
import Form from "./Form";
function App() {
  const [jobs, setJobs] = useState([]);
  React.useEffect(() => {
    async function fetchData() {
      let res = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=javascript&location=milan"
      );
      console.log(res);
      let newArr = [];
      for (let job of res.data) {
        newArr.push(job);
      }
      setJobs(newArr);
    }
    console.log(jobs);
    fetchData();
  });

  return (
    <div>
 <NavBar/>
<Form/>
    </div>
 
  );
}

export default App;

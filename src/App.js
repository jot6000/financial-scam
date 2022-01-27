import './App.css';
import logo from './logo.png'
import { useEffect, useState } from 'react';
import Graph from './features/graph/Graph';
import GraphForm from './features/graph/GraphForm';

function App(){
  const [graphs,setGraphs] = useState([])

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/scamdata')
    .then(response=>response.json())
    .then(data=>setGraphs(data))
  },[])

  return (
    <div className="App">
        <h1> <img src={logo}/>Big Graphs</h1>
        <GraphForm/>
        {graphs.map((graph)=>
          <Graph graph={graph} height={450} width={450}/>
        )}
    </div>
  );
}

export default App;
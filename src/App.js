import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'
import Axios from 'axios'

function App() {

  useEffect(()=>{
    console.log("hello api");


    // success
    // Axios.get('https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=Ojx1dXXUoWE&key=AIzaSyCFpjtE9aDba5P1vuLN4-pfbERNetQTK7I')
    // .then((res)=>{
    //   console.log(res)
    // })

    Axios.get('https://youtube.googleapis.com/youtube/v3/comments?part=snippet&id=UgxTZoAsM56HotDOra54AaABAg&key=AIzaSyCFpjtE9aDba5P1vuLN4-pfbERNetQTK7I')
    .then((res)=>{
      console.log(res)
    })

    //UgxTZoAsM56HotDOra54AaABAg

    Axios.get('https://youtube.googleapis.com/youtube/v3/comments?part=snippet&id=UgxTZoAsM56HotDOra54AaABAg&key=AIzaSyCFpjtE9aDba5P1vuLN4-pfbERNetQTK7I')
    .then((res)=>{
      console.log(res)
    })


  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

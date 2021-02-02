import './App.css';
import Row from './Row'
import requests from './requests'

function App() {
  return (
    <div className="App">
     <h1>Lets build netflix clone</h1>
     <Row title="Netflix Orignals" fetchUrl={requests.fetchNetflixOriginals}/> 
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>

    </div>
  );
}

export default App;

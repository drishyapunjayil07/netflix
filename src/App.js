
import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div>

      <nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row isPresent={true} title="Trending" fetchUrl={requests.fetchTrending} />

      <Row title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Documenteries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
} 

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Cards from './component/Cards'
import CardDetails from './component/CardDetails'
import HeroBanner from './component/HeroBanner';
import Search from './component/Search';

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HeroBanner />}></Route>
            <Route path="/movie/:type" element={<Cards />}></Route>
            <Route path="/moviedetails/:id" element={<CardDetails />}></Route>
            <Route path="/search/:query" element={<Search />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;



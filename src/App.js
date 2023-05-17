import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Cards from './component/Cards'
import CardDetails from './component/CardDetails'

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Cards />}></Route>
            <Route path="/Cards/:type" element={<Cards />}></Route>
            <Route path="/carddetails/:id" element={<CardDetails />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;



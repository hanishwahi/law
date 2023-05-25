 import './App.css';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import './Style/Style.css'
 import './Style/Responsive.css'
import Header from './Header/Header';
import Home from './Components/Home';
import Footer from './Footer/Footer'
import PracticeAreaFull from './Components/PracticeAreaFull';
 


function App() {
  return (
  <>
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route index element={<Home/>}/>
  <Route path='/our-practice-area' element={<PracticeAreaFull/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </>
  );
}

export default App;

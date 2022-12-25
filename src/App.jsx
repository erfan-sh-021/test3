import Layout from './component/layout/layout';
import './scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reservation from './component/children/reservation';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route path='/resevtion' element={<Reservation/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Reservation/> */}
    </>
  );
}

export default App;

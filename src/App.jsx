import Layout from './component/layout/layout';
import './scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reservation from './component/children/reservation';
import ItemSelected from './component/children/itemSelected';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/resevtion' element={<Reservation />} />
            <Route path='/itemSelected' element={<ItemSelected />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Reservation/> */}
    </>
  );
}

export default App;

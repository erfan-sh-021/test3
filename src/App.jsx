import Layout from './component/layout/layout';
import './scss/main.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Reservation from './component/children/reservation';
import ItemSelected from './component/children/itemSelected';
const data = [
  {
      id: 0,
      tittle: 'سونا',
      url: require('./assets/img/react.png')
  },
  {
      id: 1,
      tittle: 'سینما',
      url: require('./assets/img/react.png')
  },
  {
      id: 2,
      tittle: 'استخر',
      url: require('./assets/img/react.png')
  },
  {
      id: 3,
      tittle: 'سالن بدنسازی',
      url: require('./assets/img/react.png')
  },
  {
      id: 4,
      tittle: 'سالن همایش',
      url: require('./assets/img/react.png')
  }
]
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/resevtion' element={<Reservation />} />
            <Route path='/itemSelected' element={<ItemSelected props={data}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Reservation/> */}
    </>
  );
}

export default App;

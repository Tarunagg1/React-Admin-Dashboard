import './App.css';
import Home from './pages/home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Fragment } from 'react';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import New from './pages/new/New';
import List from './pages/list/List';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userid" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":userid" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

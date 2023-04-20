import { Routes, Route } from 'react-router-dom';
import Contacts from 'pages/Contacts/Contacts';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        paddingLeft: '40px',
        paddingRight: '40px',
        // fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

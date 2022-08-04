import {createContext} from 'react';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Products from './components/Products';
import Reports from './components/Reports';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import {useState , useContext , useEffect} from 'react';
import UserContext from './Context/UserContext';


function App() {

  const [userData , setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  return (
    <BrowserRouter>
    <UserContext.Provider value={{userData , setUserData}}>
      <Routes>
        <Route extact path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

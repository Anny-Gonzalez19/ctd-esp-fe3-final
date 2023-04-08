import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import { routes } from "./routes"

function App() {
  const { home, contact, favs, dentist } = routes;

  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path={home.path} element={<Home/>} />
          <Route path={contact.path} element={<Contact/>} />
          <Route path={`${dentist.path}/:id`} element={<Detail/>} />
          <Route path={favs.path} element={<Favs/>} />
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;

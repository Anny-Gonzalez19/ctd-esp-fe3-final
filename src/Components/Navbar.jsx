import { Link } from 'react-router-dom'
//import { useTheme } from '../Components/utils/global.context';
import { routes } from '../routes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { home, contact, favs } = routes;
  /*const { theme, toggleTheme } = useTheme();

  const toggleThemeHandler = () => {
    toggleTheme();
  };*/
  

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to={home.path}>{home.name}</Link>
      <Link to={contact.path}>{contact.name}</Link>
      <Link to={favs.path}>{favs.name}</Link>
      <button /*onClick={toggleThemeHandler}*/>Change theme</button>
    </nav>
  )
}

export default Navbar
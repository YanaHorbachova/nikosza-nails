import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes';
import s from'../Navigation.module.css';

const Navigation = () =>{

  return (

    <nav >
      <ul className={s.nav}> 
        <li className={s.LinkItem}>
          <NavLink
            className={s.Link}
            to={routes.team}
            activeClassName={s.LinkActive} >
            Команда
          </NavLink>
        </li>
        <li className={s.LinkItem}>
          <NavLink
            className={s.Link}
            to={routes.salon}
            activeClassName={s.LinkActive} >
            Салон
          </NavLink>
        </li>
        <li className={s.LinkItem}>
          <NavLink
            className={s.Link}
            to={routes.work}
            activeClassName={s.LinkActive} >
            Работы
          </NavLink>
        </li>
        <li className={s.LinkItem}>
          <NavLink
            className={s.Link}
            to={routes.courses}
            activeClassName={s.LinkActive} >
            Курсы
          </NavLink>
        </li>
        <li className={s.LinkItem}>
          <NavLink
            className={s.Link}
            to={routes.contacts}
            activeClassName={s.LinkActive} >
            Контакты
          </NavLink>
        </li>
      </ul>


     </nav>

  );
}
 

  export default Navigation;
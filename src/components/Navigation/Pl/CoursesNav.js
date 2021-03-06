import React from 'react';
import s from '../Navigation.module.css'
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes';

const SalonNav = () =>  {
    return ( 
        <div>
            <NavLink 
            className={s.Link_cours} 
            activeClassName={s.LinkActive_cours}
            to={{pathname: `${routes.start_up}`}}>
                Kurs "StartUp"
            </NavLink>

            <NavLink 
            className={s.Link_cours} 
            activeClassName={s.LinkActive_cours}
            to={{pathname: `${routes.up_grade}`}} >
                Kurs "UpGrade"
            </NavLink>
        </div>               
    );
};



export default SalonNav;
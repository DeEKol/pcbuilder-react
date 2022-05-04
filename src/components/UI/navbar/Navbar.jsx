import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to='/about'>О сайте</Link>
            <Link to='/cpu'>Процессоры</Link>
            <Link to='/cpufan'>Процессорные кулеры</Link>
            <Link to='/body'>Корпуса</Link>
        </div>
    )
}

export default Navbar;
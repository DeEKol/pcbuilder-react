import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to='/about'>О сайте</Link>
            <Link to='/pc'>Компьютеры</Link>
            <Link to='/body'>Корпуса</Link>
            <Link to='/cpu'>Процессоры</Link>
            <Link to='/cpufan'>Процессорные кулеры</Link>
            <Link to='/gpu'>Видеокарты</Link> 
            <Link to='/powerunit'>Блоки питания</Link>  
            <Link to='/ram'>Оперативная память</Link>
            <Link to='/storage'>Накопители</Link>
            <Link to='/fan'>Вентиляторы</Link>
            <Link to='/motherboard'>Материнские платы</Link>
        </div>
    )
}

export default Navbar;
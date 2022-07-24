import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div>
            <Link style={{marginRight: '15px'}} to='/about'>О сайте</Link>
            <Link style={{marginRight: '15px'}} to='/pc'>Компьютеры</Link>
            <Link style={{marginRight: '15px'}} to='/body'>Корпуса</Link>
            <Link style={{marginRight: '15px'}} to='/cpu'>Процессоры</Link>
            <Link style={{marginRight: '15px'}} to='/cpufan'>Процессорные кулеры</Link>
            <Link style={{marginRight: '15px'}} to='/gpu'>Видеокарты</Link> 
            <Link style={{marginRight: '15px'}} to='/powerunit'>Блоки питания</Link>  
            <Link style={{marginRight: '15px'}} to='/ram'>Оперативная память</Link>
            <Link style={{marginRight: '15px'}} to='/storage'>Накопители</Link>
            <Link style={{marginRight: '15px'}} to='/fan'>Вентиляторы</Link>
            <Link style={{marginRight: '15px'}} to='/motherboard'>Материнские платы</Link>
        </div>
    )
}

export default Navbar;
import { useState } from 'react';
import Sorting from '../utils/Sorting';

//Хук возвращает [элементы, функция изменения элементов, сортировка функция изменения сортировки, функция создания элемента, функция удаления элемента, функция сортировки]

export const useElements = () => {
    const [elements, setElements] = useState([]);
    const [sortSelect, setSortSelect] = useState('');

    const createElement = (newElement) => {
        const findIndex = elements.findIndex(item => item.id === newElement.id);
        if (findIndex === -1) {
            setElements([...elements, newElement]);
        } else {
            elements[findIndex] = newElement;
            setElements([...elements]);
        }
    }

    const removeElement = (id) => {
        setElements(elements.filter(element => element.id !== id));
    }

    //Сортировка по
    const sorting = (s) => {
        Sorting.sortToMore(s, elements, setElements, setSortSelect);
    }

    return [elements, setElements, sortSelect, setSortSelect, createElement, removeElement, sorting];
}
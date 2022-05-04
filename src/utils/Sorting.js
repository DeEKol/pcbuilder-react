//Класс со статическими методами сортировки
export default class Sorting {
    //Функция для сортировка массива от большего к меньшему по ключу
    //Параметры (ключ, состояние массива, изменение состояния массива, изменение состояния сортировки для связывания)
    static sortToMore(select, state, setState, setSortState) {
        setSortState(select);

        if (Number.isInteger(state[0][select])) {
        //Сортировка чисел (id)
            setState([...state].sort((a, b) => a[select] - b[select]));
        } else {
        //Сортировка строк (maker)
            setState([...state].sort((a, b) => a[select].localeCompare(b[select])));
        }
    }
}
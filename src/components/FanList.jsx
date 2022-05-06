import React, { useContext } from 'react';
import FanService from '../API/FanService';
import { CurrentObject } from '../context';

const FanList = ({elements, removeElement}) => {
    const {objectForm, setObjectForm} = useContext(CurrentObject);

    const update = (e) => {
        setObjectForm(e);
    }

    const remove = async (id) => {
        await FanService.deleteById(id);
    //todo: Сделать проверку статуса перед удалением
        removeElement(id);
    }

    if(!elements.length) {
        return (
            <h1>
                Элементы не найдены!
            </h1>
        )
    }
    return (
        <div>
            {elements.map((e, index) => {
            return (
                <div key={index}>id:{e.id}, 
                Вентилятор: {e.maker} {e.name} 
                [{e.specification}] 
                [{e.proportions}] Покупка=
                {e.buy}, Продажа=
                {e.sale}, {e.creationDate} 
                [{e.description}]
                <button onClick={() => remove(e.id)}>Удалить</button>
                <button onClick={() => update(e)}>Изменить</button>
                </div>
            )
            })}
        </div>
    )
}

export default FanList;
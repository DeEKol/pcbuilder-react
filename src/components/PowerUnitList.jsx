import React, { useContext } from 'react';
import PowerUnitService from '../API/PowerUnitService';
import { CurrentObject } from '../context';

const PowerUnitList = ({elements, removeElement}) => {
    const {objectForm, setObjectForm} = useContext(CurrentObject);

    const update = (e) => {
        setObjectForm(e);
    }

    const remove = async (id) => {
        await PowerUnitService.deleteById(id);
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
                Блок питания: {e.maker} {e.name} 
                [{e.specification}] 
                [Мощность {e.power}Ватт, {e.proportions}] Покупка=
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

export default PowerUnitList;
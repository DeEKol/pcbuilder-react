import React, { useContext } from 'react';
import BodyService from '../API/BodyService';
import { CurrentObject } from '../context';

const BodyList = ({elements, removeElement}) => {
    const {objectForm, setObjectForm} = useContext(CurrentObject);

    const update = (e) => {
        setObjectForm(e);
    }

    const remove = async (id) => {
        await BodyService.deleteById(id);
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
                Корпус: {e.maker} {e.name} 
                [{e.specification}] 
                [Размер: {e.proportions}, размер бп: {e.buProportions}] Покупка=
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

export default BodyList;
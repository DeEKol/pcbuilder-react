import React, { useContext } from 'react';
import GpuService from '../API/GpuService';
import { CurrentObject } from '../context';

const GpuList = ({elements, removeElement}) => {
    const {objectForm, setObjectForm} = useContext(CurrentObject);

    const update = (e) => {
        setObjectForm(e);
    }

    const remove = async (id) => {
        await GpuService.deleteById(id);
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
                Видеокарта: {e.maker} {e.name} 
                [{e.specification}] 
                [Память {e.type}, {e.capacity}Гб] Покупка=
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

export default GpuList;
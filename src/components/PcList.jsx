import React, { useContext } from 'react';
import PcService from '../API/PcService';
import { CurrentObject } from '../context';

const PcList = ({elements, removeElement}) => {
    const {objectForm, setObjectForm} = useContext(CurrentObject);

    const update = (e) => {
        setObjectForm(e);
    }

    const remove = async (id) => {
        await PcService.deleteById(id);
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
                <div key={index}>, 
                Компьютер: id {e.id}
                [{e.specification}] 
                [cpuId {e.cpuId}, gpuId {e.gpuId}, cpuFanId {e.cpuFanId}
                , powerUnitId {e.powerUnitId}, bodyId {e.bodyId}] Покупка=
                {e.buy}, Продажа=
                {e.sale}, Затраты=
                {e.spending}, {e.creationDate} 
                [{e.description}]
                <button onClick={() => remove(e.id)}>Удалить</button>
                <button onClick={() => update(e)}>Изменить</button>
                </div>
            )
            })}
        </div>
    )
}

export default PcList;
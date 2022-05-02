import React, { useContext } from 'react';
import CpuService from '../API/CpuService';
import { CurrentObject } from '../context';

const CpuList = ({allCpu, removeCpu}) => {
    const {objectForm, setObjectForm} = useContext(CurrentObject);

    const update = (e) => {
        setObjectForm(e);
    }

    const remove = async (id) => {
        await CpuService.deleteById(id);
    //todo: Сделать проверку статуса перед удалением
        removeCpu(id);
    }

    return (
        <div>
            {allCpu.map((e, index) => {
            return (
                <div key={index}>id:{e.id}, 
                Процессор: {e.maker} {e.name} 
                [{e.specification}] 
                [LGA {e.socket}, {e.cores}, 
                {e.flows}х  
                {e.frequency}ГГц] Покупка=
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

export default CpuList;
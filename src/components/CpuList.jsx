import React, { useContext } from 'react';
import CpuService from '../API/CpuService';
import { CurrentObject } from '../context';

const CpuList = ({allCpu, removeCpu}) => {
    const {objectForm, setObjectForm} = useContext(CurrentObject);

    const update = (cpu) => {
        setObjectForm(cpu);
    }

    const remove = async (id) => {
        await CpuService.deleteById(id);
    //todo: Сделать проверку статуса перед удалением
        removeCpu(id);
    }

    return (
        <div>
            {allCpu.map((cpu, index) => {
            return (
                <div key={index}>id:{cpu.id}, 
                Процессор: {cpu.maker} {cpu.name} 
                [{cpu.specification}] 
                [LGA {cpu.socket}, {cpu.cores}, 
                {cpu.flows}х  
                {cpu.frequency}ГГц] Покупка=
                {cpu.buy}, Продажа=
                {cpu.sale}, {cpu.creationDate} 
                [{cpu.description}]
                <button onClick={() => remove(cpu.id)}>Удалить</button>
                <button onClick={() => update(cpu)}>Изменить</button>
                </div>
            )
            })}
        </div>
    )
}

export default CpuList;
import React, { useContext } from 'react';
import CpuService from '../API/CpuService';
import { CurrentObject } from '../context';

const CpuList = ({allCpu}) => {
    const {objectForm, setObjectForm} = useContext(CurrentObject);

    const update = (cpu) => {
        setObjectForm(cpu);
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
                <button onClick={async () => await CpuService.deleteById(cpu.id)}>Удалить</button>
                <button onClick={() => update(cpu)}>Изменить</button>
                </div>
            )
            })}
        </div>
    )
}

export default CpuList;
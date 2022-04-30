import React, { useContext, useEffect, useState } from 'react';
import CpuService from '../API/CpuService';
import { CurrentObject } from '../context';

//todo высчитывать id для добавления cpu без обращения к серверу

const CpuForm = ({createCpu}) => {
    const {objectForm, setObjectForm} = useContext(CurrentObject);

    const [cpu, setCpu] = useState({ id: '', description: '', buy: '', sale: '', maker: '', name: '', specification: '', cores: '', flows: '', frequency: '', socket: '' });

    useEffect(() => {
        setCpu(objectForm);
        console.log(cpu.id);
        console.log(objectForm.id);
    }, [objectForm])

    const submitHandler = async (e) => {
        e.preventDefault();

        const newCpu = { ...cpu }
    //todo: сделать полиморфизм update, create
        if (objectForm.id !== undefined && objectForm.id !== cpu.id) {
            await CpuService.create(newCpu).then(response => {
                createCpu(response.data);
            })
        } else {
            await CpuService.updateById(cpu.id, newCpu).then(response => {
                createCpu(response.data);
            })
        }

        setCpu({ id:'', description: '', buy: '', sale: '', maker: '', name: '', specification: '', cores: '', flows: '', frequency: '', socket: '' });
      }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="description"
                value={cpu.description || ''}
                onChange={e => setCpu({...cpu, description: e.target.value})}
            />
            <input
                type="text"
                placeholder="buy"
                value={cpu.buy || ''}
                onChange={e => setCpu({...cpu, buy: e.target.value})}
            />
            <input
                type="text"
                placeholder="sale"
                value={cpu.sale || ''}
                onChange={e => setCpu({...cpu, sale: e.target.value})}
            />
            <input
                type="text"
                placeholder="maker"
                value={cpu.maker || ''}
                onChange={e => setCpu({...cpu, maker: e.target.value})}
            />
            <input
                type="text"
                placeholder="name"
                value={cpu.name || ''}
                onChange={e => setCpu({...cpu, name: e.target.value})}
            />
            <input
                type="text"
                placeholder="specification"
                value={cpu.specification || ''}
                onChange={e => setCpu({...cpu, specification: e.target.value})}
            />
            <input
                type="text"
                placeholder="cores"
                value={cpu.cores || ''}
                onChange={e => setCpu({...cpu, cores: e.target.value})}
            />
            <input
                type="text"
                placeholder="flows"
                value={cpu.flows || ''}
                onChange={e => setCpu({...cpu, flows: e.target.value})}
            />
            <input
                type="text"
                placeholder="frequency"
                value={cpu.frequency || ''}
                onChange={e => setCpu({...cpu, frequency: e.target.value})}
            />
            <input
                type="text"
                placeholder="socket"
                value={cpu.socket || ''}
                onChange={e => setCpu({...cpu, socket: e.target.value})}
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default CpuForm;
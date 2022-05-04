import React, { useState } from 'react';
import CpuFanService from '../API/CpuFanService';
import { useSubmitForm } from '../hooks/useSubmitForm';

const CpuFanForm = ({createElement}) => {
    const [cpuFan, setCpuFan] = useState({ id: '', description: '', buy: '', sale: '', maker: '', name: '', specification: '', tdp: '' });

    const submitHandler = useSubmitForm(cpuFan, setCpuFan, CpuFanService, createElement);

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="description"
                value={cpuFan.description || ''}
                onChange={e => setCpuFan({...cpuFan, description: e.target.value})}
            />
            <input
                type="text"
                placeholder="buy"
                value={cpuFan.buy || ''}
                onChange={e => setCpuFan({...cpuFan, buy: e.target.value})}
            />
            <input
                type="text"
                placeholder="sale"
                value={cpuFan.sale || ''}
                onChange={e => setCpuFan({...cpuFan, sale: e.target.value})}
            />
            <input
                type="text"
                placeholder="maker"
                value={cpuFan.maker || ''}
                onChange={e => setCpuFan({...cpuFan, maker: e.target.value})}
            />
            <input
                type="text"
                placeholder="name"
                value={cpuFan.name || ''}
                onChange={e => setCpuFan({...cpuFan, name: e.target.value})}
            />
            <input
                type="text"
                placeholder="specification"
                value={cpuFan.specification || ''}
                onChange={e => setCpuFan({...cpuFan, specification: e.target.value})}
            />
            <input
                type="text"
                placeholder="tdp"
                value={cpuFan.tdp || ''}
                onChange={e => setCpuFan({...cpuFan, tdp: e.target.value})}
            />
            <button type="submit">{cpuFan.id ? `Update Cpu fan id:${cpuFan.id}` : 'Add'}</button>
        </form>
    )
}

export default CpuFanForm;
import React, { useState } from 'react';
import PcService from '../API/PcService';
import { useSubmitForm } from '../hooks/useSubmitForm';

const PcForm = ({createElement}) => {
    const [pc, setPc] = useState({ id: '', description: '', buy: '', sale: '', maker: '', name: '', specification: '', proportions: '', socket: '', chipset: '' });

    const submitHandler = useSubmitForm(pc, setPc, PcService, createElement);

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="description"
                value={pc.description || ''}
                onChange={e => setPc({...pc, description: e.target.value})}
            />
            <input
                type="text"
                placeholder="buy"
                value={pc.buy || ''}
                onChange={e => setPc({...pc, buy: e.target.value})}
            />
            <input
                type="text"
                placeholder="sale"
                value={pc.sale || ''}
                onChange={e => setPc({...pc, sale: e.target.value})}
            />
            <input
                type="text"
                placeholder="spending"
                value={pc.spending || ''}
                onChange={e => setPc({...pc, spending: e.target.value})}
            />
            <input
                type="text"
                placeholder="cpuId"
                value={pc.cpuId || ''}
                onChange={e => setPc({...pc, cpuId: e.target.value})}
            />
            <input
                type="text"
                placeholder="gpuId"
                value={pc.gpuId || ''}
                onChange={e => setPc({...pc, gpuId: e.target.value})}
            />
            <input
                type="text"
                placeholder="cpuFanId"
                value={pc.cpuFanId || ''}
                onChange={e => setPc({...pc, cpuFanId: e.target.value})}
            />
            <input
                type="text"
                placeholder="powerUnitId"
                value={pc.powerUnitId || ''}
                onChange={e => setPc({...pc, powerUnitId: e.target.value})}
            />
            <input
                type="text"
                placeholder="bodyId"
                value={pc.bodyId || ''}
                onChange={e => setPc({...pc, bodyId: e.target.value})}
            />
            <button type="submit">{pc.id ? `Update Pc id:${pc.id}` : 'Add'}</button>
        </form>
    )
}

export default PcForm;
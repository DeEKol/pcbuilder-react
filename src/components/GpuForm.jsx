import React, { useState } from 'react';
import GpuService from '../API/GpuService';
import { useSubmitForm } from '../hooks/useSubmitForm';

const GpuForm = ({createElement}) => {
    const [gpu, setGpu] = useState({ id: '', description: '', buy: '', sale: '', maker: '', name: '', specification: '', type: '', capacity: '' });

    const submitHandler = useSubmitForm(gpu, setGpu, GpuService, createElement);

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="description"
                value={gpu.description || ''}
                onChange={e => setGpu({...gpu, description: e.target.value})}
            />
            <input
                type="text"
                placeholder="buy"
                value={gpu.buy || ''}
                onChange={e => setGpu({...gpu, buy: e.target.value})}
            />
            <input
                type="text"
                placeholder="sale"
                value={gpu.sale || ''}
                onChange={e => setGpu({...gpu, sale: e.target.value})}
            />
            <input
                type="text"
                placeholder="maker"
                value={gpu.maker || ''}
                onChange={e => setGpu({...gpu, maker: e.target.value})}
            />
            <input
                type="text"
                placeholder="name"
                value={gpu.name || ''}
                onChange={e => setGpu({...gpu, name: e.target.value})}
            />
            <input
                type="text"
                placeholder="specification"
                value={gpu.specification || ''}
                onChange={e => setGpu({...gpu, specification: e.target.value})}
            />
            <input
                type="text"
                placeholder="type"
                value={gpu.type || ''}
                onChange={e => setGpu({...gpu, type: e.target.value})}
            />
            <input
                type="text"
                placeholder="capacity"
                value={gpu.capacity || ''}
                onChange={e => setGpu({...gpu, capacity: e.target.value})}
            />
            <button type="submit">{gpu.id ? `Update GPU id:${gpu.id}` : 'Add'}</button>
        </form>
    )
}

export default GpuForm;
import React, { useState } from 'react';
import RamService from '../API/RamService';
import { useSubmitForm } from '../hooks/useSubmitForm';

const RamForm = ({createElement}) => {
    const [ram, setRam] = useState({ id: '', description: '', buy: '', sale: '', maker: '', name: '', specification: '', type: '', capacity: '', frequency: '' });

    const submitHandler = useSubmitForm(ram, setRam, RamService, createElement);

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="description"
                value={ram.description || ''}
                onChange={e => setRam({...ram, description: e.target.value})}
            />
            <input
                type="text"
                placeholder="buy"
                value={ram.buy || ''}
                onChange={e => setRam({...ram, buy: e.target.value})}
            />
            <input
                type="text"
                placeholder="sale"
                value={ram.sale || ''}
                onChange={e => setRam({...ram, sale: e.target.value})}
            />
            <input
                type="text"
                placeholder="maker"
                value={ram.maker || ''}
                onChange={e => setRam({...ram, maker: e.target.value})}
            />
            <input
                type="text"
                placeholder="name"
                value={ram.name || ''}
                onChange={e => setRam({...ram, name: e.target.value})}
            />
            <input
                type="text"
                placeholder="specification"
                value={ram.specification || ''}
                onChange={e => setRam({...ram, specification: e.target.value})}
            />
            <input
                type="text"
                placeholder="type"
                value={ram.type || ''}
                onChange={e => setRam({...ram, type: e.target.value})}
            />
            <input
                type="text"
                placeholder="capacity"
                value={ram.capacity || ''}
                onChange={e => setRam({...ram, capacity: e.target.value})}
            />
            <input
                type="text"
                placeholder="frequency"
                value={ram.frequency || ''}
                onChange={e => setRam({...ram, frequency: e.target.value})}
            />
            <button type="submit">{ram.id ? `Update RAM id:${ram.id}` : 'Add'}</button>
        </form>
    )
}

export default RamForm;
import React, { useState } from 'react';
import StorageService from '../API/StorageService';
import { useSubmitForm } from '../hooks/useSubmitForm';

const StorageForm = ({createElement}) => {
    const [storage, setStorage] = useState({ id: '', description: '', buy: '', sale: '', maker: '', name: '', specification: '', type: '', capacity: '' });

    const submitHandler = useSubmitForm(storage, setStorage, StorageService, createElement);

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="description"
                value={storage.description || ''}
                onChange={e => setStorage({...storage, description: e.target.value})}
            />
            <input
                type="text"
                placeholder="buy"
                value={storage.buy || ''}
                onChange={e => setStorage({...storage, buy: e.target.value})}
            />
            <input
                type="text"
                placeholder="sale"
                value={storage.sale || ''}
                onChange={e => setStorage({...storage, sale: e.target.value})}
            />
            <input
                type="text"
                placeholder="maker"
                value={storage.maker || ''}
                onChange={e => setStorage({...storage, maker: e.target.value})}
            />
            <input
                type="text"
                placeholder="name"
                value={storage.name || ''}
                onChange={e => setStorage({...storage, name: e.target.value})}
            />
            <input
                type="text"
                placeholder="specification"
                value={storage.specification || ''}
                onChange={e => setStorage({...storage, specification: e.target.value})}
            />
            <input
                type="text"
                placeholder="type"
                value={storage.type || ''}
                onChange={e => setStorage({...storage, type: e.target.value})}
            />
            <input
                type="text"
                placeholder="capacity"
                value={storage.capacity || ''}
                onChange={e => setStorage({...storage, capacity: e.target.value})}
            />
            <button type="submit">{storage.id ? `Update Storage id:${storage.id}` : 'Add'}</button>
        </form>
    )
}

export default StorageForm;
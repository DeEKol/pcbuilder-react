import React, { useState } from 'react';
import MotherboardService from '../API/MotherboardService';
import { useSubmitForm } from '../hooks/useSubmitForm';

const MotherboardForm = ({createElement}) => {
    const [motherboard, setMotherboard] = useState({ id: '', description: '', buy: '', sale: '', maker: '', name: '', specification: '', proportions: '', socket: '', chipset: '' });

    const submitHandler = useSubmitForm(motherboard, setMotherboard, MotherboardService, createElement);

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="description"
                value={motherboard.description || ''}
                onChange={e => setMotherboard({...motherboard, description: e.target.value})}
            />
            <input
                type="text"
                placeholder="buy"
                value={motherboard.buy || ''}
                onChange={e => setMotherboard({...motherboard, buy: e.target.value})}
            />
            <input
                type="text"
                placeholder="sale"
                value={motherboard.sale || ''}
                onChange={e => setMotherboard({...motherboard, sale: e.target.value})}
            />
            <input
                type="text"
                placeholder="maker"
                value={motherboard.maker || ''}
                onChange={e => setMotherboard({...motherboard, maker: e.target.value})}
            />
            <input
                type="text"
                placeholder="name"
                value={motherboard.name || ''}
                onChange={e => setMotherboard({...motherboard, name: e.target.value})}
            />
            <input
                type="text"
                placeholder="specification"
                value={motherboard.specification || ''}
                onChange={e => setMotherboard({...motherboard, specification: e.target.value})}
            />
            <input
                type="text"
                placeholder="proportions"
                value={motherboard.proportions || ''}
                onChange={e => setMotherboard({...motherboard, proportions: e.target.value})}
            />
            <input
                type="text"
                placeholder="socket"
                value={motherboard.socket || ''}
                onChange={e => setMotherboard({...motherboard, socket: e.target.value})}
            />
            <input
                type="text"
                placeholder="chipset"
                value={motherboard.chipset || ''}
                onChange={e => setMotherboard({...motherboard, chipset: e.target.value})}
            />
            <button type="submit">{motherboard.id ? `Update Motherboard id:${motherboard.id}` : 'Add'}</button>
        </form>
    )
}

export default MotherboardForm;
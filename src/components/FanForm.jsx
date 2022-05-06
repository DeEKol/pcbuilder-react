import React, { useState } from 'react';
import FanService from '../API/FanService';
import { useSubmitForm } from '../hooks/useSubmitForm';

const FanForm = ({createElement}) => {
    const [fan, setFan] = useState({ id: '', description: '', buy: '', sale: '', maker: '', name: '', specification: '', proportions: '' });

    const submitHandler = useSubmitForm(fan, setFan, FanService, createElement);

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="description"
                value={fan.description || ''}
                onChange={e => setFan({...fan, description: e.target.value})}
            />
            <input
                type="text"
                placeholder="buy"
                value={fan.buy || ''}
                onChange={e => setFan({...fan, buy: e.target.value})}
            />
            <input
                type="text"
                placeholder="sale"
                value={fan.sale || ''}
                onChange={e => setFan({...fan, sale: e.target.value})}
            />
            <input
                type="text"
                placeholder="maker"
                value={fan.maker || ''}
                onChange={e => setFan({...fan, maker: e.target.value})}
            />
            <input
                type="text"
                placeholder="name"
                value={fan.name || ''}
                onChange={e => setFan({...fan, name: e.target.value})}
            />
            <input
                type="text"
                placeholder="specification"
                value={fan.specification || ''}
                onChange={e => setFan({...fan, specification: e.target.value})}
            />
            <input
                type="text"
                placeholder="proportions"
                value={fan.proportions || ''}
                onChange={e => setFan({...fan, proportions: e.target.value})}
            />
            <button type="submit">{fan.id ? `Update Fan id:${fan.id}` : 'Add'}</button>
        </form>
    )
}

export default FanForm;
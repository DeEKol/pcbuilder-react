import React, { useState } from 'react';
import BodyService from '../API/BodyService';
import { useSubmitForm } from '../hooks/useSubmitForm';

const BodyForm = ({createElement}) => {
    const [body, setBody] = useState({ id: '', description: '', buy: '', sale: '', maker: '', name: '', specification: '', proportions: '', buProportions: '' });

    const submitHandler = useSubmitForm(body, setBody, BodyService, createElement);

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="description"
                value={body.description || ''}
                onChange={e => setBody({...body, description: e.target.value})}
            />
            <input
                type="text"
                placeholder="buy"
                value={body.buy || ''}
                onChange={e => setBody({...body, buy: e.target.value})}
            />
            <input
                type="text"
                placeholder="sale"
                value={body.sale || ''}
                onChange={e => setBody({...body, sale: e.target.value})}
            />
            <input
                type="text"
                placeholder="maker"
                value={body.maker || ''}
                onChange={e => setBody({...body, maker: e.target.value})}
            />
            <input
                type="text"
                placeholder="name"
                value={body.name || ''}
                onChange={e => setBody({...body, name: e.target.value})}
            />
            <input
                type="text"
                placeholder="specification"
                value={body.specification || ''}
                onChange={e => setBody({...body, specification: e.target.value})}
            />
            <input
                type="text"
                placeholder="proportions"
                value={body.proportions || ''}
                onChange={e => setBody({...body, proportions: e.target.value})}
            />
            <input
                type="text"
                placeholder="puProportions"
                value={body.buProportions || ''}
                onChange={e => setBody({...body, buProportions: e.target.value})}
            />
            <button type="submit">{body.id ? `Update Body id:${body.id}` : 'Add'}</button>
        </form>
    )
}

export default BodyForm;
import React, { useContext, useEffect, useState } from 'react';
import BodyService from '../API/BodyService';
import { CurrentObject } from '../context';

const BodyForm = ({createElement}) => {
    const {objectForm, setObjectForm} = useContext(CurrentObject);

    const [body, setBody] = useState({ id: '', description: '', buy: '', sale: '', maker: '', name: '', specification: '', proportions: '', puProportions: '' });

    useEffect(() => {
        setBody(objectForm);
    }, [objectForm])

    const submitHandler = async (e) => {
        e.preventDefault();
        const newBody = { ...body }
        if (objectForm.id === undefined || objectForm.id !== body.id) {
            await BodyService.create(newBody).then(response => {
                createElement(response.data);
            })
        } else {
            await BodyService.updateById(body.id, newBody).then(response => {
                createElement(response.data);
            })
        }

        setBody({ id:'', description: '', buy: '', sale: '', maker: '', name: '', specification: '', proportions: '', puProportions: '' });
      }

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
                value={body.puProportions || ''}
                onChange={e => setBody({...body, puProportions: e.target.value})}
            />
            <button type="submit">{body.id ? `Update Body id:${body.id}` : 'Add'}</button>
        </form>
    )
}

export default BodyForm;
import React, { useState } from 'react';
import PowerUnitService from '../API/PowerUnitService';
import { useSubmitForm } from '../hooks/useSubmitForm';

const PowerUnitForm = ({createElement}) => {
    const [powerUnit, setPowerUnit] = useState({ id: '', description: '', buy: '', sale: '', maker: '', name: '', specification: '', power: '', proportions: '' });

    const submitHandler = useSubmitForm(powerUnit, setPowerUnit, PowerUnitService, createElement);

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="description"
                value={powerUnit.description || ''}
                onChange={e => setPowerUnit({...powerUnit, description: e.target.value})}
            />
            <input
                type="text"
                placeholder="buy"
                value={powerUnit.buy || ''}
                onChange={e => setPowerUnit({...powerUnit, buy: e.target.value})}
            />
            <input
                type="text"
                placeholder="sale"
                value={powerUnit.sale || ''}
                onChange={e => setPowerUnit({...powerUnit, sale: e.target.value})}
            />
            <input
                type="text"
                placeholder="maker"
                value={powerUnit.maker || ''}
                onChange={e => setPowerUnit({...powerUnit, maker: e.target.value})}
            />
            <input
                type="text"
                placeholder="name"
                value={powerUnit.name || ''}
                onChange={e => setPowerUnit({...powerUnit, name: e.target.value})}
            />
            <input
                type="text"
                placeholder="specification"
                value={powerUnit.specification || ''}
                onChange={e => setPowerUnit({...powerUnit, specification: e.target.value})}
            />
            <input
                type="text"
                placeholder="power"
                value={powerUnit.power || ''}
                onChange={e => setPowerUnit({...powerUnit, power: e.target.value})}
            />
            <input
                type="text"
                placeholder="proportions"
                value={powerUnit.proportions || ''}
                onChange={e => setPowerUnit({...powerUnit, proportions: e.target.value})}
            />
            <button type="submit">{powerUnit.id ? `Update PU id:${powerUnit.id}` : 'Add'}</button>
        </form>
    )
}

export default PowerUnitForm;
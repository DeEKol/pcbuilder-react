import { useContext, useEffect, useState } from 'react';
import { CurrentObject } from '../context';

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const {objectForm, setObjectForm} = useContext(CurrentObject);

    useEffect(() => {
        fetch();
        setObjectForm({});
    }, []);

    const fetch = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [isLoading, error];
}
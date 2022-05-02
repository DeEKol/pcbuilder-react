import { useEffect, useState } from "react";
import BodyService from "../API/BodyService";
import BodyForm from "../components/BodyForm";
import BodyList from "../components/BodyList";
import SortSelect from "../components/UI/select/SortSelect";
import { useFetching } from "../hooks/useFetching";

const Body = () => {
    const [bodies, setBodies] = useState([]);
    const [sortSelect, setSortSelect] = useState('');

    const [fetch, isLoading, error] = useFetching(async () => {
        const response = await BodyService.getAll();
        setBodies(response.data);
    })

    const createBody = (newBody) => {
        const findIndex = bodies.findIndex(item => item.id === newBody.id);
        if (findIndex === -1) {
            setBodies([...bodies, newBody]);
        } else {
            bodies[findIndex] = newBody;
            setBodies([...bodies]);
        }
    }

    const removeBody = (id) => {
        setBodies(bodies.filter(body => body.id !== id));
    }

    useEffect(() => {
        fetch();
    }, []);

    //Сортировка по
    const sorting = (s) => {
        console.log('Sort');
        setSortSelect(s);

        if (Number.isInteger(bodies[0][s])) {
        //Сортировка чисел (id)
            setBodies([...bodies].sort((a, b) => a[s] - b[s]));
        } else {
        //Сортировка строк (maker)
            setBodies([...bodies].sort((a, b) => a[s].localeCompare(b[s])));
        }
    }

  return (
    <div className="App">
        <h3>Корпуса</h3>

        <BodyForm createBody={createBody}/>

        {error &&
            <h1>Произошла ошибка ${Error}</h1>
        }

        <hr/>

        <div>
        <SortSelect
            value={sortSelect}
            onChange={sorting}
            defaultValue='Сортировка'
            options={[
                {value: 'id', name: 'По id'},
                {value: 'maker', name: 'По производителю'}
            ]}
        />
        </div>
        
        {bodies.length //todo: пока идет загрузка скрывать данную надпись
            ?
            <BodyList bodies={bodies} removeBody={removeBody} title="BODY"/>
            :
            <h1>Корпуса не найдены!</h1>
        }
        {isLoading &&
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>Загрузка</div>
        }
    </div>
  );
}

export default Body;
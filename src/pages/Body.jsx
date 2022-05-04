import { useContext, useEffect } from "react";
import BodyService from "../API/BodyService";
import BodyForm from "../components/BodyForm";
import BodyList from "../components/BodyList";
import SortSelect from "../components/UI/select/SortSelect";
import { CurrentObject } from "../context";
import { useElements } from "../hooks/useElements";
import { useFetching } from "../hooks/useFetching";

const Body = () => {
    const [isLoading, error] = useFetching(async () => {
        const response = await BodyService.getAll();
        setElements(response.data);
    })

    const [elements, setElements, sortSelect, setSortSelect, createElement, removeElement, sorting] = useElements();

  return (
    <div className="App">
        <h3>Корпуса</h3>

        <BodyForm createElement={createElement}/>

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
        
        {isLoading
            ?
            <h1>Загрузка</h1>
            :
            <BodyList elements={elements} removeElement={removeElement}/>
        }
    </div>
  );
}

export default Body;
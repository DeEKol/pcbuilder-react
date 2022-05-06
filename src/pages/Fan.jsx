import FanService from "../API/FanService";
import FanForm from "../components/FanForm";
import FanList from "../components/FanList";
import SortSelect from "../components/UI/select/SortSelect";
import { useElements } from "../hooks/useElements";
import { useFetching } from "../hooks/useFetching";

const Fan = () => {
    const [isLoading, error] = useFetching(async () => {
        const response = await FanService.getAll();
        setElements(response.data);
    })

    const [elements, setElements, sortSelect, setSortSelect, createElement, removeElement, sorting] = useElements();

  return (
    <div className="App">
        <h3>Вентиляторы</h3>

        <FanForm createElement={createElement}/>

        {error &&
            <h1>Произошла ошибка ${error}</h1>
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
            <FanList elements={elements} removeElement={removeElement}/>
        }
    </div>
  );
}

export default Fan;
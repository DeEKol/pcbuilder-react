import PowerUnitService from "../API/PowerUnitService";
import PowerUnitForm from "../components/PowerUnitForm";
import PowerUnitList from "../components/PowerUnitList";
import SortSelect from "../components/UI/select/SortSelect";
import { useElements } from "../hooks/useElements";
import { useFetching } from "../hooks/useFetching";

const PowerUnit = () => {
    const [isLoading, error] = useFetching(async () => {
        const response = await PowerUnitService.getAll();
        setElements(response.data);
    })

    const [elements, setElements, sortSelect, setSortSelect, createElement, removeElement, sorting] = useElements();

  return (
    <div className="App">
        <h3>Блоки питания</h3>

        <PowerUnitForm createElement={createElement}/>

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
            <PowerUnitList elements={elements} removeElement={removeElement}/>
        }
    </div>
  );
}

export default PowerUnit;
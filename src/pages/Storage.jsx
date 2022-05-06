import StorageService from "../API/StorageService";
import StorageForm from "../components/StorageForm";
import StorageList from "../components/StorageList";
import SortSelect from "../components/UI/select/SortSelect";
import { useElements } from "../hooks/useElements";
import { useFetching } from "../hooks/useFetching";

const Storage = () => {
    const [isLoading, error] = useFetching(async () => {
        const response = await StorageService.getAll();
        setElements(response.data);
    })
    
    const [elements, setElements, sortSelect, setSortSelect, createElement, removeElement, sorting] = useElements();

  return (
    <div className="App">
        <h3>Накопитель</h3> 

        <StorageForm createElement={createElement}/>

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
            <StorageList elements={elements} removeElement={removeElement}/>
        }
    </div>
  );
}

export default Storage;
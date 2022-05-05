import RamService from "../API/RamService";
import RamForm from "../components/RamForm";
import RamList from "../components/RamList";
import SortSelect from "../components/UI/select/SortSelect";
import { useElements } from "../hooks/useElements";
import { useFetching } from "../hooks/useFetching";

const Ram = () => {
    const [isLoading, error] = useFetching(async () => {
        const response = await RamService.getAll();
        setElements(response.data);
    })
    
    const [elements, setElements, sortSelect, setSortSelect, createElement, removeElement, sorting] = useElements();

  return (
    <div className="App">
        <h3>Оперативная память</h3> 

        <RamForm createElement={createElement}/>

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
            <RamList elements={elements} removeElement={removeElement}/>
        }
    </div>
  );
}

export default Ram;
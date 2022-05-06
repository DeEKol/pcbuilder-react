import MotherboardService from "../API/MotherboardService";
import MotherboardForm from "../components/MotherboardForm";
import MotherboardList from "../components/MotherboardList";
import SortSelect from "../components/UI/select/SortSelect";
import { useElements } from "../hooks/useElements";
import { useFetching } from "../hooks/useFetching";

const Motherboard = () => {
    const [isLoading, error] = useFetching(async () => {
        const response = await MotherboardService.getAll();
        setElements(response.data);
    })

    const [elements, setElements, sortSelect, setSortSelect, createElement, removeElement, sorting] = useElements();

  return (
    <div className="App">
        <h3>Материнские платы</h3>

        <MotherboardForm createElement={createElement}/>

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
            <MotherboardList elements={elements} removeElement={removeElement}/>
        }
    </div>
  );
}

export default Motherboard;
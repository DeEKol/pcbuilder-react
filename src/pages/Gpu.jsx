import GpuService from "../API/GpuService";
import GpuForm from "../components/GpuForm";
import GpuList from "../components/GpuList";
import SortSelect from "../components/UI/select/SortSelect";
import { useElements } from "../hooks/useElements";
import { useFetching } from "../hooks/useFetching";

const Gpu = () => {
    const [isLoading, error] = useFetching(async () => {
        const response = await GpuService.getAll();
        setElements(response.data);
    })

    const [elements, setElements, sortSelect, setSortSelect, createElement, removeElement, sorting] = useElements();

  return (
    <div className="App">
        <h3>Видеокарты</h3>

        <GpuForm createElement={createElement}/>

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
            <GpuList elements={elements} removeElement={removeElement}/>
        }
    </div>
  );
}

export default Gpu;
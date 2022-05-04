import CpuFanService from "../API/CpuFanService";
import CpuFanForm from "../components/CpuFanForm";
import CpuFanList from "../components/CpuFanList";
import SortSelect from "../components/UI/select/SortSelect";
import { useElements } from "../hooks/useElements";
import { useFetching } from "../hooks/useFetching";

const CpuFan = () => {
    const [isLoading, error] = useFetching(async () => {
        const response = await CpuFanService.getAll();
        setElements(response.data);
    })

    const [elements, setElements, sortSelect, setSortSelect, createElement, removeElement, sorting] = useElements();

  return (
    <div className="App">
        <h3>Процессорные кулеры</h3>

        <CpuFanForm createElement={createElement}/>

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
            <CpuFanList elements={elements} removeElement={removeElement}/>
        }
    </div>
  );
}

export default CpuFan;
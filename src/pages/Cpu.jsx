import { useContext, useEffect } from "react";
import CpuService from "../API/CpuService";
import CpuForm from "../components/CpuForm";
import CpuList from "../components/CpuList";
import SortSelect from "../components/UI/select/SortSelect";
import { CurrentObject } from "../context";
import { useElements } from "../hooks/useElements";
import { useFetching } from "../hooks/useFetching";

const Cpu = () => {
    const [isLoading, error] = useFetching(async () => {
        const response = await CpuService.getAll();
        setElements(response.data);
    })

    const [elements, setElements, sortSelect, setSortSelect, createElement, removeElement, sorting] = useElements();

  return (
    <div className="App">
        <h3>Процессоры</h3>

        <CpuForm createElement={createElement}/>

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
            <CpuList elements={elements} removeElement={removeElement}/>
        }
    </div>
  );
}

export default Cpu;
import { useEffect, useState } from "react";
import CpuService from "../API/CpuService";
import CpuForm from "../components/CpuForm";
import CpuList from "../components/CpuList";
import SortSelect from "../components/UI/select/SortSelect";
import { useFetching } from "../hooks/useFetching";

const Cpu = () => {
    const [allCpu, setAllCpu] = useState([]);
    const [sortSelect, setSortSelect] = useState('');

    const [fetchCpu, isCpuLoading, cpuError] = useFetching(async () => {
        const response = await CpuService.getAll();
        setAllCpu(response.data);
    })

    const createCpu = (newCpu) => {
        const findIndex = allCpu.findIndex(item => item.id === newCpu.id);
        if (findIndex === -1) {
            setAllCpu([...allCpu, newCpu]);
        } else {
            allCpu[findIndex] = newCpu;
            setAllCpu([...allCpu]);
        }
    }

    const removeCpu = (id) => {
        setAllCpu(allCpu.filter(cpu => cpu.id !== id));
    }

    useEffect(() => {
        fetchCpu();
    }, []);

    //Сортировка по
    const sorting = (s) => {
        console.log('Sort');
        setSortSelect(s);

        if (Number.isInteger(allCpu[0][s])) {
        //Сортировка чисел (id)
            setAllCpu([...allCpu].sort((a, b) => a[s] - b[s]));
        } else {
        //Сортировка строк (maker)
            setAllCpu([...allCpu].sort((a, b) => a[s].localeCompare(b[s])));
        }
    }

  return (
    <div className="App">
        <h3>Процессоры</h3>

        <CpuForm createCpu={createCpu}/>

        {cpuError &&
            <h1>Произошла ошибка ${cpuError}</h1>
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
        
        {allCpu.length //todo: пока идет загрузка скрывать данную надпись
            ?
            <CpuList allCpu={allCpu} removeCpu={removeCpu} title="CPU"/>
            :
            <h1>CPU не найдены!</h1>
        }
        {isCpuLoading &&
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>Загрузка</div>
        }
    </div>
  );
}

export default Cpu;
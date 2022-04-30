import { useEffect, useState } from "react";
import CpuService from "../API/CpuService";
import CpuForm from "../components/CpuForm";
import CpuList from "../components/CpuList";
import { useFetching } from "../hooks/useFetching";

const Cpu = () => {
    const [allCpu, setAllCpu] = useState([]);

    const [fetchCpu, isCpuLoading, cpuError] = useFetching(async () => {
        const response = await CpuService.getAll();
        console.log(response);
        setAllCpu(response.data);
    })

    const createCpu = (newCpu) => {
        setAllCpu([...allCpu, newCpu]);
    }

    const removeCpu = (id) => {
        setAllCpu(allCpu.filter(cpu => cpu.id !== id));
    }

    useEffect(() => {
        fetchCpu();
    }, []);

  return (
    <div className="App">
        <h3>Процессоры</h3>

        <CpuForm createCpu={createCpu}/>

        {cpuError &&
            <h1>Произошла ошибка ${cpuError}</h1>
        }

        <CpuList allCpu={allCpu} removeCpu={removeCpu}/>

        {isCpuLoading &&
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>Загрузка</div>
        }
    </div>
  );
}

export default Cpu;
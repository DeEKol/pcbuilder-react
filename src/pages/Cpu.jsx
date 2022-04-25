import { useEffect, useState } from "react";
import CpuService from "../API/CpuService";
import CpuForm from "../components/CpuForm";
import CpuList from "../components/CpuList";

const Cpu = () => {
  const [allCpu, setAllCpu] = useState([]);
  
    const createCpu = (newCpu) => {
        setAllCpu([...allCpu, newCpu]);
    }

    async function fetchAllCpu() {
      const response = await CpuService.getAll();
      setAllCpu(response.data);
    }
    useEffect(() => {
      fetchAllCpu();
    }, [createCpu]);

  return (
    <div className="App">
        <h3>Процессоры</h3>

        <CpuForm createCpu={createCpu}/>
        <CpuList allCpu={allCpu}/>
    </div>
  );
}

export default Cpu;
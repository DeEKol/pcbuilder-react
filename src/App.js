import axios from "axios";
import { useEffect, useState } from "react";
import CpuList from "./components/CpuList";
import Cpu from "./components/Cpu";
import { CurrentObject } from "./context";

function App() {
  const [objectForm, setObjectForm] = useState({});

  return (
    <div className="App">
      <CurrentObject.Provider value={{
        objectForm,
        setObjectForm
      }}>
        <Cpu/>
      </CurrentObject.Provider>
    </div>
  );
}

export default App;

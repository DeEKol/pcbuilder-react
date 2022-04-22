import React from 'react';

const CpuList = ({allCpu}) => {  
  return (
    <div>
        {allCpu.map((cpu) => {
          return (
            <div key={cpu.id}>id:{cpu.id}, 
              Процессор: {cpu.maker} {cpu.name} 
              [{cpu.specification}] 
              [LGA {cpu.socket}, {cpu.cores}, 
              {cpu.flows}х  
              {cpu.frequency}ГГц] Покупка=
              {cpu.buy}, Продажа=
              {cpu.sale}, {cpu.creationDate} 
              [{cpu.description}]
            </div>
          )
        })}
    </div>
  )
}

export default CpuList;
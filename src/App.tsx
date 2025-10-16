import {useCarData} from "./Hooks/UseCarData.ts";
import Menu from "./Components/Menu.tsx";
import List from "./Components/List.tsx";
import {useState} from "react";
import {FormRegisterCar} from "./Components/FormRegisterCar.tsx";
import {useCarDataDelete} from "./Hooks/UseCarDelete.ts";

function App() {

    const {data} = useCarData();
    const [cadasCar, setCadasCar] = useState(false);
    const { mutate: onDelete}= useCarDataDelete();

    const formCadas= ()=>{
        setCadasCar(prevState => !prevState);
    }

    return (
    <div className=" w-screen h-screen justify-center p-2 bg-slate-400">
        <Menu/>
        <div className='flex justify-center p-6'>

            <div className="bg-slate-300 w-150 rounded-xl">
                {cadasCar ? <FormRegisterCar/> : <ul className="p-6 text-slate-700">
                    <li className="flex">
                        <h1 className="flex-1"><b>Chassi</b></h1>
                        <h1 className="flex-1"><b>Modelo</b></h1>
                        <h1 className="flex-1"><b>Recebimento</b></h1>
                        <h1 className='flex-1'><b>Tasks</b></h1>
                    </li>
                    {data?.map((item,key) => (<List key={key} chassi={item.chassi} model={item.model} dataReceived={item.dataReceived} onDeleteCar={(chassi:String) => onDelete(chassi)} />))}
                </ul>}
            </div>
            <div className='block h-max p-2 bg-slate-300 hover:bg-green-200 rounded-xl m-2'>
                <button onClick={formCadas}>{cadasCar ? "Fechar" : "Cadastrar"}</button>
            </div>
        </div>
    </div>

  )
}

export default App;
// import List from "./Components/List.tsx";
import {useCarData} from "./Hooks/UseCarData.ts";
import Menu from "./Components/Menu.tsx";
import List from "./Components/List.tsx";

function App() {

    const {data} = useCarData();

    return (
    <div className=" w-screen h-screen justify-center p-2 bg-slate-400">
        <Menu/>
        <div className='flex justify-center p-6'>
            <div className="bg-slate-300 w-150 rounded-xl">
                <ul className="p-6 text-slate-700">
                    <li className="flex">
                        <h1 className="flex-1"><b>Chassi</b></h1>
                        <h1 className="flex-1"><b>Modelo</b></h1>
                        <h1 className="flex-1"><b>Recebimento</b></h1>
                    </li>
                    {data?.map((item,key) => (<List key={key} chassi={item.chassi} model={item.model} dataReceived={item.dataReceived} />))}
                </ul>
            </div>
        </div>
    </div>

  )
}

export default App
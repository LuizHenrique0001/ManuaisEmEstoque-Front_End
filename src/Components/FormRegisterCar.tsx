import {useState} from "react";
import type {CreateCar} from "../Interface/Car.ts";
import {useCarDataMutate} from "../Hooks/UseCarMutate.ts";
interface InputProps{
    type?:string,
    placeholder?:string,
    value?:string,
    updateValue(value:string):void
}
const Input = ({type, value, placeholder, updateValue}: InputProps)=>{
    return <input className='w-full bg-slate-200 p-2 rounded-md' type={type} value={value} placeholder={placeholder} onChange={event => updateValue(event.target.value)}></input>
    }

export function FormRegisterCar() {

    const [model, setModel] = useState("");
    const [chassi, setChassi] = useState("");
    const [observation, setObservation] = useState("");
    const {mutate} = useCarDataMutate();

    const submit = () => {
        const newCar:CreateCar = {
            chassi,
            model,
            observation
        }
        if (model !== "" && chassi !== ""){
            mutate(newCar);
            setModel("");
            setChassi("");
            setObservation("");
        }else{
           return (<h1>Preencha Todos os campos</h1>)
        }

    }

    return (
        <div className='bg-slate-300 rounded-lg'>
            <h1 className='text-center text-2xl font-serif font-bold  text-slate-700 p-3'>Cadastro</h1>
            <ul className='p-6 flex-col space-y-4'>
                <Input type={'text'} placeholder={'Car Model'} value={model} updateValue={setModel}/>
                <Input type={'text'} placeholder={'Car Chassi'} value={chassi} updateValue={setChassi}/>
                <Input type={'text'} placeholder={'Observation'} value={observation} updateValue={setObservation}/>
            </ul>
            <ul className='p-6 flex justify-end'>
                <button className='bg-slate-500 p-3 rounded-md hover:bg-slate-400' onClick={submit}>Cadastrar</button>
            </ul>
        </div>
    )
}
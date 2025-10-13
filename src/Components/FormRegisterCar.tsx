interface InputProps{
    type?:string,
    placeholder?:string,
    value?:string,
}
const Input = ({type, value, placeholder}: InputProps)=>{
    return <input className='w-full bg-slate-200 p-2 rounded-md' type={type} value={value} placeholder={placeholder}></input>
    }

export default function FormRegisterCar(){
    return (
        <div className='bg-slate-300 rounded-lg'>
            <h1 className='text-center text-2xl font-serif font-bold  text-slate-700 p-3'>Cadastro</h1>
            <ul className='p-6 flex-col space-y-4'>
                <Input type={'text'} placeholder={'Car Model'} value={''}/>
                <Input type={'text'} placeholder={'Car Chassi'} value={''}/>
                <Input type={'text'} placeholder={'Observation'} value={''}/>
            </ul>
            <ul className='p-6 flex justify-end'>
                <button className='bg-slate-500 p-3 rounded-md hover:bg-slate-400'>Cadastrar</button>
            </ul>
        </div>
    )
}
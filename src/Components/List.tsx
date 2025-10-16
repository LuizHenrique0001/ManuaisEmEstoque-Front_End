interface listCar{
    chassi: String
    model: String
    dataReceived: Date
    onDeleteCar:(chassi:String) => void
}

function List({chassi, model, dataReceived, onDeleteCar}: listCar) {

    const fmt = new Intl.DateTimeFormat("pt-BR", {day:'2-digit', month:'2-digit', year:'numeric'})
    const data = new Date(dataReceived)
    return (
        <li className="flex">
            <p className="flex-1">{chassi}</p>
            <p className="flex-1">{model}</p>
            <p className="flex-1">{fmt.format(data)}</p>
            <p className="flex-1">
                <button className='p-1 hover:bg-green-200 rounded-xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path d="M2.87 2.298a.75.75 0 0 0-.812 1.021L3.39 6.624a1 1 0 0 0 .928.626H8.25a.75.75 0 0 1 0 1.5H4.318a1 1 0 0 0-.927.626l-1.333 3.305a.75.75 0 0 0 .811 1.022 24.89 24.89 0 0 0 11.668-5.115.75.75 0 0 0 0-1.175A24.89 24.89 0 0 0 2.869 2.298Z" />
                    </svg>
                </button>
                <button onClick={() => onDeleteCar(chassi)} className='p-1 hover:bg-red-200 rounded-xl'>
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm4-7a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0 0 1.5h6.5A.75.75 0 0 0 12 8Z" clipRule="evenodd" />
                    </svg>
                </button>
            </p>
        </li>

    );
}
export default List;
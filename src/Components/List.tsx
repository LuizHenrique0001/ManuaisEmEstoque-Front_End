import Features from "./Features.tsx";

interface listCar{
    chassi: String
    model: String
    dataReceived: Date
}

function List({chassi, model, dataReceived}: listCar) {

    const fmt = new Intl.DateTimeFormat("pt-BR", {day:'2-digit', month:'2-digit', year:'numeric'})
    const data = new Date(dataReceived)
    return (
        <li className="flex">
            <p className="flex-1">{chassi}</p>
            <p className="flex-1">{model}</p>
            <p className="flex-1">{fmt.format(data)}</p>
            <p className="flex-1">{Features()}</p>
        </li>

    );
}
export default List;
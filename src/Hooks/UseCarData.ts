import type {Car} from "../Interface/Car.ts";
import {useQuery} from "@tanstack/react-query";
import axios, {type AxiosPromise} from "axios";

const API_URL = 'http://localhost:8080';
const fetchData = async ():AxiosPromise<Car[]> => {

    const response = axios.get(API_URL + '/cars');
    return response;
}

export function useCarData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey:['car-data'],
        retry:2
    })
    return {
        ...query,
        data: query.data?.data
    }
}
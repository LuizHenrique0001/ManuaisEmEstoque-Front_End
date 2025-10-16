import axios, {type AxiosPromise} from "axios";
import type { CreateCar} from "../Interface/Car.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';
const postData = async (data:CreateCar):AxiosPromise => {
    const response = axios.post(API_URL + '/cars', data);
    return response;
}
export function useCarDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn:postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['car-data']})
        }
    })
    return mutate
}

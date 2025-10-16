import axios, {type AxiosPromise} from "axios";
import type {Car} from "../Interface/Car.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';
const deteleData = async (chassi:String):AxiosPromise<Car> => {
    return axios.delete(API_URL + `/cars/${chassi}`);

}
export function useCarDataDelete(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:(chassi:String) => deteleData(chassi),
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['car-data']})
        }
    })
}


import useSWR, { SWRConfiguration } from "swr";
import { IProduct } from "../interfaces";



export const useProducts = (url: string, config: SWRConfiguration = {}) => {

    //const fetcher = (...args: [key: string]) =>
// fetch(...args).then((res) => res.json());
    const { data, error } = useSWR<IProduct[]>(`/api${url}`, config);

    console.log(data)
    return {
        product: data || [],
        products: data || [] ,
        isLoading: !error && !data,
        isError: error
    }










}
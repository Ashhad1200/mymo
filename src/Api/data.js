import {  useQuery } from "@tanstack/react-query";
import axios from 'axios';

export const useMockData = () =>
    useQuery({
        queryKey: ["Mock Data"],
        queryFn: async () =>
            await axios.get('https://jsonplaceholder.typicode.com/users')
    });

    
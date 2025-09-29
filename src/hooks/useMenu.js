import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

export function useMenu() {
    return useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
            const res = await api.get(`/menu`);
            return res.data;
        },
    });
}
import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

export function useCategory(category) {
    return useQuery({
        queryKey: ["category", category],
        queryFn: async () => {
        const res = await api.get(`/menu/${category}`);
        return res.data;
        },
        enabled: !!category
    });
}

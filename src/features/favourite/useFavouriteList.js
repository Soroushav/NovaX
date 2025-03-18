import { useQuery } from "@tanstack/react-query";
import { getFavourite } from "../../services/apiFavourite";
import { useUser } from "../authentication/useUser";

export function useFavouriteList(){
    const {user} = useUser();
    const {data: favourite, isLoading} = useQuery({
        queryFn: () => getFavourite({user_id: user.id}),
        queryKey: ["favourite"]
    })
    return {favourite, isLoading}
}
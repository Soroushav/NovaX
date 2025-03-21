import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../authentication/useUser";
import toast from "react-hot-toast";
import { insertFavourite as insertFavouriteApi } from "../../services/apiFavourite";
export function useFavouriteListAddItem() {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const { mutate: insertFavourite, isLoading } = useMutation({
    mutationFn: ({ added_item, isMovie }) =>
      insertFavouriteApi({ user_id: user.id, added_item, isMovie }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favourite-movie"] });
      queryClient.invalidateQueries({ queryKey: ["favourite-series"] });
      toast.success("Movie added successfully;");
    },
  });
  
  return { insertFavourite, isLoading };
}

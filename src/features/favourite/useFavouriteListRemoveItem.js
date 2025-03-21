import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../authentication/useUser";
import { removeFavourite as removeFavouriteApi } from "../../services/apiFavourite";
import toast from "react-hot-toast";

export function useFavouriteRemoveItem() {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const { mutate: removeFavourite, isLoading } = useMutation({
    mutationFn: ({ remove_item_id, isMovie }) =>
      removeFavouriteApi({ user_id: user.id, remove_item_id, isMovie }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favourite-movie"] });
      queryClient.invalidateQueries({ queryKey: ["favourite-series"] });
      toast.success("Movie has been removed Successfully");
    },
  });
  return { removeFavourite, isLoading };
}

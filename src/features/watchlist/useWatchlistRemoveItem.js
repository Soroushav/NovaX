import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../authentication/useUser";
import { removeWatchlist as removeWatchlistApi } from "../../services/apiWatchlist";
import toast from "react-hot-toast";

export function useWatchlistRemoveItem() {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const { mutate: removeWatchlist, isLoading } = useMutation({
    mutationFn: ({ remove_item_id, isMovie }) =>
      removeWatchlistApi({ user_id: user.id, remove_item_id, isMovie }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["watchlist-movie"] });
      queryClient.invalidateQueries({ queryKey: ["watchlist-series"] });
      toast.success("Movie has been removed Successfully");
    },
  });
  return { removeWatchlist, isLoading };
}

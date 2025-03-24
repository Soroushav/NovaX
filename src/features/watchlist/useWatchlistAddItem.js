import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../authentication/useUser";
import toast from "react-hot-toast";
import { insertWatchlist as insertWatchlistApi } from "../../services/apiWatchlist";

export function useWatchlistAddItem() {
  const { user } = useUser();
  const queryClient = useQueryClient();
  const { mutate: insertWatchlist, isLoading } = useMutation({
    mutationFn: ({ added_item, isMovie }) =>
      insertWatchlistApi({ user_id: user.id, added_item, isMovie }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["watchlist-movie"] });
      queryClient.invalidateQueries({ queryKey: ["watchlist-series"] });
      toast.success("Movie added successfully;");
    },
  });

  return { insertWatchlist, isLoading };
}

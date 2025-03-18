import { useMutation } from "@tanstack/react-query";
import { useUser } from "../authentication/useUser";
import toast from "react-hot-toast";
import { insertFavourite as insertFavouriteApi } from "../../services/apiFavourite";
export function useFavouriteListAddItem() {
  const { user } = useUser();
  const { mutate: insertFavourite, isLoading } = useMutation({
    mutationFn: ({ added_item, isMovie }) =>
        insertFavouriteApi({ user_id: user.id, added_item, isMovie }),
    onSuccess: () => {
      toast.success("Movie added successfully;");
    },
  });

  return { insertFavourite, isLoading };
}

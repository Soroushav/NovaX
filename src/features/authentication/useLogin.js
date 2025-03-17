import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ username, password }) => loginApi({ username, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      toast.success(`User Successfully logged in. Welcome ${data.user.email}`);
      navigate("/");
    },
    onError: () => toast.error("There is an error"),
  });
  return { login, isLoading };
}
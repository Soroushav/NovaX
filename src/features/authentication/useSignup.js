import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["user"]);
      queryClient.setQueryData(["user", data.user]);
      toast.success(
        `User has been created successfully, Welcome ${data.user.user_metadata.fullName}`
      );
      navigate("/");
    },
  });
  return { signup, isLoading };
}

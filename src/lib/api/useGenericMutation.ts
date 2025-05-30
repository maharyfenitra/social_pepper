import { useFetch } from "./useFetch";
import { useMutation } from "@tanstack/react-query";
import { URL_CONFIG } from "./configServer";

export const useGenericMutation = <TVariables>(
  endpoint: string,
  method = "POST"
) => {
  const sendRequest = useFetch();

  const mutation = useMutation({
    mutationFn: (variables: TVariables) => {
      return sendRequest(method, `${URL_CONFIG.uri}${endpoint}`, variables, {})
        .then((data) => data?.data)
        .catch((error) => {
          throw error;
        });
    },
  });

  return mutation;
};

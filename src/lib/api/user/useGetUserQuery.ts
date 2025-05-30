import { useGenericQuery } from "../useGenericQuery";

export const useGetUserQuery = (id: number) => {
  return useGenericQuery(
    (data) => {
      const { data: dataResponse, ...rest } = data;
      
      return {
        data: dataResponse?.data || null,
        ...rest,
      };
    },
    `/users/${id}`,
    `users-details-${id}`
  );
};

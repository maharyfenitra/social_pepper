import { useGenericQuery } from "../useGenericQuery";
import type { NewsLetterType } from "./type";
export const useGetAllNewsLetterQuery = () => {
  return useGenericQuery(
    (data) => {
      const { data: dataResponse, ...rest } = data;
      const fakeDate = new Date();
      const enrichedData = (dataResponse?.data || []).map(
        (item: NewsLetterType, index: number) => ({
          ...item,
          creationDate: new Date(fakeDate.getTime() - index * 86400000),
        })
      ) as NewsLetterType[];

      return {
        data: enrichedData,
        ...rest,
      };
    },
    "/posts",
    "get-all-news-letter"
  );
};

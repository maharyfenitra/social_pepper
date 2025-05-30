import { useGenericQuery } from "../useGenericQuery";
import type { NewsLetterType } from "./type";
export const useGetNewsLetterQuery = (id: number) => {
  return useGenericQuery(
    (data) => {
      const { data: dataResponse, ...rest } = data;
      const fakeDate = new Date();
      const enrichedData = dataResponse?.data || {};
      enrichedData["creationDate:"] = fakeDate;

      return {
        data: enrichedData as NewsLetterType,
        ...rest,
      };
    },
    `posts/${id}`,
    "get-news-letter-details"
  );
};

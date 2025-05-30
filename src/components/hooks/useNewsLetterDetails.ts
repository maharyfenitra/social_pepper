import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../../lib";
import { useGetNewsLetterQuery } from "../../lib";

export const useNewsLetterDetails = () => {
  const { id } = useParams();
  const { data } = useGetNewsLetterQuery(Number(id));
  const { data: user } = useGetUserQuery(Number(data?.userId));

  console.log(user)
  return { data, user };
};

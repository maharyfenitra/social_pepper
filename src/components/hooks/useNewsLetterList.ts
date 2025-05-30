import { useGetAllNewsLetterQuery } from "../../lib";
import type { NewsLetterType } from "../../lib";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const useNewsLetterList = () => {
  const { data }: { data?: NewsLetterType[] } = useGetAllNewsLetterQuery();
  const [filter, setFilter] = useState({ title: "", body: "" });
  const navigate = useNavigate();

  const filteredData = useMemo(() => {
    if (!data) return [];

    return data.filter((news) => {
      const titleMatch = news.title.toLowerCase().includes(filter.title.toLowerCase());
      const bodyMatch = news.body.toLowerCase().includes(filter.body.toLowerCase());
      return titleMatch && bodyMatch;
    });
  }, [data, filter]);

  return {
    data: filteredData,
    filter,
    setFilter,
    navigate
  };
};

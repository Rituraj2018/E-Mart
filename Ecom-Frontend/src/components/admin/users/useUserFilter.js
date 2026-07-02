import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllUsersDashboard } from "../../../store/actions";

const useUserFilter = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams();
    const currentPage = searchParams.get("page")
      ? Number(searchParams.get("page"))
      : 1;
    params.set("pageNumber", (currentPage - 1).toString());

    const queryString = params.toString();
    dispatch(getAllUsersDashboard(queryString));
  }, [dispatch, searchParams]);
};

export default useUserFilter;

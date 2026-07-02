import React from "react";
import { useSelector } from "react-redux";
import UserTable from "./UserTable";
import ErrorPage from "../../shared/ErrorPage";
import Loader from "../../shared/Loader";
import useUserFilter from "./useUserFilter";

const Users = () => {
  const { users, pagination } = useSelector((state) => state.admin);
  const { isLoading, errorMessage } = useSelector((state) => state.errors);

  // Calls useUserFilter hook to handle fetching
  useUserFilter();

  const emptyUsers = !users || users?.length === 0;

  if (errorMessage) {
    return <ErrorPage message={errorMessage} />;
  }

  return (
    <React.Fragment>
      {!emptyUsers && (
        <h1 className="text-slate-800 text-3xl text-center font-bold pb-6 uppercase mt-6">
          All Users
        </h1>
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {emptyUsers ? (
            <div className="flex flex-col items-center justify-center text-gray-600 py-10">
              <h2 className="text-2xl font-semibold">No Users Found</h2>
            </div>
          ) : (
            <UserTable users={users} pagination={pagination} />
          )}
        </>
      )}
    </React.Fragment>
  );
};

export default Users;

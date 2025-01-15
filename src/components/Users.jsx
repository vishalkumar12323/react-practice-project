import { useState, useEffect } from "react";
import { useQuery } from "../hooks/useQuery.js";

export const Users = () => {
  const url = "http://localhost:8080/customers";
  const { data, loading, reqError } = useQuery({ url });
  return <Layout data={data} loading={loading} error={reqError} />;
};

const Layout = ({ data, loading, error }) => {
  console.log(error);
  console.log(data);
  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        Loading...
      </div>
    );
  }
  return (
    <>
      {data && data.length > 0 ? (
        data.map((item) => (
          <li key={item.customer_id}> {item.customer_name} </li>
        ))
      ) : (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          Error Heppens
          {/* {error} */}
        </div>
      )}
    </>
  );
};

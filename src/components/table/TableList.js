import React from "react";
import TableRow from "./TableRow";

function TableList({ orders }) {
  return (
    <>
      {orders.length > 0
        ? orders.map((order, index) => {
            let shade = "";
            if (order.status.includes("Dispatched")) {
              shade = "#10b981";
            } else if (order.status.includes("Pending")) {
              shade = "#f97316";
            } else {
              shade = "#06b6d4";
            }
            return <TableRow order={order} count={index}  key={index} shade={shade} />;
          })
        : ""}
    </>
  );
}

export default TableList;

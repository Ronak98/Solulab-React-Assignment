import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "../../Components/table";
import Ticker from "../../Components/ticker";
import { btc_data, order_book_data, setDataApiCall } from "./dashboardSlice";

export function Dashboard() {
  const btcData = useSelector(btc_data);
  const orderBookData = useSelector(order_book_data);
  const dispatch = useDispatch();

  // useEffect hook for api call to set data
  useEffect(() => {
    dispatch(setDataApiCall());
    setInterval(() => {
      dispatch(setDataApiCall());
    }, 3000);
  }, [dispatch]);

  return (
    <div className="main">
      <Ticker
        header="BTC/USD"
        src={"/BTC-alt.svg"}
        alt="fireSpot"
        label="(Price in USD)"
        value={btcData}
      />
      <Table value={orderBookData} />
    </div>
  );
}

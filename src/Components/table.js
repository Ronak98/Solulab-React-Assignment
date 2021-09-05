import React from "react";
import { currencyFormat, Decimal } from "../Config/helperFunction";

const Table = (props) => {
  return (
    props.value && (
      <div className="mt-20">
        <div className="order-header">
          <h4>
            ORDER BOOK <span className="opacity">BTC/USD</span>
          </h4>
        </div>
        <div className="row">
          <table>
            <tr>
              <th>COUNT</th>
              <th>AMOUNT</th>
              <th>TOTAL</th>
              <th>PRICE</th>
            </tr>
            {props.value.map((item) => {
              return (
                item[2] > 0 && (
                  <tr>
                    <td>{item[1]}</td>
                    <td>{Decimal(item[2])}</td>
                    <td>{Decimal(item[2])}</td>
                    <td>{currencyFormat(item[0])}</td>
                  </tr>
                )
              );
            })}
          </table>
          <table>
            <tr>
              <th>PRICE</th>
              <th>TOTAL</th>
              <th>AMOUNT</th>
              <th>COUNT</th>
            </tr>
            {props.value.map((item) => {
              return (
                item[2] < 0 && (
                  <tr>
                    <td>{currencyFormat(item[0])}</td>
                    <td>{Decimal(item[2])}</td>
                    <td>{Decimal(item[2])}</td>
                    <td>{item[1]}</td>
                  </tr>
                )
              );
            })}
          </table>
        </div>
      </div>
    )
  );
};

export default Table;

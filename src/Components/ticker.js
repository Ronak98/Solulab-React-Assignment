import React from "react";
import { currencyFormat } from "../Config/helperFunction";

const Ticker = (props) => {
  return (
    props.value && (
      <div className="ticker">
        <table>
          <tr>
            <td className="center">
              <img src={props.src} alt={props.src} className="img" />
            </td>
            <td>
              <tr>
                <td className="large">{props.header}</td>
              </tr>
              <tr>
                <td>
                  <span className="opacity">VOL</span>{" "}
                  {currencyFormat(props.value[7])}{" "}
                  <span className="opacity">BTC</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="opacity">LOW</span>{" "}
                  {currencyFormat(props.value[9])}
                </td>
              </tr>
            </td>
            <td>
              <tr>
                <td className="large right">
                  {currencyFormat(props.value[6])}
                </td>
              </tr>
              <tr>
                <td
                  className={props.value[4] > 0 ? "green right" : "red right"}
                >
                  {currencyFormat(props.value[4])} (
                  {Math.abs(props.value[5] * 100).toFixed(2)}
                  %)
                </td>
              </tr>
              <tr>
                <td className="right">
                  <span className="opacity">HIGH</span>{" "}
                  {currencyFormat(props.value[8])}
                </td>
              </tr>
            </td>
          </tr>
        </table>
      </div>
    )
  );
};

export default Ticker;

import React, { useState } from "react";
import axios from "axios";

export const axiosCall = () => {
  return axios
    .get(
      "https://newsapi.org/v2/everything?q=Apple&from=2021-04-30&sortBy=popularity&apiKey=42c5b72f1c954074a6f330736df73167"
    )
    .then(function (response) {
      // console.log(response, "response at axios");
      return response;
    })
    .catch(function (error) {
      return error;
    });
};
export default axiosCall;

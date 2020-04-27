import React, { useEffect, useState } from "react";
import axios from "axios";

import { BASE_URL } from "../../config";
import Table from "./Section/Table";

function Coins() {
  const [Coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/coins/markets?vs_currency=krw&order=market_cap_desc&per_page=100&page`
      )
      .then((response) => {
        // console.log(response.data);
        setCoins(response.data);
      });
  }, []);

  return <div>{Coins && <Table coins={Coins} />}</div>;
}

export default Coins;

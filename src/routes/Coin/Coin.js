import React, { useEffect, useState } from "react";
import axios from "axios";

import { BASE_URL } from "../../config";
import Info from "./Section/Info";

function Coin({ match }) {
  const [Coin, setCoin] = useState({});

  useEffect(() => {
    axios.get(`${BASE_URL}/coins/${match.params.id}`).then((response) => {
      setCoin(response.data);
    });
  }, [match.params.id]);

  return (
    <div>
      <Info
        name={Coin.localization ? Coin.localization.ko : null}
        description={Coin.description ? Coin.description.ko : null}
        homepage={Coin.links && Coin.links.homepage}
        site={Coin.links && Coin.links.blockchain_site}
        current_price={Coin.market_data && Coin.market_data.current_price.krw}
        market_cap={Coin.market_data && Coin.market_data.market_cap.krw}
        reddit={Coin.links && Coin.links.subreddit_url}
        github={Coin.links && Coin.links.repos_url.github}
        tickers={Coin.tickers && Coin.tickers}
      />
    </div>
  );
}

export default Coin;

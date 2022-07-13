import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  console.log(data);
  if (isFetching) return "Loading...";
  return (
    <>
      <div className="flex flex-col bg-slate-800 text-white mt-2">
        <h1 className="text-5xl font-serif">Crypto stats</h1>
        <div className="flex flex-col flex-wrap  justify-center space-y-5 font-bold">
          <div></div>
          <div className="flex flex-col ">
            <h1>Total Cryptocurrency</h1>
            <p>{globalStats.total}</p>
          </div>
          <div className="flex flex-col ">
            <h1>Total Exchanges</h1>
            <p>{millify(globalStats.totalExchanges)}</p>
          </div>
          <div className="flex flex-col ">
            <h1>Total Market Cap</h1>
            <p>{millify(globalStats.totalMarketCap)}</p>
          </div>
          <div className="flex flex-col ">
            <h1>Total 24h Volume</h1>
            <p>{millify(globalStats.total24hVolume)}</p>
          </div>
          <div className="flex flex-col ">
            <h1>{millify(globalStats.totalMarkets)}</h1>
            <p>5</p>
          </div>
        </div>
      </div>

      <div className="home-heading-contanier mt-3 bg-black text-white h-20 flex flex-col justify-center items-center">
        <h1 className="text-xl">Top Cryptocurrencies in the world</h1>
        <button className="mt-2 bg-blue-900 rounded-lg w-28">
          <Link to="/cryptocurrencies">Show more</Link>
        </button>
      </div>
      <Cryptocurrencies simplified={true} />
    </>
  );
};

export default Homepage;

import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useState } from "react";
import { useEffect } from "react";
const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchterm, setSearchTerm] = useState(" ");
  console.log(cryptos);

  useEffect(() => {
    setCryptos(cryptoList?.data?.coins);

    const filteredData = cryptoList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchterm.toLowerCase())
    );

    setCryptos(filteredData);
  }, [cryptoList, searchterm]);

  if (isFetching) return "Loading...";

  return (
    <>
      {!simplified && (
        <div className=" mt-5">
          <input
            placeholder="Search cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-md p-1 " 
          />
        </div>
      )}
      <div>
        {cryptos?.map((currency) => (
          <div
            className="bg-slate-800 text-white flex flex-col justify-center mt-7 rounded-sm hover:bg-blue-600 border "
            Key={currency.id}
          >
            <div className="flex flex-col space-y-3 justify-center items-center mt-1">
              <img src={currency.iconUrl} className="w-5 " />
              <h1>{`${currency.rank}. ${currency.name}`}</h1>

              <p>Price:{millify(currency.price)}</p>
              <p>Market Cap:{millify(currency.marketCap)}</p>
              <p>Daily Change:{millify(currency.change)}%</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cryptocurrencies;

import React, { use } from "react";

import PlayerCard from "../playerCard/PlayerCard";

const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const playersData = use(playersPromise);
  //console.log(playersData);
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 m-5">
      {playersData.map((player) => (
        <PlayerCard
          player={player}
          setAvailableBalance={setAvailableBalance}
          availableBalance={availableBalance}
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
        ></PlayerCard>
      ))}
      {/* <div className="card bg-base-100 w-96 shadow-sm p-4">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="mt-4">
          <div className="flex">
            <img src={userImg}></img>
            <h2 className="card-title ml-2">Virat Kohli</h2>
          </div>
          <div className="flex justify-between mt-4 border-b-2 pb-2 border-gray-200">
            <div className="flex items-center">
              <img className="w-[20px] h-[20px]" src={flagImg}></img>
              <span className="ml-2">India</span>
            </div>
            <button className="btn">All Rounder</button>
          </div>

          <div className="flex justify-between font-bold">
            <span>Rating: </span>
            <span>$</span>
          </div>
          <div className="flex justify-between mt-4">
            <span className="font-bold">Left hand bat </span>
            <span>Right hand ball</span>
          </div>

          <div className="card-actions flex justify-between mt-4 items-center">
            <p className="font-bold">Price: $11000</p>
            <button className="btn ">Choose Player</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AvailablePlayers;

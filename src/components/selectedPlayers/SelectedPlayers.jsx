import React from "react";
import SelectedCard from "../selectedCard/SelectedCard";

const SelectedPlayers = ({ purchasedPlayers, removePlayer }) => {
  //console.log(purchasedPlayers);
  return (
    <div className="max-w-[1200px] mx-auto">
      {purchasedPlayers.map((player) => (
        <SelectedCard
          player={player}
          removePlayer={removePlayer}
        ></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;

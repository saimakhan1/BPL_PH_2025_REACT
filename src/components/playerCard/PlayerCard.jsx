import React, { useState } from "react";
import userImg from "../../assets/user1.png";
import flagImg from "../../assets/Group.png";
import { toast } from "react-toastify";

const PlayerCard = ({
  player,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelected = (playerData) => {
    if (availableBalance < player.price) {
      toast("Not Enough Coins❗❕");
      return;
    }
    if (purchasedPlayers.length === 6) {
      toast("6 Players already selected");
      return;
    }
    setIsSelected(true);
    setAvailableBalance(
      availableBalance - playerData.price
      //playerData.price.split("USD").join("").split(",").join("")
    );
    setPurchasedPlayers([...purchasedPlayers, playerData]);
    toast("Player Purchased");
  };

  return (
    <div className="card bg-base-100 shadow-sm p-4 m-5">
      <figure>
        <img
          src={player.player_image}
          alt="Players"
          className="w-[210px] h-[200px] object-cover"
        />
      </figure>
      <div className="mt-4">
        <div className="flex">
          <img src={userImg}></img>
          <h2 className="card-title ml-2">{player.player_name}</h2>
        </div>
        <div className="flex justify-between mt-4 border-b-2 pb-2 border-gray-200">
          <div className="flex items-center">
            <img className="w-[20px] h-[20px]" src={flagImg}></img>
            <span className="ml-2">{player.player_country}</span>
          </div>
          <button className="btn">{player.playing_role}</button>
        </div>

        <div className="flex justify-between font-bold">
          <span>{player.rating} </span>
          <span>$</span>
        </div>
        <div className="flex justify-between mt-4">
          <span className="font-bold">{player.batting_style} </span>
          <span>{player.bowling_style}</span>
        </div>

        <div className="card-actions flex justify-between mt-4 items-center">
          <p className="font-bold">Price: ${player.price}</p>
          <button
            className="btn "
            disabled={isSelected}
            onClick={() => {
              handleSelected(player);
              //   setIsSelected(true);
              //   setAvailableBalance(availableBalance - player.price);
            }}
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;

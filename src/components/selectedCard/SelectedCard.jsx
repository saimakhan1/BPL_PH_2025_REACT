import React from "react";

const SelectedCard = ({ player, removePlayer }) => {
  console.log(player);
  const handleRemove = () => {
    removePlayer(player);
  };
  return (
    <div className="border-4 rounded-2xl border-gray-100  flex justify-between items-center m-4 p-3">
      <div className="left flex">
        <img
          className=" h-[50px] w-[50px] rounded-xl"
          src={player.player_image}
        ></img>
        <div className="ml-3">
          <h2>{player.player_name}</h2>
          <h3>{player.playing_role}</h3>
        </div>
      </div>

      <div className="right" onClick={handleRemove}>
        <img src="https://i.ibb.co.com/DDgY1FkH/Frame.png"></img>
      </div>
    </div>
  );
};

export default SelectedCard;

import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ToastContainer } from "react-toastify";
import "./App.css";

import AvailablePlayers from "./components/availablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/selectedPlayers/SelectedPlayers";
import Navbar from "./components/navbar/Navbar";

const fetchPlayers = async () => {
  const res = await fetch("./players.json");
  return res.json();
};

const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  // console.log(purchasedPlayers);

  const removePlayer = (p) => {
    const filteredData = purchasedPlayers.filter(
      (ply) => ply.player_name !== p.player_name
    );
    console.log(filteredData);
    setPurchasedPlayers(filteredData);
    setAvailableBalance(availableBalance + p.price);
  };

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className=" max-w-[1200px] mx-auto flex justify-between  items-center">
        <h1 className="font-bold text-2xl">
          {toggle === true
            ? "Available Players"
            : `Selected Players (${purchasedPlayers.length}/6)`}
        </h1>
        <div className="font-bold">
          <button
            onClick={() => {
              setToggle(true);
            }}
            className={` border-r-0 py-3 px-5 border-1 border-gray-200 rounded-l-2xl ${
              toggle === true ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => {
              setToggle(false);
            }}
            className={` border-l-0 py-3 px-5 border-1 border-gray-200 rounded-r-xl ${
              toggle === false ? "bg-[#E7FE29]" : ""
            }`}
          >
            Selected <span>{purchasedPlayers.length}</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <p>
              Loading Available Players...
              <span className="loading loading-ring loading-xl"></span>
            </p>
          }
        >
          <AvailablePlayers
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          purchasedPlayers={purchasedPlayers}
          removePlayer={removePlayer}
        ></SelectedPlayers>
      )}
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;

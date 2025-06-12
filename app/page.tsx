'use client';

import React, { useState } from 'react';

const player_vals: { [key: string]: number } = {
  "Remi": 5,
  "Brennan": 5,
  "Gabe": 5,
  "Cullen": 5,
  "Michael": 5,
  "Tanner": 5,
  "Simon": 4,
  "James": 4,
  "Hilaal": 4,
  "Isaiah": 4,
  "Dylan": 4,
  "Boomer": 3,
  "Andrew": 3,
  "Josh": 3,
  "Ocean": 3,
  "Luke": 3,
  "Hector": 3,
  "Ethan Ly": 2,
  "Zen": 2,
  "Ethan Chung": 2,
  "Tuan": 1,
  "Ger": 1,
  "Boden": 1,
}

const playerNames = Object.keys(player_vals);

export default function Home() {

  const [chosenTeamA, setChosenTeamA] = useState<string[]>([]);
  const [chosenTeamB, setChosenTeamB] = useState<string[]>([]);
  const [teamAVal, setTeamAVal] = useState<number>(0);
  const [teamBVal, setTeamBVal] = useState<number>(0);
  // State must be inside the component
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const toggleShowTeams = () => {
    setIsVisible((prev) => !prev);
  };

  // Toggle player selection, using state updater function
  function togglePlayer(name: string) {
    setSelectedPlayers((prev) => {
      if (prev.includes(name)) {
        return prev.filter((playerName) => playerName !== name);
      } else {
        return [...prev, name];
      }
    });
  }

  function generateTeams() {
    let teamA: string[] = [];
    let teamAVal = 0;
    let teamB: string[] = [];
    let teamBVal = 0;
    let group1: string[] = [];
    let group2: string[] = [];
    let group3: string[] = [];
    let group4: string[] = [];
    let group5: string[] = [];
    for (const player of selectedPlayers){ //sorts players into tiers
      if (player_vals[player] == 1){
        group1 = group1.concat(player);
      }
      else if (player_vals[player] == 2){
        group2 = group2.concat(player);
      }
      else if (player_vals[player] == 3){
        group3 = group3.concat(player);
      }
      else if (player_vals[player] == 4){
        group4 = group4.concat(player);
      }
      else {
        group5 = group5.concat(player);
      }
    }
    shuffleArray(group1); //shuffles tiers for randomness
    shuffleArray(group2);
    shuffleArray(group3);
    shuffleArray(group4);
    shuffleArray(group5);
    
    for (const player of group5){
      if (teamAVal == teamBVal && teamA.length == teamB.length){ //teams are equal strength and size so the player goes to random team
        if (Math.random() < 0.5){
          teamA = teamA.concat(player);
          teamAVal += 5;
        }
        else {
          teamB = teamB.concat(player);
          teamBVal += 5;
        }
      }
      else if (teamAVal == teamBVal && teamA.length > teamB.length){ //teamA is bigger so teamB gets player
        teamB = teamB.concat(player);
        teamBVal += 5;
      }
      else if (teamAVal == teamBVal && teamA.length < teamB.length){ //teamB is bigger so teamB gets player
        teamA = teamA.concat(player);
        teamAVal += 5;
      }
      else if (teamAVal < teamBVal){ //team A gets player
        teamA = teamA.concat(player);
        teamAVal += 5;
      }
      else { //team B gets player
        teamB = teamB.concat(player);
        teamBVal += 5;
      }
    }
    for (const player of group4){
      if (teamAVal == teamBVal && teamA.length == teamB.length){ //teams are equal strength and size so the player goes to random team
        if (Math.random() < 0.5){
          teamA = teamA.concat(player);
          teamAVal += 4;
        }
        else {
          teamB = teamB.concat(player);
          teamBVal += 4;
        }
      }
      else if (teamAVal == teamBVal && teamA.length > teamB.length){ //teamA is bigger so teamB gets player
        teamB = teamB.concat(player);
        teamBVal += 4;
      }
      else if (teamAVal == teamBVal && teamA.length < teamB.length){ //teamB is bigger so teamB gets player
        teamA = teamA.concat(player);
        teamAVal += 4;
      }
      else if (teamAVal < teamBVal){ //team A gets player
        teamA = teamA.concat(player);
        teamAVal += 4;
      }
      else { //team B gets player
        teamB = teamB.concat(player);
        teamBVal += 4;
      }
    }
    for (const player of group3){
      if (teamAVal == teamBVal && teamA.length == teamB.length){ //teams are equal strength and size so the player goes to random team
        if (Math.random() < 0.5){
          teamA = teamA.concat(player);
          teamAVal += 3;
        }
        else {
          teamB = teamB.concat(player);
          teamBVal += 3;
        }
      }
      else if (teamAVal == teamBVal && teamA.length > teamB.length){ //teamA is bigger so teamB gets player
        teamB = teamB.concat(player);
        teamBVal += 3;
      }
      else if (teamAVal == teamBVal && teamA.length < teamB.length){ //teamB is bigger so teamB gets player
        teamA = teamA.concat(player);
        teamAVal += 3;
      }
      else if (teamAVal < teamBVal){ //team A gets player
        teamA = teamA.concat(player);
        teamAVal += 3;
      }
      else { //team B gets player
        teamB = teamB.concat(player);
        teamBVal += 3;
      }
    }
    for (const player of group2){
      if (teamAVal == teamBVal && teamA.length == teamB.length){ //teams are equal strength and size so the player goes to random team
        if (Math.random() < 0.5){
          teamA = teamA.concat(player);
          teamAVal += 2;
        }
        else {
          teamB = teamB.concat(player);
          teamBVal += 2;
        }
      }
      else if (teamAVal == teamBVal && teamA.length > teamB.length){ //teamA is bigger so teamB gets player
        teamB = teamB.concat(player);
        teamBVal += 2;
      }
      else if (teamAVal == teamBVal && teamA.length < teamB.length){ //teamB is bigger so teamB gets player
        teamA = teamA.concat(player);
        teamAVal += 2;
      }
      else if (teamAVal < teamBVal){ //team A gets player
        teamA = teamA.concat(player);
        teamAVal += 2;
      }
      else { //team B gets player
        teamB = teamB.concat(player);
        teamBVal += 2;
      }
    }
    for (const player of group1){
      if (teamAVal == teamBVal && teamA.length == teamB.length){ //teams are equal strength and size so the player goes to random team
        if (Math.random() < 0.5){
          teamA = teamA.concat(player);
          teamAVal += 1;
        }
        else {
          teamB = teamB.concat(player);
          teamBVal += 1;
        }
      }
      else if (teamAVal == teamBVal && teamA.length > teamB.length){ //teamA is bigger so teamB gets player
        teamB = teamB.concat(player);
        teamBVal += 1;
      }
      else if (teamAVal == teamBVal && teamA.length < teamB.length){ //teamB is bigger so teamB gets player
        teamA = teamA.concat(player);
        teamAVal += 1;
      }
      else if (teamAVal < teamBVal){ //team A gets player
        teamA = teamA.concat(player);
        teamAVal += 1;
      }
      else { //team B gets player
        teamB = teamB.concat(player);
        teamBVal += 1;
      }
    }
    setChosenTeamA(teamA);
    setChosenTeamB(teamB);
    setTeamAVal(teamAVal);
    setTeamBVal(teamBVal);
    //console.log(teamA, teamB);
    toggleShowTeams();
}

  function shuffleArray(array: string[]) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  return (
    <div>
      <div className="text-center m-5 text-2xl bg-blue-500 p-5">Select the Players</div>
      <div className="grid grid-cols-2 gap-4 mb-20">
        {playerNames.map((player) => {
          const isSelected = selectedPlayers.includes(player);
          console.log('chosenTeamA:', chosenTeamA);
          return (
            <button
              key={player}
              onClick={() => togglePlayer(player)}
              className={`p-4 ml-5 mr-5 rounded font-semibold transition
                ${
                  isSelected
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }
              `}
            >
              {player}
            </button>
          );
        })}
      </div>
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 p-4 rounded-full bg-blue-400">
        <button className="shine-text" onClick={generateTeams}>
          Generate Teams
        </button>
      </div>
      {isVisible && (
        <div className="fixed left-0 top-0 w-[100vw] min-h-screen h-full overflow-auto bg-black z-10">
          <div>
            <button className="text-xl sm:text-2xl ml-5 mt-5 p-3 bg-blue-500 rounded-full flex items-center justify-center" onClick={toggleShowTeams}>Back to Player Selection</button>
          </div>
          <div className="flex justify-center items-center">
          <div className='mb-20'>
            <div className='text-center text-red-500 mt-10 text-2xl'>
            Team Strength: {teamAVal}
            </div>
          
          {chosenTeamA.map((player) => {
          return (
            <div key={player} className="bg-blue-500 p-4 m-10 mr-5 sm:mr-30 left-20 w-auto top-20 rounded-full font-2xl z-20 text-center">
              {player}
            </div>
          );
        })}
          </div>
          <h1 className="text-5xl">VS.</h1>
          <div className='mb-20'>
          <div className='text-center text-red-500 mt-10 text-2xl'>
            Team Strength: {teamBVal}
            </div>
          {chosenTeamB.map((player) => {
          return (
            <div key={player} className=" bg-blue-500 p-4 m-10 ml-5 sm:ml-30 w-auto right-20 top-20 rounded-full font-2xl z-20 text-center">
              {player}
            </div>
          );
        })}
          </div>
        </div>
        </div>
      )}
    </div>
  );
}
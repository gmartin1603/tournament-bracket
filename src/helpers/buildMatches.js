const matches = (matchUps) => {
  let arr = [];
  matchUps.forEach((matchUp, i) => {
    console.log(matchUp);
    let nextMatch = i + 1 + (i + 1) * 1000 + 1;
    let startTime = `2023-05-${i + 1}`;
    let participant = {
      id: "",
      resultText: null,
      isWinner: false,
      status: null,
      name: "",
    };
    let match = {
      id: i + 1 + i * 1000,
      name: `Round ${i + 1}`,
      nextMatchId: nextMatch,
      tournamentRoundText: `${i + 1}`,
      startTime: startTime,
      state: "SCHEDULED",
      participants: [
        {
          ...participant,
          id: `${(matchUp[0], Math.random() * 100)}`,
          name: matchUp[0],
        },
        {
          ...participant,
          id: `${(matchUp[1], Math.random() * 100)}`,
          name: matchUp[1],
        },
      ],
    };
    console.log(match);
    arr = [...arr, match];
  });
  console.log(arr);
  return arr;
};

export default matches;

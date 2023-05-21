import {
  Match,
  SVGViewer,
  SingleEliminationBracket,
} from "@g-loot/react-tournament-brackets";
import React from "react";
import matches from "../data/matches";

const SingleElimination = ({}) => {
  console.log("Testing");
  return (
    <>
      <SingleEliminationBracket
        matches={matches}
        matchComponent={Match}
        svgWrapper={({ children, ...props }) => (
          <SVGViewer
            width={1400}
            height={900}
            SVGBackground={"black"}
            {...props}
          >
            {children}
          </SVGViewer>
        )}
      />
    </>
  );
};

export default SingleElimination;

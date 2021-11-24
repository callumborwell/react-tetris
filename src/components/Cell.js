import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => (
    <StyledCell type={type} color={TETROMINOS[type].color} />
);

// React memo - only rerendering cells that change
export default React.memo(Cell);
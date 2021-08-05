import React, { useContext } from "react";
import { CalendarContext } from "../state/context";
import dayjs from "dayjs";
import Events from "./Events";

export default function CalendarBody() {
  const { state } = useContext(CalendarContext);
  const { startOfCurrentWeek } = state;

  let renderCells = () => {
    let rowOfCells = [];
    for (let i = 1; i <= 7; i++) {
      const rowOfCell = [];
      for (let j = 1; j <= 9; j++) {
        const cell = (
          <div className="calendar_col calendar_table_cells" key={j} />
        );
        rowOfCell.push(cell);
      }
      const day = dayjs(startOfCurrentWeek)
        .add(i - 1, "day")
        .toDate();
      const row = (
        <div
          className="calendar_body_row"
          style={{ width: `${100 / 7}%` }}
          key={i}
        >
          <Events day={day} />
          {rowOfCell}
        </div>
      );
      rowOfCells.push(row);
    }
    return rowOfCells;
  };

  return <>{renderCells()}</>;
}

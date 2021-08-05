import { useContext } from "react";
import dayjs from "dayjs";
import { getNextWeek, setTodayWeek, getLastWeek } from "../state/reducer";
import Button from "./utils/Button";
import DaysOfWeek from "./DaysOfWeek";
import { CalendarContext } from "../state/context";
export default function CalendarHeader() {
  const { state, dispatch } = useContext(CalendarContext);
  const { currentDate } = state;
  return (
    <>
      <div className="calendar_header_row width100">
        <h1 className="calendar_header_month_year">
          {dayjs(currentDate).format("MMM") +
            " " +
            dayjs(currentDate).format("YYYY")}
        </h1>
        <div>
          <Button content="<" onClick={() => dispatch(getLastWeek())} />
          <Button
            content="Today"
            onClick={() => dispatch(setTodayWeek())}
            className="btn_calendar_today"
          />
          <Button content=">" onClick={() => dispatch(getNextWeek())} />
        </div>
      </div>
      <DaysOfWeek />
    </>
  );
}

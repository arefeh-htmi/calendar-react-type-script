import dayjs from "dayjs";
import { useContext } from "react";
import { CalendarContext } from "../state/context";
import isoWeek from "dayjs/plugin/isoWeek";
import isToday from "dayjs/plugin/isToday";
dayjs.extend(isToday);
dayjs.extend(isoWeek);

function DaysOfWeek() {
  const { state } = useContext(CalendarContext);
  const { currentDate } = state;

  const dateFormat = "ddd D";
  const days = [];
  let startDate = dayjs(currentDate).startOf("isoWeek").toDate();

  for (let i = 0; i < 7; i++) {
    let day = dayjs(startDate).add(i, "day"),
      displayDay = dayjs(day).format(dateFormat);
    days.push(
      <>
        <div
          className={`calandar_col calendar_dayOfWeek
           ${dayjs(day).isToday() ? "calendar_dayOfWeek_today " : ""}
           ${dayjs(day).day() === 0 ? "calendar_dayOfWeek_sunday" : ""}
         `}
          key={i}
        >
          <span>{displayDay}</span>
        </div>
      </>
    );
  }

  return <div className="calendar_header_row">{days}</div>;
}

export default DaysOfWeek;

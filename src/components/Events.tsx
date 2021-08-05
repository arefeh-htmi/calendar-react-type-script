import React from "react";
import { useContext } from "react";
import dayjs from "dayjs";
import { EventType } from "../state/state";
import { CalendarContext } from "../state/context";

interface Props {
  day: Date;
}
const Event = ({ event }: { event: EventType }) => (
  <div className="calendar_event width100">{event.title}</div>
);
const Events = ({ day }: Props) => {
  const { state } = useContext(CalendarContext);
  const { events } = state;
  return (
    <div className="calendar_events_container width100">
      {events.map((event: EventType) => {
        if (dayjs(day).isSame(dayjs(event.date), "day")) {
          console.log(day, event.date);

          return <Event key={event.id} event={event} />;
        } else return false;
      })}
    </div>
  );
};
export default Events;
// yyyy-mm-dd

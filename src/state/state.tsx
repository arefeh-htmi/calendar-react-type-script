import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
dayjs.extend(isoWeek);

export interface InitialStateType {
  events: EventType[];
  currentDate: Date;
  startOfCurrentWeek: Date;
}

export interface EventType {
  id: string;
  title: string;
  date: string;
}

export const initialState: InitialStateType = {
  events: [],
  currentDate: dayjs(new Date()).toDate(),
  startOfCurrentWeek: dayjs(new Date()).startOf("isoWeek").toDate(),
};

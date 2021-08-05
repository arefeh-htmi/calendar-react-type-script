import { ActionTypes, CalendarActions } from "./actions";
import { InitialStateType } from "./state";
import { NextWeek, LastWeek, Today, GetEvents } from "./actions";
import dayjs from "dayjs";
import data from "../data/events";
export default function rootReducer(
  state: InitialStateType,
  action: CalendarActions
) {
  switch (action.type) {
    case ActionTypes.NextWeek:
      const nextWekDay = dayjs(state.currentDate).add(1, "week").toDate();
      return {
        ...state,
        currentDate: nextWekDay,
        startOfCurrentWeek: dayjs(nextWekDay).startOf("isoWeek").toDate(),
      };
    case ActionTypes.LastWeek:
      const lastWeekDay = dayjs(state.currentDate).add(-1, "week").toDate();
      return {
        ...state,
        currentDate: lastWeekDay,
        startOfCurrentWeek: dayjs(lastWeekDay).startOf("isoWeek").toDate(),
      };
    case ActionTypes.Today:
      return {
        ...state,
        currentDate: new Date(),
        startOfCurrentWeek: dayjs(new Date()).startOf("isoWeek").toDate(),
      };
    case ActionTypes.GetEvents:
      return { ...state, events: action.payload };
    default:
      return state;
  }
}

export const getNextWeek = (): NextWeek => ({
  type: ActionTypes.NextWeek,
});

export const getLastWeek = (): LastWeek => ({
  type: ActionTypes.LastWeek,
});
export const setTodayWeek = (): Today => ({
  type: ActionTypes.Today,
});
export const fetchEvents = (): GetEvents => {
  return {
    type: ActionTypes.GetEvents,
    payload: [...data],
  };
};

import { EventType } from "./state";

export enum ActionTypes {
  NextWeek,
  LastWeek,
  Today,
  GetEvents,
}
export interface GetEvents {
  type: ActionTypes.GetEvents;
  payload: Array<EventType>;
}
export interface NextWeek {
  type: ActionTypes.NextWeek;
}
export interface Today {
  type: ActionTypes.Today;
}
export interface LastWeek {
  type: ActionTypes.LastWeek;
}
export type CalendarActions = NextWeek | LastWeek | Today | GetEvents;

import React from "react";
import { InitialStateType, initialState } from "./state";
import { CalendarActions } from "./actions";

export const CalendarContext = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<CalendarActions>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

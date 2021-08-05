import React, { useState, useEffect, useReducer } from "react";
import CalendarHeader from "./CalendarHeader";
import { initialState } from "../state/state";
import reducer, { fetchEvents } from "../state/reducer";
import CalendarBody from "./CalendarBody";
import ErorrMessage from "./utils/Erorr";
import Loading from "./utils/Loading";
import { CalendarContext } from "../state/context";

export default function CalendarContainer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setTimeout(() => {
        dispatch(fetchEvents());
        setLoading(false);
      }, 2000);
    } catch (e) {
      console.log(e);
      setError(true);
      setLoading(false);
    }
  }, []);

  return (
    <>
      <CalendarContext.Provider value={{ state, dispatch }}>
        {error ? <ErorrMessage content="some erorr!" /> : null}
        {loading ? <Loading /> : null}

        <div className="calendarContainer">
          <CalendarHeader />
          <CalendarBody />
        </div>
      </CalendarContext.Provider>
    </>
  );
}

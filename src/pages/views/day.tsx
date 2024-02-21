import React from "react";
import DayView from "../../components/calendars/day_view";
import DefaultAuth from "~/layouts/DefaultAuth";

function Day() {
  return (
    <DefaultAuth>
      <DayView />
    </DefaultAuth>
  );
}

export default Day;

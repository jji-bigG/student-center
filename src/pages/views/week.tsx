import React from "react";
import WeekView from "../../components/calendars/week_view";
import DefaultAuth from "~/layouts/DefaultAuth";

function Week() {
  return (
    <DefaultAuth>
      <WeekView />
    </DefaultAuth>
  );
}

export default Week;

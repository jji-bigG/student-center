import React from "react";
import YearView from "../../components/calendars/year_view";
import DefaultAuth from "~/layouts/DefaultAuth";

function Year() {
  return (
    <DefaultAuth>
      <YearView />
    </DefaultAuth>
  );
}

export default Year;

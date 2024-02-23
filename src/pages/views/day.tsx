import { useRouter } from "next/router";
import React from "react";
import DayView from "~/components/calendars/day_view";
import DefaultAuth from "~/layouts/DefaultAuth";

function Day() {
  const { query } = useRouter();

  console.log(query.date);

  return (
    <DefaultAuth>
      <DayView />
    </DefaultAuth>
  );
}

export default Day;

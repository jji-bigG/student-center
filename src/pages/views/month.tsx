import MonthView from "~/components/calendars/month_view";

import DefaultAuth from "~/layouts/DefaultAuth";

export default function Month() {
  return (
    <DefaultAuth>
      <MonthView />
    </DefaultAuth>
  );
}

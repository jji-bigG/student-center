import MonthView from "../components/calendars/month_view";
import { api } from "~/utils/api";

import DefaultAuth from "~/layouts/DefaultAuth";

export default function Home() {
  return (
    <DefaultAuth>
      <MonthView />
    </DefaultAuth>
  );
}

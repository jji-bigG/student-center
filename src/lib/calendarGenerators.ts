// generate a list to be put in order on this calendar app so it can match the style

// this is to be fetched from API on that one day's events
interface Events {
  id: number;
  name: string;
  time: string;
  datetime: string;
  href: string;
}

interface MonthlyView {
  date: string;
  isCurrentMonth: boolean;
  events: Events[];
  isSelected: boolean;
}

export function formatDateString(date: Date): string {
  return date.toISOString().split("T")[0]!;
}

/**
 * generate a list of size 7*5 or 7*6 that has some not this month and some is this month
 * @param today today's date
 */
export function generateMonth(today: Date) {
  console.log(today);
  const monthArrangement: MonthlyView[] = [];
  const selected = today.getDate();

  // determine how many rows
  const daysRowAbove = today.getDate() - today.getDay();
  console.log("daysabove", daysRowAbove);
  if (daysRowAbove % 7 !== 0) {
    const above = Math.ceil(daysRowAbove / 7);
    // find the starting day number for that top row
    const diff = above * 7 - daysRowAbove;
    today.setDate(0); // go to the past month
    today.setDate(today.getDate() - diff + 1);

    // loop through and add
    const month = today.getMonth();
    while (today.getMonth() == month) {
      monthArrangement.push({
        date: formatDateString(today),
        isCurrentMonth: false,
        events: [],
        isSelected: false,
      });
      today.setDate(today.getDate() + 1);
    }
  }

  // insert this entire month
  today.setDate(1);
  const month = today.getMonth();
  while (today.getMonth() == month) {
    monthArrangement.push({
      date: formatDateString(today),
      isCurrentMonth: true,
      events: [
        {
          id: 1,
          name: "Design review",
          time: "10AM",
          datetime: "2022-01-03T10:00",
          href: "#",
        },
        {
          id: 2,
          name: "Sales meeting",
          time: "2PM",
          datetime: "2022-01-03T14:00",
          href: "#",
        },
      ],
      isSelected: today.getDate() === selected,
    });
    today.setDate(today.getDate() + 1);
  }

  // we keep adding when we reach the thresholds
  const threshold = 7 * 6;
  //   if (monthArrangement.length > 7 * 5) {
  //     threshold = 7 * 6;
  //   }

  while (monthArrangement.length < Math.min(threshold, 50)) {
    monthArrangement.push({
      date: formatDateString(today),
      isCurrentMonth: false,
      events: [],
      isSelected: false,
    });
    today.setDate(today.getDate() + 1);
  }

  return monthArrangement;
}

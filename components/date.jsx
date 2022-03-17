// import { parseISO, format } from 'date-fns'
import { format, parseISO } from "https://esm.sh/date-fns";

export default function Date({ dateString }) {
  dateString = dateString.toISOString(); // Needed to add this line to work in Lume.
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}

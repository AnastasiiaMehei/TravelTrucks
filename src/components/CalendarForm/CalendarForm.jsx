import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
export default function CalendarForm() {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}  wrapperClassName="react-datepicker__triangle" dateFormat="dd/MM/yyyy"/>
  );
};
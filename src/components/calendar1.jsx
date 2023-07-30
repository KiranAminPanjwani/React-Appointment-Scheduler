import React, { useState } from "react";
import "./calendar1.css";

function Calendar1() {
  const [date, setDate] = useState(new Date());

  // Get the day of the week for the first day of the month
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const startingDayOfWeek = firstDayOfMonth.getDay();

  // Move the calendar back to the previous month to show the starting days of the current month
  const startingMonth = new Date(date.getFullYear(), date.getMonth(), 0);
  startingMonth.setDate(startingMonth.getDate() - startingDayOfWeek);

  // Move the calendar forward to the next month to show the ending days of the current month
  const endingMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  endingMonth.setDate(endingMonth.getDate() + (6 - endingMonth.getDay()));

  // Event handler for clicking on the previous month button
  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  // Event handler for clicking on the next month button
  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  // Array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Array of day names
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Get the number of days in the current month
  const numDaysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  // Create an array of days in the current month
  const daysInMonth = Array.from({ length: numDaysInMonth }, (_, i) => i + 1);

  // Get the day of the week for the first day of the current month
  const firstDayOfWeek = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();

  // Create an array of days in the previous month
  const numDaysInPrevMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  const daysInPrevMonth = Array.from(
    { length: firstDayOfWeek },
    (_, i) => numDaysInPrevMonth - firstDayOfWeek + i + 1
  );

  // Create an array of days in the next month
  const numDaysInNextMonth = 42 - numDaysInMonth - firstDayOfWeek;
  const daysInNextMonth = Array.from(
    { length: numDaysInNextMonth },
    (_, i) => i + 1
  );

  // Combine the arrays of days into a single array
  const allDays = [...daysInPrevMonth, ...daysInMonth, ...daysInNextMonth];

  return (
    <div className="main-container">
      <div className="calendar-container">
        <div className="calendarHeader">
          <div className="monthYear">
            <h4>{monthNames[date.getMonth()]}</h4>
            {date.getFullYear()}
          </div>
          <div className="changingButtons">
            <button onClick={handlePrevMonth}>{"<"}</button>
            <button onClick={handleNextMonth}>{">"}</button>
          </div>
        </div>
        <table className="calendar-table">
          <thead>
            <tr>
              {dayNames.map((dayName) => (
                <th key={dayName}>{dayName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }, (_, i) => i).map((week) => (
              <tr key={week}>
                {dayNames.map((_, i) => (
                  <td key={i}>
                    {allDays[week * 7 + i] > numDaysInMonth ||
                    allDays[week * 7 + i] < 1 ? (
                      <span className="grayed-out">
                        {allDays[week * 7 + i]}
                      </span>
                    ) : (
                      allDays[week * 7 + i]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="socialmedia-container">
        <div className="schedulingHeader">
          <div className="smHeader">
            <div className="selectMedia">
              <h4>Select Media</h4>
            </div>
            <div className="options">
              <label>
                <input type="radio" name="choice" value="chat" />
                Chat
              </label>
              <label>
                <input type="radio" name="choice" value="call" />
                Call
              </label>
              <label>
                <input type="radio" name="choice" value="video" />
                Video
              </label>
            </div>
          </div>
          <div className="selectTime">
            <h4>Select Time</h4>
          </div>
        </div>

        <table className="time-options">
          <tbody>
            <tr>
              <td>01:00 pm</td>
              <td>02:00 pm</td>
            </tr>
            <tr>
              <td>03:00 pm</td>
              <td>05:00 pm</td>
            </tr>
            <tr>
              <td>06:00 pm</td>
              <td>08:00 pm</td>
            </tr>
            <tr>
              <td>09:00 pm</td>
              <td>10:00 pm</td>
            </tr>
            <tr>
              <td>11:00 pm</td>
              <td>12:00 pm</td>
            </tr>
            <tr>
              <td>01:00 am</td>
              <td>02:00 am</td>
            </tr>
          </tbody>
        </table>

        <div className="schedulingFooter">
          <div className="date-row">
            <p className="dateheading">Date</p>
            <p>Jan, 01</p>
          </div>

          <div className="time-row">
            <p className="timeheading">Time</p>
            <p>02:00 pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar1;

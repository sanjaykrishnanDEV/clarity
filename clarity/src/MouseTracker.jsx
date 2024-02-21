import React, { useState, useEffect } from "react";

const MouseTracker = () => {
  const [mouseEvents, setMouseEvents] = useState([]);
  const [scrollDepth, setScrollDepth] = useState(0);

  const trackMouseEvents = (event) => {
    const timestamp = new Date().getUTCDate();

    const eventDetails = {
      type: event.type,
      x: event.clientX,
      y: event.clientY,
      timestamp: timestamp,
    };

    setMouseEvents((prevEvents) => [...prevEvents, eventDetails]);
  };

  const trackScrollDepth = () => {
    const scrolled = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const percentage = (scrolled / documentHeight) * 100;
    setScrollDepth(percentage);
  };

  useEffect(() => {
    document.addEventListener("mousemove", trackMouseEvents);
    document.addEventListener("mousedown", trackMouseEvents);
    document.addEventListener("mouseup", trackMouseEvents);
    document.addEventListener("click", trackMouseEvents);
    window.addEventListener("scroll", trackScrollDepth);

    return () => {
      document.removeEventListener("mousemove", trackMouseEvents);
      document.removeEventListener("mousedown", trackMouseEvents);
      document.removeEventListener("mouseup", trackMouseEvents);
      document.removeEventListener("click", trackMouseEvents);
      window.removeEventListener("scroll", trackScrollDepth);
    };
  }, []);
  useEffect(() => {
    console.log("Scroll Depth:", scrollDepth.toFixed(2) + "%");
  }, [scrollDepth]);

  return (
    <div>
      <h1>Mouse Event Tracker</h1>
      <ul>
        {/* {mouseEvents.map((event, index) => (
          <li key={index}>
            {event.type} - X: {event.x}, Y: {event.y}, Timestamp:{" "}
            {event.timestamp}
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default MouseTracker;

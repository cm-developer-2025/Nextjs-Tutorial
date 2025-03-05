"use client";

import EventOne from "@/app/components/EventOne";
import PracticeOne from "@/app/components/PracticeOne";

export default function EventHandlingPage() {
  return (
    <div>
      <h1>Event Handling</h1>

      <EventOne />
      <PracticeOne name="Test user" />
    </div>
  );
}

// URL : http://localhost:3000/event-handling

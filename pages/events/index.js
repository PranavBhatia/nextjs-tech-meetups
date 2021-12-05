import EventLogistics from "../../components/event-detail/event-logistics";
import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";

export default function AllMeetupsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventList items={events}></EventList>
    </div>
  );
}

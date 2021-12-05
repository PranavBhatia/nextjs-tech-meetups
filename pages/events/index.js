import { Fragment } from "react";

import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

function AllMeetupsPage() {
  const events = getAllEvents();

  return (
    <Fragment>
      <EventsSearch />
      <EventList items={events}></EventList>
    </Fragment>
  );
}

export default AllMeetupsPage;

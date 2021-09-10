import EventItem from "./event-item";

export default function EventList(props) {
  const { items } = props;

  return (
    <ul>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          date={event.date}
          title={event.title}
          image={event.image}
          location={event.location}
        />
      ))}
    </ul>
  );
}

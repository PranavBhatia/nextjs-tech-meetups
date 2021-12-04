import EventItem from "./event-item";
import classes from "../../styles/event-list.module.css";

export default function EventList(props) {
  const { items } = props;

  return (
    <ul className={classes.list}>
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

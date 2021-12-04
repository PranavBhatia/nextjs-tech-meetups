import Link from "next/link";
import Image from "next/image";

import classes from "./event-item.module.css";

export default function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "2-digit",
  });

  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <Image src={`/${image}`} alt={title} height="300px" width="300px" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <Link href={exploreLink}>Explore event</Link>
        </div>
      </div>
    </li>
  );
}

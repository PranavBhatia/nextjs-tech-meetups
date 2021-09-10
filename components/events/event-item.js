import Link from "next/link";
import Image from "next/image";

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
    <li>
      <Image src={`/${image}`} alt={title} height="300px" width="300px" />

      <div>
        <h2>{title}</h2>
        <div>
          <time>{humanReadableDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
      </div>

      <div>
        <Link href={exploreLink}>Explore event</Link>
      </div>
    </li>
  );
}

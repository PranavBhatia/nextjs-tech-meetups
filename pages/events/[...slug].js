import { Fragment } from "react";
import { useRouter } from "next/router";

import { getFilteredEvents } from "../../dummy-data";

const FilteredMeetupsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return (
      <p className="center">Invalid Filters. Please adjust your values.</p>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents?.length) {
    return <p>No events found for the chosen filters.</p>
  }

  return (
    <Fragment>
      <h1>Filtered Events</h1>
    </Fragment>
  );
};

export default FilteredMeetupsPage;

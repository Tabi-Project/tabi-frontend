import type { CMSEvent } from "@/lib/cms";
import UpcomingEventsSlider from "@/components/molecules/UpcomingEventsSlider";
import AllEventsGrid from "@/components/organisms/resources/AllEventsGrid";
import EventsLocationBanner from "@/components/organisms/resources/EventsLocationBanner";

interface EventsPanelProps {
  allEvents?: CMSEvent[];
  featuredEvents?: CMSEvent[];
}

export default function EventsPanel({
  allEvents = [],
  featuredEvents = []
}: EventsPanelProps) {
  return (
    <>
      <UpcomingEventsSlider events={featuredEvents} />
      <AllEventsGrid events={allEvents} />
      <EventsLocationBanner />
    </>
  );
}

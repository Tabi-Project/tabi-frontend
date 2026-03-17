import UpcomingEventsSlider from "@/components/molecules/UpcomingEventsSlider";
import AllEventsGrid from "@/components/organisms/AllEventsGrid";
import EventsLocationBanner from "@/components/organisms/EventsLocationBanner";

export default function EventsPanel() {
  return (
    <>
      <UpcomingEventsSlider />
      <AllEventsGrid />
      <EventsLocationBanner />
    </>
  );
}

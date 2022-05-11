import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetuops] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5001/all")
      .then((responce) => {
        return responce.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetuops(meetups);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Mettups Pages</h1>
      <div>
        <MeetupList meetups={loadedMeetups} />
      </div>
    </section>
  );
}
export default AllMeetupsPage;

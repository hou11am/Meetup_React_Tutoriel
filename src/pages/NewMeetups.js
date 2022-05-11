import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";
function NewMeetupsPage() {
  const navigate = useNavigate();
  function addMeetupHandler(meetupData) {
    /* fetch(
      "https://react-meetup-database-5b8dc-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });*/
    fetch("http://localhost:5001/newMeetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => {
      window.alert(error);
    });
    navigate("/", { replace: true });
  }
  return (
    <section>
      <h2>New Meetups add</h2>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupsPage;
/*DatabaseUrl https://react-meetup-database-5b8dc-default-rtdb.firebaseio.com/exmple.json*/

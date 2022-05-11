import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";
function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const adresseInputRef = useRef();
  const descriptionInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const entretTitle = titleInputRef.current.value;
    const entretImage = imageInputRef.current.value;
    const entretAdresse = adresseInputRef.current.value;
    const entretDescription = descriptionInputRef.current.value;
    const meetupData = {
      title: entretTitle,
      image: entretImage,
      adresse: entretAdresse,
      description: entretDescription,
    };
    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title"> Title</label>
          <input type="text" required id="title" ref={titleInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image"> Meetup Image</label>
          <input type="text" required id="image" ref={imageInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="adress"> Adress</label>
          <input type="text" required id="adress" ref={adresseInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description"> Description</label>
          <textarea
            type="text"
            required
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add a Mettup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;

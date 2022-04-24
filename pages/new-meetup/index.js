import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetup() {
  const addMeetup = (object) => {
    console.log(object);
  };
  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetup}></NewMeetupForm>
    </>
  );
}
export default NewMeetup;

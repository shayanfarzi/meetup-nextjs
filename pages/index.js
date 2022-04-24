import MeetupList from "../components/meetups/MeetupList";

function HomePage() {
  const DummyMeetups = [
    {
      id: "m1",
      title: "A First Meetup",
      image:
        "https://www.eligasht.com/Blog/wp-content/uploads/2018/04/swiss-image.jpg",
      address: "Some address 5, 123 some city",
      description: "This is a meetup",
    },
    {
      id: "m2",
      title: "A First Meetup",
      image:
        "https://visanew.com/wp-content/uploads/2021/10/Disadvantages-of-living-in-Switzerland1-750x465.jpg",
      address: "Some address 5, 123 some city",
      description: "This is a meetup",
    },
  ];
  return (
    <>
      <MeetupList meetups={DummyMeetups} />
    </>
  );
}
export default HomePage;

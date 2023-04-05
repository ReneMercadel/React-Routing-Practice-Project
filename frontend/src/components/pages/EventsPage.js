import EventsList from '../EventsList';

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'A dummy event',
    date: '2023-02-22',
    image:
      'https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg',
    description: 'Join this amazing event and connect with fellow developers.',
  },
  {
    id: 'e2',
    title: 'A dummy event',
    date: '2023-02-22',
    image:
      'https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg',
    description: 'Join this amazing event and connect with fellow developers.',
  },
  {
    id: 'e3',
    title: 'A dummy event',
    date: '2023-02-22',
    image:
      'https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg',
    description: 'Join this amazing event and connect with fellow developers.',
  },
];

const EventsPage = () => {
  // const [events, setEvents] = useState([]);
  // useEffect(() => {
  //   const response = async () => {
  //     try {
  //       const events = await fetch('/events');
  //       console.log('events response', events.events);
  //     } catch (error) {}
  //     return events;
  //   };
  //   const eventRes = response();
  //
  //   setEvents(eventRes);
  // }, []);

  return <EventsList events={DUMMY_EVENTS} />;
};

export default EventsPage;

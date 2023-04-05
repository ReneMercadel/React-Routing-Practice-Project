import { Link, useParams } from 'react-router-dom';

const EventDetailPage = () => {
  const params = useParams();
  console.log('params', params);
  return (
    <>
      <h1>EventDetailPage</h1>
      <p>{params.eventId}</p>
      <Link to='..' relative='path'>
        Back
      </Link>
    </>
  );
};

export default EventDetailPage;

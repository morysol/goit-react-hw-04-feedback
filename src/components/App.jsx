import FeedBack from './FeedBack/FeedBack';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* The feedback component */}
      <FeedBack />
    </div>
  );
};

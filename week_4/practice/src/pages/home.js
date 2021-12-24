import React from 'react';

const Home = () => {
  React.useEffect(() => {
    document.title = 'Home From React';
  }, []);
  return (
    <main>
      <h1>Welcome to your home, Stsay Udacious 🤘</h1>
    </main>
  );
};
export default Home;

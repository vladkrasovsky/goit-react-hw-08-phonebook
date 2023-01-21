import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Welcome to Phonebook</title>
      </Helmet>
      <h1>
        Phonebook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          📞
        </span>
      </h1>
    </div>
  );
}

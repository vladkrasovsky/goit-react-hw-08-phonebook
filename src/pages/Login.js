import { Helmet } from 'react-helmet-async';
import LoginForm from 'components/LoginForm';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}

import React, {useEffect} from 'react';
import LoginForm from '../containers/LoginForm';
import { useSelector } from 'react-redux';
import Router from 'next/router';

const Login =() => {
  const { me } = useSelector(state => state.user);

  useEffect(() => {
    if (me) {
      Router.push('/home');
    }
  }, [me && me.id]);

  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default Login;
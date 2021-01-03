import React, {useEffect} from 'react';
import SignupForm from '../containers/SignupForm';
import { useSelector } from 'react-redux';
import Router from 'next/router';

const Signup =() => {
  const { me } = useSelector(state => state.user);

  useEffect(() => {
    if (me) {
      Router.push('/home');
    }
  }, [me && me.id]);

  return (
    <div>
      <SignupForm />
    </div>
  );
}

export default Signup;
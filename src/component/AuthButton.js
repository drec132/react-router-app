import React from 'react';
import { useHistory } from 'react-router-dom';
import { fakeAuth } from '../util/fakeAuth';

export default function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{' '}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push('/home'));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

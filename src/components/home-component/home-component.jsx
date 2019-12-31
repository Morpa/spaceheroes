import React from 'react';

import UsersList from '../user-list/user-list.component';
import CreateUser from '../user-crud/user-create.component';

import { StyledEmoji } from './home.styles';

const Home = () => (
  <div className='App'>
    <h1>
      Spaceheroes
      <span role='img' aria-label='rocket emoji.'>
        🚀
      </span>
    </h1>
    <p>
      Volunteers heading to Mars.
      <StyledEmoji role='img' aria-label='moon emoji for Spacehereos'>
        🌕
      </StyledEmoji>
    </p>
    <UsersList />
    <CreateUser />
  </div>
);

export default Home;

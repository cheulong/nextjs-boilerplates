import { render } from '@testing-library/react';
import { Users as UserContents } from '../contents/Users.content';
import { Normal } from './User.stories';
import React from 'react';

const user = UserContents[0];

describe('User', () => {
  it('renders a user', () => {
    const { getByTestId } = render(<Normal user={user} />);
    const firstName = getByTestId('firstName');
    expect(firstName.textContent).toBe('First Name: Alex');
  });
});

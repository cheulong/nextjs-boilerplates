import { render } from '@testing-library/react';
import { Users as UserContents } from '../contents/Users.content';
import { Normal } from './Users.stories';

const users = UserContents;

describe('Users', () => {
  it('renders users', () => {
    const { getByTestId } = render(<Normal users={users} />);
    const usersId = getByTestId('users');
    expect(usersId.childElementCount).toBe(3);
  });
});

import { render, screen } from '@testing-library/react';
import Async from './Async';
import { expect } from '@jest/globals'; // not required, but helps autocomplete

describe('Async component', () => {
  test('01: renders posts if request succeeds', async () => {
    render(<Async />);

    // get by role would fail if we have more than one item with that specified role
    const liElements = await screen.findAllByRole('listitem');
    // findAllByRole returns a promise, like the fetch method, so must be awaited. It can take 3 arguments, the 3rd configs the awaited time

    expect(liElements).not.toHaveLength(0);
  });
});

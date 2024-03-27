import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals'; // not required, but helps autocomplete
import Async from './Async';

// ultimately, this test creates a dummy fetch function which is configured to return dummy data. This is so we can test our async useEffect function
// without actually sending a request, because this might fail, and we want to avoid sending unnecessary requests.
// this test checks that once a promise is resolved, we receive an array, with at least one object that has an id key

describe('Async component', () => {
  test('01: renders posts if request succeeds', async () => {
    // we set the browser fetch function to our own custom function, as we do not need to test browser functions themselves
    window.fetch = jest.fn(); // jest is a testing object. fn creates a dummy function for us with additional features

    // moveResolvedValueOnce allows us to set a value, this fetch function should resolve to when it's being called
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'first post' }],
    }); // this overwrites the fetch function with the dummy function where we set the values it should return
    // using a mock simulates the data without sending additional requests to the API and overloading the server

    render(<Async />);

    // get by role would fail if we have more than one item with that specified role
    const liElements = await screen.findAllByRole('listitem');
    // findAllByRole returns a promise, like the fetch method, so must be awaited. It can take 3 arguments, the 3rd configs the awaited time

    expect(liElements).not.toHaveLength(0);
  });
});

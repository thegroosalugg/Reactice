import { render, screen } from '@testing-library/react';
import MoonShine from './MoonShine';

// groups together related test cases. Used to create a test suite: collection of test cases that test the behavior of a specific component, module, or feature.
describe('Test Suite', () => {
  // test takes a description as 1st argument and a function as 2nd
  test('This is a test, this is only, a test', () => {
    render(<MoonShine />); // ARRANGE: Set up the necessary preconditions and inputs for the test.

    // ACT: Execute the specific behavior or functionality being tested - Not needed here

    // ASSERT: Verify that the expected outcomes of the behavior being tested have occurred
    const quickTest = screen.getByText('whisky river', { exact: false }); // for greater flexebility use REGEXP: (/insert text/i)
    expect(quickTest).toBeInTheDocument();
  });
});

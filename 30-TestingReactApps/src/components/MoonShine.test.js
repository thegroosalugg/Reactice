import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MoonShine from './MoonShine';

// groups together related test cases. Used to create a test suite: collection of test cases that test the behavior of a specific component, module, or feature.
describe('Test Suite <MoonShine />', () => {
  // test takes a description as 1st argument and a function as 2nd
  test('01: renders "moonshine"', () => {
    render(<MoonShine />); // ARRANGE: Set up the necessary preconditions and inputs for the test.

    // ACT: Execute the specific behavior or functionality being tested - Not needed here

    // ASSERT: Verify that the expected outcomes of the behavior being tested have occurred
    const textElement = screen.getByText('moonshine', { exact: false }); // for greater flexebility use REGEXP: (/insert text/i)
    expect(textElement).toBeInTheDocument();
  });

  test('02: renders "bootlegging", button NOT clicked', () => {
    render(<MoonShine />);
    const textElement = screen.getByText(/bootlegging/i);
    expect(textElement).toBeInTheDocument();
  });

  test('03: renders "prohibition", button IS clicked', () => {
    render(<MoonShine />); // ARRANGE

    // ACT
    const buttonElement = screen.getByRole('button'); // button element is a 'role'
    userEvent.click(buttonElement); // simulate a user clicking on an element

    const textElement = screen.getByText(/prohibition/i); // ASSERT
    expect(textElement).toBeInTheDocument();
  });

  test('04: does not render "bootlegging", button IS clicked', () => {
    render(<MoonShine />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // queryByText returns null if the element is not found, while getByText throws an error
    const textElement = screen.queryByText(/bootlegging/i);
    // expect(textElement).not.toBeInTheDocument();
    expect(textElement).toBeNull();
  });
});

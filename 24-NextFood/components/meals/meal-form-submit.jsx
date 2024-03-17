'use client';

import { useFormStatus } from 'react-dom';

export default function FormButton() {
  const { pending } = useFormStatus(); // is an object with various properties

  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Share Meal'}
    </button>
  );
}

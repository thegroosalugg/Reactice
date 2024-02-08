import { forwardRef } from "react";

const Input = forwardRef(function Input({ textarea, label, ...props }, ref) {
  const classes = "border bg-stone-200 p-2 rounded-lg mb-3";
  const Element = textarea ? 'textarea' : 'input';

  return (
    <p className="flex flex-col">
      <label className="mt-3 mb-1 font-bold">{label}</label>
      <Element className={classes} ref={ref} {...props} />
    </p>
  );
})

export default Input

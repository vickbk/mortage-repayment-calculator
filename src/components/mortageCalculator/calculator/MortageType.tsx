import { useEffect, useRef } from "react";

export const MortageType = ({
  text,
  value,
  defaultChecked,
}: {
  text: string;
  value: string;
  defaultChecked: boolean;
}) => {
  let rest = {};
  if (defaultChecked) {
    rest = { defaultChecked };
  }
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!defaultChecked && inputRef.current)
      inputRef.current.removeAttribute("checked");
  });
  return (
    <label className="labelled-radio flex gap-4 p-4 border rounded-lg font-bold">
      <input
        className="labelled-radio__input"
        type="radio"
        name="type"
        value={value}
        {...rest}
        ref={inputRef}
        required
      />{" "}
      {text}
    </label>
  );
};

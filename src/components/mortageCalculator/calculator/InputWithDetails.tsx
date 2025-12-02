import type { ReactNode } from "react";

export const InputWithDetails = ({
  label,
  name,
  detail,
  toRight = false,
  children,
  step = 1,
  defaultValue = "",
}: Record<"label" | "name" | "detail", string> & {
  toRight?: boolean;
  children?: ReactNode;
  step?: 0.1 | 0.01 | 1;
  defaultValue?: string;
}) => {
  return (
    <label className="detailed grid relative gap-2">
      {label}
      {children || (
        <input
          className={`border detailed__input p-4 rounded-lg focus:outline ${
            toRight ? "pr-20" : "pl-12"
          }`}
          type={"number"}
          name={name}
          placeholder=""
          required
          step={step}
          defaultValue={defaultValue}
        />
      )}
      <span
        className={`detailed__span absolute bottom-[.5px] font-bold slate-100 p-4 ${
          toRight ? "right-[.5px] rounded-r-lg" : "left-[.5px] rounded-l-lg"
        }`}
      >
        {detail}
      </span>
    </label>
  );
};

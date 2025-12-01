export const InputWithDetails = ({
  label,
  name,
  detail,
  toRight = false,
}: Record<"label" | "name" | "detail", string> & { toRight?: boolean }) => {
  return (
    <label className="detailed grid relative gap-2">
      {label}
      <input
        className={`border detailed__input p-4 rounded-lg ${
          toRight ? "pr-20" : "pl-12"
        }`}
        type={"number"}
        name={name}
        placeholder=""
        required
      />
      <span
        className={`detailed__span absolute -z-10 bottom-0 font-bold slate-100 p-4 ${
          toRight ? "right-0 rounded-r-lg" : "left-0 rounded-l-lg"
        }`}
      >
        {detail}
      </span>
    </label>
  );
};

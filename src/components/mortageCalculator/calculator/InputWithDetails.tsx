export const InputWithDetails = ({
  label,
  name,
  detail,
  toRight = false,
}: Record<"label" | "name" | "detail", string> & { toRight?: boolean }) => {
  return (
    <label className="grid relative gap-2">
      {label}
      <input
        className={`border p-4 rounded-lg ${toRight ? "pr-20" : "pl-12"}`}
        type={"number"}
        name={name}
        placeholder=""
      />
      <span
        className={`absolute -z-10 bottom-0 font-bold slate-100 p-4 ${
          toRight ? "right-0" : "left-0"
        }`}
      >
        {detail}
      </span>
    </label>
  );
};

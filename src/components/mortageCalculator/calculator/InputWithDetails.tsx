export const InputWithDetails = ({
  label,
  name,
  detail,
}: Record<"label" | "name" | "detail", string>) => {
  return (
    <label>
      {label}
      <input type={"number"} name={name} placeholder="" />
      <span>{detail}</span>
    </label>
  );
};

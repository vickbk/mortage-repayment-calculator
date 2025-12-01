export const MortageType = ({
  text,
  value,
}: {
  text: string;
  value: string;
}) => {
  return (
    <label className="labelled-radio flex gap-4 p-4 border rounded-lg font-bold">
      <input
        className="labelled-radio__input"
        type="radio"
        name="type"
        value={value}
      />{" "}
      {text}
    </label>
  );
};

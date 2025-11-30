export const MortageType = ({
  text,
  value,
}: {
  text: string;
  value: string;
}) => {
  return (
    <label>
      <input type="radio" name="type" value={value} /> {text}
    </label>
  );
};

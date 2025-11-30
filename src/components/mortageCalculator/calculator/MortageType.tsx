export const MortageType = ({
  text,
  value,
}: {
  text: string;
  value: string;
}) => {
  return (
    <label className="flex gap-4 p-4 border rounded-lg font-bold">
      <input type="radio" name="type" value={value} /> {text}
    </label>
  );
};

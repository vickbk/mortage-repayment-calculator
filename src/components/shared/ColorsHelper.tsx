import { useState } from "react";

export const ColorsHelper = () => {
  const [colors, setColors] = useState("");
  const sassColors = colors
    .split("\n")
    .map((color) => color.replaceAll(/-|hsl|\(|\)|,/g, "").split(":"));
  return (
    <section>
      <label>
        {" "}
        Colors list
        <textarea
          className="border"
          name="colors"
          value={colors}
          onChange={({ target: { value } }) => setColors(value)}
          required
        />
      </label>

      <p>
        {sassColors.map(([name, color]) => (
          <>
            {name.trim().replaceAll(" ", "-").toLowerCase()}:{color}, <br />
          </>
        ))}
      </p>
    </section>
  );
};

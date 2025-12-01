export const currencyFormatter = ({
  lang = "en-US",
  amount,
  currency = "USD",
}: {
  lang?: "en-US" | "de-DE";
  amount: number;
  currency?: "USD" | "EUR";
}) => {
  const formatter = new Intl.NumberFormat(lang, {
    style: "currency",
    currency,
  });
  return formatter.format(amount);
};

export const currencyFormatter = ({
  lang = "en-US",
  amount,
  currency = "USD",
}: {
  lang?: string;
  amount: number;
  currency?: string;
}) => {
  const formatter = new Intl.NumberFormat(lang, {
    style: "currency",
    currency,
  });
  return formatter.format(amount);
};

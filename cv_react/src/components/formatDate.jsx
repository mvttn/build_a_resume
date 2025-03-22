function formatMonthYear(input) {
  const date = new Date(input);
  const options = { month: "long", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

export default formatMonthYear;

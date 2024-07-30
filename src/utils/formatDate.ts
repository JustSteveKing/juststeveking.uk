export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}

export function datetime(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {

  }).format(date);
};
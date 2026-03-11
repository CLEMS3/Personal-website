export function cn(...inputs: any[]) {
  const classes = inputs.flat().filter(Boolean);
  return classes.join(" ");
}

export function monthFormat(month: string): string {
  if (month.startsWith("0")) {
    return month.toString().replace("0", "");
  } else {
    return month;
  }
}

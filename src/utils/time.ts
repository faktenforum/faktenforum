type TimeUnit = "s" | "m" | "h" | "d";

export function timeStringToSeconds(timeStr: string): number {
  const units: Record<TimeUnit, number> = {
    s: 1,
    m: 60,
    h: 3600,
    d: 24 * 3600
  };

  // Use regex to match the number and unit parts
  const regex = /^(\d+)(s|m|h|d)$/;
  const match = timeStr.match(regex);

  if (!match) {
    throw new Error(`Invalid time string format: ${timeStr}`);
  }

  // Extract the value and unit from regex match
  const value = parseInt(match[1], 10);
  const unit = match[2] as TimeUnit;

  if (!isNaN(value) && units[unit]) {
    return value * units[unit];
  } else {
    throw new Error(`Invalid time string forma: ${timeStr}`);
  }
}

type TimeUnit = "s" | "m" | "h" | "d";

export function timeStringToSeconds(timeStr: string): number {
  const units: Record<TimeUnit, number> = {
    s: 1,
    m: 60,
    h: 3600, // corrected from 360 to 3600 for hours
    d: 24 * 3600
  };

  const unit = timeStr.slice(-1) as TimeUnit;
  if (["s", "m", "h", "d"].indexOf(unit) === -1) {
    throw new Error(`Invalid time unit: ${unit}`);
  }
  const value = parseInt(timeStr.slice(0, -1), 10);

  if (!isNaN(value) && units[unit] !== undefined) {
    return value * units[unit];
  }
  throw new Error(`Invalid time string: ${timeStr}`);
}
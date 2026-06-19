export const checkMinimumPercentage = (value: number): number => {
  return Math.trunc(parseFloat(value.toFixed(1)));
};
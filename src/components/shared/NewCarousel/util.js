export const checkMinimumPercentage = (value) => {
  return Math.trunc(parseFloat(value.toFixed(1)))
}
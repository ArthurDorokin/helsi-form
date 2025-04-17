export const isRealDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split('.').map(Number)
  const date = new Date(year, month - 1, day)
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day
}

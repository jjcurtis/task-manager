export default function getTime(date: string) {
  let hour: string = date.slice(11, 13);
  const minute: string = date.slice(14, 16)
  const cycle: string = hour.charAt(0) === '0' ? 'AM' : 'PM'

  if (cycle === 'PM') {
    hour = `${parseInt(hour) - 12}`
  }

  if (hour.charAt(0) === '0') {
    hour = hour.slice(1)
  }

  return `${hour}:${minute} ${cycle}` 
}
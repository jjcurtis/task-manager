export default function getTime(date: string) {
  let hour: string = date.slice(0, 2);
  const minute: string = date.slice(3, 5)
  const cycle: string = hour.charAt(0) === '0' ? 'AM' : 'PM'

  if (cycle === 'PM' && parseInt(hour) > 12) {
    hour = `${parseInt(hour) - 12}`
  }

  if (hour.charAt(0) === '0') {
    hour = hour.slice(1)
  }

  return `${hour}:${minute} ${cycle}` 
}
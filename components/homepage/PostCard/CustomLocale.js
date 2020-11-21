//from https://codepen.io/acusti/project/editor/AVazpg
// https://github.com/hustcc/timeago.js/issues/139#issuecomment-424162015

const SECONDS = 60;
const MINUTES = 60;
const HOURS = 24;
const SECONDS_IN_DAY = HOURS * MINUTES * SECONDS;
export default function Locale(number, index, total_sec) {
  if (index === 2 && total_sec >= 105) {
    return ['2 minutes ago', 'in 2 minutes'];
  }

  if (index === 6 || index === 7) {
    const now = new Date();
    const secondsSinceMidnight =
      now.getSeconds() +
      now.getMinutes() * SECONDS +
      now.getHours() * MINUTES * SECONDS;

    const daysFloored = Math.floor(
      (total_sec - secondsSinceMidnight) / SECONDS_IN_DAY
    );
    const remainder = (total_sec - secondsSinceMidnight) % SECONDS_IN_DAY;
    const days = remainder >= 1 ? daysFloored + 1 : daysFloored;
    const noun = days === 1 ? 'day' : 'days';
    return [`${days} ${noun} ago`, `in ${days} ${noun}`];
  }

  if (index === 8) {
    const days = Math.round(total_sec / SECONDS / MINUTES / HOURS);
    if (days > 8) {
      return days === 13
        ? ['2 weeks ago', 'in 2 weeks']
        : [`${days} days ago`, `in ${days} days`];
    }
  }

  return [
    ['just now', 'right now'],
    ['%s seconds ago', 'in %s seconds'],
    ['1 minute ago', 'in 1 minute'],
    ['%s minutes ago', 'in %s minutes'],
    ['1 hour ago', 'in 1 hour'],
    ['%s hours ago', 'in %s hours'],
    ['1 day ago', 'in 1 day'],
    ['%s days ago', 'in %s days'],
    ['1 week ago', 'in 1 week'],
    ['%s weeks ago', 'in %s weeks'],
    ['1 month ago', 'in 1 month'],
    ['%s months ago', 'in %s months'],
    ['1 year ago', 'in 1 year'],
    ['%s years ago', 'in %s years'],
  ][index];
}

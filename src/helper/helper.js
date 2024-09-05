export function formatTimeAgo(timestamp) {
  const now = new Date();
  const date = new Date(timestamp);
  const diffInSeconds = Math.floor((now - date) / 1000);

  const secondsInMinute = 60;
  const secondsInHour = secondsInMinute * 60;
  const secondsInDay = secondsInHour * 24;
  const secondsInMonth = secondsInDay * 30; // Approximate month length
  const secondsInYear = secondsInDay * 365; // Approximate year length

  let interval, unit;

  if (diffInSeconds < secondsInMinute) {
    return 'just now';
  } else if (diffInSeconds < secondsInHour) {
    interval = Math.floor(diffInSeconds / secondsInMinute);
    unit = interval === 1 ? 'minute ago' : 'minutes ago';
  } else if (diffInSeconds < secondsInDay) {
    interval = Math.floor(diffInSeconds / secondsInHour);
    unit = interval === 1 ? 'hour ago' : 'hours ago';
  } else if (diffInSeconds < secondsInMonth) {
    interval = Math.floor(diffInSeconds / secondsInDay);
    unit = interval === 1 ? 'day ago' : 'days ago';
  } else if (diffInSeconds < secondsInYear) {
    interval = Math.floor(diffInSeconds / secondsInMonth);
    unit = interval === 1 ? 'month ago' : 'months ago';
  } else {
    interval = Math.floor(diffInSeconds / secondsInYear);
    unit = interval === 1 ? 'year ago' : 'years ago';
  }

  return `${interval} ${unit}`;
}

export function formatDate(isoDate) {
  // Create a new Date object from the ISO date string
  const date = new Date(isoDate);

  // Define options for formatting
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  // Format the date using Intl.DateTimeFormat
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return formattedDate;
}

export const colorMap = {
  white: 'bg-white text-black',
  black: 'bg-black text-white',
  green: 'bg-green-400',
  gray: 'bg-gray-400',
  blue: 'bg-blue-400',
  orange: 'bg-orange-400',
  purple: 'bg-purple-400',
  yellow: 'bg-yellow-400',
  red: 'bg-red-400',
  pink: 'bg-pink-400',
};

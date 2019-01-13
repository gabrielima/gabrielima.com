export const formatDate = (date) => {
  const d = new Date(+date);
  const day = getDay(d.getDate());
  const month = getMonth(d.getMonth() + 1);
  const year = d.getFullYear();
  return `${month} ${day}, ${year}`;
};

const getDay = (day) => {
  switch (day) {
    case 1: return day + 'st';
    case 2: return day + 'nd';
    case 3: return day + 'rd';
    default: return day + 'th';
  }
};

const getMonth = (month) => {
  switch (month) {
    case 1: return 'Jan';
    case 2: return 'Feb';
    case 3: return 'Mar';
    case 4: return 'Apr';
    case 5: return 'May';
    case 6: return 'Jun';
    case 7: return 'Jul';
    case 8: return 'Ago';
    case 9: return 'Sep';
    case 10: return 'Oct';
    case 11: return 'Nov';
    case 12: return 'Dec';
  }
};

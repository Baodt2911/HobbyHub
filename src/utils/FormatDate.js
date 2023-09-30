// const FormatDate = time => {
//   const newDate = new Date(time);
//   let date = newDate.getDate();
//   let month = newDate.getMonth();
//   let year = newDate.getFullYear();
//   date = date < 10 ? `0${date}` : date;
//   month = month < 10 ? `0${month}` : month;
//   return `${date}/${month}/${year}`;
// };
const FormatTime = time => {
  const newTime = new Date(time).getTime();
  const currentTime = new Date().getTime();
  let distance = currentTime - newTime;
  let day = Math.floor(distance / (24 * 60 * 60 * 1000));
  let hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
  // console.log('day:', day, 'hour:', hour, 'minutes:', minutes);
  if (day >= 15) {
    const options = {year: '2-digit', month: '2-digit', day: '2-digit'};
    return new Date(time).toLocaleDateString('en-GB', options);
  } else if (hour >= 24) {
    return `${day} days ago`;
  } else if (hour < 24 && hour >= 1) {
    return `${hour} hour ago`;
  } else {
    return `${minutes} minutes ago`;
  }
};
export default FormatTime;

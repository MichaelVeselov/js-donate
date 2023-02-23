import moment from 'moment';

const getDate = (date) => {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
};

export { getDate };

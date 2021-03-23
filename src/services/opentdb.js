import axios from 'axios';

export async function fetchQuizes(params) {
  let data = [];
  try {
    data = await axios.get(`https://opentdb.com/api.php`, { params });
  } catch (e) {
    console.log('openTdb errors', e);
  }
  return data;
};

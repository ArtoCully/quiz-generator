import axios from 'axios';

export async function fetchQuizes(search) {
  let data = [];
  try {
    data = await axios.get(`https://opentdb.com/api.php${search}`);
  } catch (e) {
    console.log('openTdb errors', e);
  }
  return data;
};

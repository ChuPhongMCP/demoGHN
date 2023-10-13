import axios from 'axios';

const axiosGetGHN = axios.create({
  headers: { "Content-Type": "application/json" },
});

export {
  axiosGetGHN
}
import axios from 'axios';

import { BASE_PATH } from '~/shared/constants/api';

const api = axios.create({
  baseURL: BASE_PATH,
});

export default api;

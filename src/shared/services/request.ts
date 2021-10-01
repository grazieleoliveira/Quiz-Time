import api from './api';

export default {
  async get(path?: string, params?: string, id?: string, difficulty?: string) {
    const url = `${path}${params ? `?${params}` : ''}${id ? `${id}` : ''}${
      difficulty ? `${difficulty}` : ''
    }`;

    return api.get(url);
  },
};

// https://opentdb.com/api.php?amount=10&category=10&difficulty=easy

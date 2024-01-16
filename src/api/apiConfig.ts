import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer NA.sIgpDxuwBZ3FvssPwv5E7Mpn9h1DCQWXuS6wwtj_motQDOj1gx3zreJZEB24',
  },
});

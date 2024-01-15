import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.J2cPNyOVTHHNLqGeyk4QbTbKaYWrAFDEUUzBfTdNU54UvePoAB9d54pu4T5e',
  },
});

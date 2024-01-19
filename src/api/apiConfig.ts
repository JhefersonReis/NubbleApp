import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.dGC7fuGGNP1bRTKayfh4Jjwq_0p0asKEjzFDEl2oKODAr3-8igpjmPCSpLpb',
  },
});

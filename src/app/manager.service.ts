import { Injectable } from '@angular/core';

interface Manager {
  id: number;
  name: string;
  class: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  MANAGER: Manager[] = [
    {
      id: 1,
      name: '최성진',
      class: 'ios12',
      email: 'sungjin0864@gmail.com',
      password: 'ultra123',
    },
    {
      id: 2,
      name: '한현진',
      class: 'fds12',
      email: 'forinpea121@gmail.com',
      password: 'hyunjin121',
    },
    {
      id: 3,
      name: '박수빈',
      class: 'wps12',
      email: 'subin1208@gmail.com',
      password: 'subin1208',
    },
  ];
  constructor() {}
}

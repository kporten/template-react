const users: Array<{
  id: string;
  name: string;
}> = [
  {
    id: 'u1',
    name: 'User 1',
  },
  {
    id: 'u2',
    name: 'User 2',
  },
  {
    id: 'u3',
    name: 'User 3',
  },
];

export function getById(id: string) {
  return users.find((user) => user.id === id);
}

export function getList() {
  return users;
}

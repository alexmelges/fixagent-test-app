interface User {
  id: string;
  name: string;
  email: string;
}

interface UserListProps {
  users: User[];
}

export function UserList({ users }: UserListProps) {
  // BUG: users can be undefined when API returns empty response
  const names = users.map(u => u.name);

  return (
    <ul>
      {names.map((name, i) => (
        <li key={i}>{name}</li>
      ))}
    </ul>
  );
}

import { UserList } from "@/components/UserList";

async function fetchUsers() {
  const res = await fetch("/api/users");
  if (!res.ok) return { users: undefined };
  return res.json();
}

export default async function DashboardPage() {
  const { users = [] } = await fetchUsers();

  return <UserList users={data?.users} />;
}

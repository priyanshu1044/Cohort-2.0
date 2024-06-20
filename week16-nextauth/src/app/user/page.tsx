import Appbar from "@/components/Appbar";
import { getServerSession } from "next-auth"

async function getUser() {
  const session = await getServerSession();
  return session;
}

export default async function Home() {
  const session = await getUser();

  return (
    <div>
        <Appbar/>
      USER COM{JSON.stringify(session?.user?.name)}
    </div>
  );
}
import { auth, signIn } from "@/app/src/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  console.log(session);

  return (
    <div>
      <div>
        <a href="/register">
          <div>Dashboard</div>
        </a>
      </div>
      <div>
        {session ? (
          <Link href="/api/auth/signout">signOut</Link>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("google"); 
            }}
          >
            <button type="submit">Sign In with Google</button>
          </form>
        )}
      </div>
    </div>
  );
}

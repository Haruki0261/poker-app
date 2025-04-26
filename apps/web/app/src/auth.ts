import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { type Adapter } from "@auth/core/adapters";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "../../../../database/src/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(prisma) as Adapter,
});

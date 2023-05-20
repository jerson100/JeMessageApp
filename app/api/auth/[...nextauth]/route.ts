import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

// console.log(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    // ...add providers here
  ],
  //   secret: process.env.NEXTAUTH_SECRET as string,
  //   pages: {
  //     signIn: "/auth/login",
  //   },
  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
  // ...add additional config here
});

export { handler as GET, handler as POST };

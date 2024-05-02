import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        user: { label: "User", type: "text", placeholder: "write user" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Conection to backend flask
        const API_URL = process.env.BACKEND;
        const response = await fetch(`${API_URL}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user: credentials.user,
            password: credentials.password,
          }),
        });
        const user = await response.json();
        if (user.error) throw user;
        return user;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    }
  },
  pages: {
    signIn: "/",
    
  }
});

export { handler as GET, handler as POST };

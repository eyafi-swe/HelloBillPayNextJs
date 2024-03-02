import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        mobile: { label: "Phone", type: "text", placeholder: "Phone" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        let body = {
          mobile: credentials.mobile,
          password: credentials.password,
        };

        let user;
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        user = await res.json();

        console.log(user);
        if (user) {
          if (user.success) {
            if (user.data.access_token) {
              let userObj = {};
              userObj['token'] = user.data.access_token;
              userObj['name'] = JSON.stringify({ fullName: user.data.userData.first_name + " " + user.data.userData.last_name, phone: user.data.userData.mobile, dob: user.data.userData.date_of_birth, add: user.data.userData.residensial_address, loginType: user.data.userData.login_type });
              userObj['email'] = user.data.userData.email
              return userObj;
            }
          } else {
            let message = user.message;
            console.log(message);
            throw new Error(message);
          }
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),

  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
  },
  callbacks: {
    async signIn({ account, profile, user }) {
      if (account.provider === "google") {
        // console.log({ profile });
        let payload = {
          first_name: profile.given_name,
          last_name: profile.family_name,
          email: profile.email,
          provider: account.provider,
        }
        // console.log({ payload });
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/social-login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        let userResponse = await res.json();
        // console.log({ userResponse });
        if (userResponse.success) {
          user.token = userResponse.data.access_token;
          user.name = JSON.stringify({ fullName: userResponse.data.userData.first_name + " " + userResponse.data.userData.last_name, phone: userResponse.data.userData.mobile, dob: userResponse.data.userData.date_of_birth, add: userResponse.data.userData.residensial_address, loginType: userResponse.data.userData.login_type })
          user.email = userResponse.data.userData.email
          return true;
        } else {
          return false;
        }
      }
      return true
    },
    async session({ session, token }) {
      // console.log({ session, token });
      if (token?.update) {
        session.user.name = token.name;
        session.user.email = token.email;
      }
      session.accessToken = token.accessToken;
      console.log({ session });
      return session
    },
    async jwt({ token, user, account, profile, isNewUser, trigger, session }) {
      console.log({ token, user, account, profile, isNewUser });
      if (trigger === 'update') {
        // console.log({ session });
        return { ...token, ...session.user, update: true }
      }
      if (user) {
        token.accessToken = user.token;
      }
      return token
    }
  },

};

const handler = NextAuth(options);
export { handler as GET, handler as POST }

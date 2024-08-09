import OtpUserModel from '@/model/otpUserModel';
import adminModel from '@/model/usermodel';
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  callbacks: {
    async jwt({ token, user }) {
        if (user) {
            token.user = {
                email: user.email,
                phoneNumber:user.phoneNumber,
                role: user.role  
            };
        }
        return token;
    },
    async session({ session, token }) {
        session.user = {
          phoneNumber:user.phoneNumber,
            email: token.user.email,
            role: token.user.role,
        };
        return session;
    },
},
  providers: [
    CredentialsProvider({
      name: 'admin-login',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'enter your email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'enter your password',
        },
      },
      async authorize(credentials) {
        const user = await adminModel.findOne({email: credentials?.email })

        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
    CredentialsProvider({
      name: 'user-login',
      credentials: {
        phoneNumber: {
          label: 'phoneNumber',
          type: 'text',
          placeholder: 'enter your phoneNumber',
        },
         
      },
      async authorize(credentials) {
        const user = OtpUserModel.findOne({phoneNumber: credentials?.phoneNumber })

        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
}

import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
                username: { label: "Username", type: "text" , placeholder: "Username"},
                password: { label: "Password", type: "password" , placeholder: "Password"}
            },
            async authorize(credentials:any) {
                console.log(credentials);
            
                return { id: '1', name: 'Priyanshu Patel', email: 'priyanshu@gmail.com' }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }
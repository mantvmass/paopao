import { AuthOptions, DefaultSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/prisma";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            username: string;
        } & DefaultSession["user"]
    }

    interface User {
        id: string;
        username: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        username: string
    }
}

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "username", type: "text" },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials) {

                const data = await prisma.user.findUnique({
                    where: {
                        username: credentials?.username,
                    },
                });

                if (!data) {
                    throw new Error("ไม่พบผู้ใช้นี้ในระบบ");
                }

                const match = await bcrypt.compare(credentials!.password, data.password);
                if (!match) {
                    throw new Error("รหัสผ่านไม่ถูกต้อง");
                }

                return {
                    id: data.id,
                    username: data.username
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.username = user.username;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = {
                ...session.user,
                id: token.id as string,
                username: token.username as string,
            };
            return session;
        }
    },
    pages: {
        signOut: "/"
    },
};

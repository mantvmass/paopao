import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";
import { redirect } from "next/navigation";

export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const session = await getServerSession(authOptions);

    if (session) return redirect("/");

    return children;
}

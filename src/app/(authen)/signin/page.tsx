"use client"

import { Button, Card, CardBody, Form, Input } from "@heroui/react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Client() {

    const router = useRouter();

    const handleSubmit = async (formData: FormData) => {

        const username = formData.get("username") as string; // Access form fields
        const password = formData.get("password") as string;

        const response = await signIn("credentials", {
            redirect: false,
            username: username,
            password: password,
        });

        if (response?.error) {
            toast.error(response?.error)
        } else {
            toast.success("สำเร็จ");
            router.refresh();
        }
    }

    return (
        <div className="relative w-screen h-screen flex items-center justify-center">
            <Card className="bg-opacity-90 p-4 max-w-sm w-full" radius="sm">
                <CardBody>
                    <h1 className="text-2xl font-bold text-center">PAOPAO</h1>
                    <Form
                        className="mt-6 gap-4"
                        validationBehavior="native"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            handleSubmit(new FormData(e.currentTarget));
                        }}
                    >
                        <Input
                            isRequired
                            errorMessage="กรุณากรอกชื่อผู้ใช้ที่ถูกต้อง"
                            label="ชื่อผู้ใช้"
                            labelPlacement="outside"
                            name="username"
                            placeholder="กรอกชื่อผู้ใช้ของคุณ"
                            type="text"
                            radius="sm"
                        />
                        <Input
                            isRequired
                            errorMessage="กรุณากรอกรหัสผ่าน"
                            label="รหัสผ่าน"
                            labelPlacement="outside"
                            name="password"
                            placeholder="กรอกรหัสผ่านของคุณ"
                            type="password"
                            radius="sm"
                        />
                        <Button type="submit" color="primary" radius="sm" className="w-full">
                            เข้าสู่ระบบ
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
}
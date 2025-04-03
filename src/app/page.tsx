"use client";

import { Button, Card, Image } from "@heroui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
    FaChartLine,
    FaGithub,
    FaMoneyCheckAlt,
    FaPiggyBank,
    FaPlay,
} from "react-icons/fa";

export default function Page() {

    // const { status } = useSession();
    const router = useRouter();

    // useEffect(() => {
    //     if (status === "unauthenticated") router.replace("/signin");
    // }, [status]);

    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-6 md:p-12">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8">

                <div className="md:w-1/2 text-center md:text-left">

                    <span className="inline-block bg-blue-900 text-white text-sm font-medium px-4 py-1.5 rounded mb-4 shadow-md">
                        ระบบบันทึกและวางแผนการเงิน
                    </span>

                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
                        บริหารการเงิน <br />
                        ด้วย <span className="text-blue-500">PAOPAO Tracker</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-md mx-auto md:mx-0 leading-relaxed">
                        <span className="text-blue-400">PAOPAO</span>{" "}
                        ช่วยคุณจัดการรายรับ-รายจ่ายและวางแผนการเงินด้วย AI อัจฉริยะ
                    </p>

                    <div className="space-y-4 mb-8 max-w-md mx-auto md:mx-0">

                        <div className="flex items-start gap-3">
                            <FaMoneyCheckAlt className="text-blue-500 text-2xl mt-1" />
                            <div>
                                <p className="text-base font-semibold text-white">
                                    วางแผนการใช้หนี้
                                </p>
                                <p className="text-sm text-gray-400">
                                    วิเคราะห์ดอกเบี้ย, ยอดผ่อนต่อเดือน และรายรับ-รายจ่าย
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <FaChartLine className="text-blue-500 text-2xl mt-1" />
                            <div>
                                <p className="text-base font-semibold text-white">
                                    วางแผนการลงทุน
                                </p>
                                <p className="text-sm text-gray-400">
                                    แนะนำแนวทางการลงทุนจากข้อมูลการเงิน
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <FaPiggyBank className="text-blue-500 text-2xl mt-1" />
                            <div>
                                <p className="text-base font-semibold text-white">
                                    วางแผนการซื้อของ
                                </p>
                                <p className="text-sm text-gray-400">
                                    จัดลำดับความสำคัญตามงบประมาณ
                                </p>
                            </div>
                        </div>

                        <p className="text-sm italic text-gray-400">
                            * โครงการนี้เป็น{" "}
                            <strong className="text-blue-400">Open Source</strong>{" "}
                            ดูโค้ดได้ที่ GitHub
                        </p>

                    </div>

                    <div className="flex justify-center md:justify-start gap-4">
                        <Button
                            onPress={ () => router.push("/signin") }
                            size="lg"
                            startContent={<FaPlay className="text-sm" />}
                            radius="sm"
                            color="primary"
                            className="text-white text-lg font-semibold"
                        >
                            เริ่มใช้งาน
                        </Button>
                        <Button
                            onPress={() => window.open("https://github.com/mantvmass/paopao", "_blank")}
                            size="lg"
                            startContent={<FaGithub className="text-lg" />}
                            radius="sm"
                            variant="bordered"
                        >
                            GitHub
                        </Button>
                    </div>
                </div>

                <div className="md:w-1/2 mt-8 md:mt-0">
                    <div className="relative w-full h-64 md:h-[450px] overflow-hidden">
                        <Image
                            src="/undraw_financial-data_r0vs.svg"
                            alt="PAOPAO Tracker Preview"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
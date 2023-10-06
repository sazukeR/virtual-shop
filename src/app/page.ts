"use client"


import { useRouter } from "next/navigation";

export default function ShopPage() {
 const router = useRouter();
 router.push("/shop");
}

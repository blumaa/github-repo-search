"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <div>
      <Link href="/">back to search</Link>
      {/* <button type="button" onClick={() => router.back()}> */}
      {/*   go back */}
      {/* </button> */}
      <div>{children}</div>
    </div>
  );
}

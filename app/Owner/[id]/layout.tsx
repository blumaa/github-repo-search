"use client";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-4 pl-4">
      <Link href="/">
        <ArrowLeftIcon className="h-8 w-8 hover:scale-125 transition-all" />
      </Link>
      <div>{children}</div>
    </div>
  );
}

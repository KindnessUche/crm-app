"use client";

import { useSearchParams } from "next/navigation";
import ModalPage from "./ModalPage";
import Link from "next/link";

export default function Modal() {
  const searchParams = useSearchParams();
  const show = searchParams.get("show");
  return (
    <>
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-auto flex items-center">
        {show && <ModalPage />}
      </div>
      {show && (
        <Link
          className="absolute bg-transparent min-h-screen left-0 top-0 w-screen z-10"
          href="/sales/leads"
        ></Link>
      )}
    </>
  );
}

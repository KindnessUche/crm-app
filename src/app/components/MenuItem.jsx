import Link from "next/link";

export default function MenuItem({ title = "", address = "./", Icon, path }) {
  return (
    <div
      className={`p-2 px-1.5 text-slate-600 hover:bg-white ${
        path === address ? "bg-white" : ""
      }`}
    >
      <div
        className={`absolute left-1 w-[3] h-4 mt-0.5 bg-blue-700 py-2 rounded ${
          path === address ? "" : "hidden"
        }`}
      ></div>
      <Link href={address} className="flex items-center gap-2.5 pl-1">
        <Icon className="text-md" />
        <p className="hidden sm:inline text-sm tracking-normal">{title}</p>
      </Link>
    </div>
  );
}

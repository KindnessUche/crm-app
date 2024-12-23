import Link from "next/link";

export default function IconCards({
  title = "",
  address = "/sales/leads",
  Icon,
  border,
}) {
  return (
    <div className={`p-1 text-slate-600 ${border ? "border rounded-md" : ""}`}>
      <Link
        href={address}
        replace
        className=" flex items-center gap-1 px-1 py-[1px]"
      >
        <Icon className="text-lg" />
        <p className="hidden md:inline text-xs tracking-normal">{title}</p>
      </Link>
    </div>
  );
}

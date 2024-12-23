import Image from "next/image";

export default function Tag({ title, base, img }) {
  return (
    <div className="bg-white flex gap-2 p-2 min-w-44 max-w-40 lg:w-auto rounded-xl overflow-hidden items-center">
      <Image src={img} width={40} height={40} alt="icon" />
      <div className="w-full">
        <p className="text-gray-700">{title}</p>
        <p className="bg-clip-text mt-auto bg-gradient-to-r from-blue-900 to-fuchsia-500 text-transparent font-bold text-base">
          {base}
        </p>
      </div>
    </div>
  );
}

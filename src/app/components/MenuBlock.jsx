import MenuItem from "./MenuItem";

export default function MenuBlock({ header, data, path, open }) {
  return (
    <div>
      <div className="hidden md:inline-block p-2 px-3">
        {open && <p>{header}</p>}
      </div>
      {data.map((item) => (
        <MenuItem
          key={item.id}
          title={open && item.title}
          Icon={item.icon}
          address={item.address}
          path={path}
          open={open}
        />
      ))}
    </div>
  );
}

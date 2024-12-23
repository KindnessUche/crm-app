import MenuItem from "./MenuItem";

export default function MenuBlock({ header, data, path }) {
  return (
    <div>
      <div className="p-2 px-3">
        <p>{header}</p>
      </div>
      {data.map((item) => (
        <MenuItem
          key={item.id}
          title={item.title}
          Icon={item.icon}
          address={item.address}
          path={path}
        />
      ))}
    </div>
  );
}

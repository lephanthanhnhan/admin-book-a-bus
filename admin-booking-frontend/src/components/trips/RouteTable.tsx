import RouteTableRow from "./RouteTableRow";

interface RouteTableProps {
  onViewDetails: (routeId: string | number) => void;
}

export default function RouteTable({ onViewDetails }: RouteTableProps) {
  const routes = [
    {
      id: 1,
      name: "HN – SGH",
      from: "Hà Nội",
      to: "TP Hồ Chí Minh",
      stops: 3,
      time: "15h 30m",
    },
    {
      id: 2,
      name: "HN – DN",
      from: "Hà Nội",
      to: "Đà Nẵng",
      stops: 5,
      time: "6h 45m",
    },
    {
      id: 3,
      name: "HCM – CT",
      from: "TP Hồ Chí Minh",
      to: "Cần Thơ",
      stops: 4,
      time: "4h 20m",
    },
    {
      id: 4,
      name: "DN – HP",
      from: "Đà Nẵng",
      to: "Hải Phòng",
      stops: 6,
      time: "10h 15m",
    },
  ];

  return (
    <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-left">
          <tr className="border-b">
            <th className="p-3 w-[12%]">Tên Tuyến </th>
            <th className="p-3 w-[20%]">Thành phố khởi hành</th>
            <th className="p-3 w-[20%]">Thành phố đến</th>
            <th className="p-3 w-[15%] text-center">Số lượng điểm dừng</th>
            <th className="p-3 w-[15%] text-center">Thời gian ước tính</th>
            <th className="p-3 w-[15%] text-center">Hành động</th>
          </tr>
        </thead>

        <tbody>
          {routes.map((item, i) => (
            <RouteTableRow key={i} data={item} onViewDetails={onViewDetails} />
          ))}
        </tbody>
      </table>

      <div className="text-sm text-gray-500 p-3">
        Hiển thị 1–{routes.length}/{routes.length} tuyến đường
      </div>
    </div>
  );
}

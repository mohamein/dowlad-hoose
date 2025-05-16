import { useState } from "react";
import { Input } from "../../components/ui/input";
import ReceiptTable from "./tables/ReceiptTable";

const SearchPage = () => {
  const [inputValue, setInputValue] = useState({
    receiptNumber: "",
    telephone: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  };
  const dummyData = [
    {
      id: "1",
      place: "Mogadishu",
      telephone: "0612345678",
      receiptCode: "RC-001",
      receiptNumber: "1001",
      date: "2025-05-10",
      cabbirka: "50x70",
      dhisan: "Yes",
      taxRef: "TR-001",
      receivedFrom: "Ali Mohamed",
      totalAmount: "150.00",
      amountInWords: "One Hundred Fifty Dollars",
    },
    {
      id: "2",
      place: "Hargeisa",
      telephone: "0623456789",
      receiptCode: "RC-002",
      receiptNumber: "1002",
      date: "2025-05-11",
      cabbirka: "40x60",
      dhisan: "No",
      taxRef: "TR-002",
      receivedFrom: "Amina Yusuf",
      totalAmount: "200.00",
      amountInWords: "Two Hundred Dollars",
    },
    {
      id: "3",
      place: "Garowe",
      telephone: "0634567890",
      receiptCode: "RC-003",
      receiptNumber: "1003",
      date: "2025-05-12",
      cabbirka: "60x80",
      dhisan: "Yes",
      taxRef: "TR-003",
      receivedFrom: "Hassan Ali",
      totalAmount: "300.00",
      amountInWords: "Three Hundred Dollars",
    },
    {
      id: "4",
      place: "Kismayo",
      telephone: "0645678901",
      receiptCode: "RC-004",
      receiptNumber: "1004",
      date: "2025-05-13",
      cabbirka: "30x50",
      dhisan: "No",
      taxRef: "TR-004",
      receivedFrom: "Layla Ahmed",
      totalAmount: "120.00",
      amountInWords: "One Hundred Twenty Dollars",
    },
    {
      id: "5",
      place: "Baidoa",
      telephone: "0656789012",
      receiptCode: "RC-005",
      receiptNumber: "1005",
      date: "2025-05-14",
      cabbirka: "45x65",
      dhisan: "Yes",
      taxRef: "TR-005",
      receivedFrom: "Omar Farah",
      totalAmount: "250.00",
      amountInWords: "Two Hundred Fifty Dollars",
    },
    {
      id: "6",
      place: "Bosaso",
      telephone: "0667890123",
      receiptCode: "RC-006",
      receiptNumber: "1006",
      date: "2025-05-15",
      cabbirka: "35x55",
      dhisan: "Yes",
      taxRef: "TR-006",
      receivedFrom: "Zahra Noor",
      totalAmount: "180.00",
      amountInWords: "One Hundred Eighty Dollars",
    },
    {
      id: "7",
      place: "Beledweyne",
      telephone: "0678901234",
      receiptCode: "RC-007",
      receiptNumber: "1007",
      date: "2025-05-16",
      cabbirka: "55x75",
      dhisan: "No",
      taxRef: "TR-007",
      receivedFrom: "Abdi Ismail",
      totalAmount: "170.00",
      amountInWords: "One Hundred Seventy Dollars",
    },
    {
      id: "8",
      place: "Dhusamareb",
      telephone: "0689012345",
      receiptCode: "RC-008",
      receiptNumber: "1008",
      date: "2025-05-17",
      cabbirka: "70x90",
      dhisan: "Yes",
      taxRef: "TR-008",
      receivedFrom: "Fartun Abdirahman",
      totalAmount: "400.00",
      amountInWords: "Four Hundred Dollars",
    },
    {
      id: "9",
      place: "Jowhar",
      telephone: "0690123456",
      receiptCode: "RC-009",
      receiptNumber: "1009",
      date: "2025-05-18",
      cabbirka: "65x85",
      dhisan: "No",
      taxRef: "TR-009",
      receivedFrom: "Yasin Mahad",
      totalAmount: "350.00",
      amountInWords: "Three Hundred Fifty Dollars",
    },
    {
      id: "10",
      place: "Afgooye",
      telephone: "0601234567",
      receiptCode: "RC-010",
      receiptNumber: "1010",
      date: "2025-05-19",
      cabbirka: "75x95",
      dhisan: "Yes",
      taxRef: "TR-010",
      receivedFrom: "Hodan Barre",
      totalAmount: "500.00",
      amountInWords: "Five Hundred Dollars",
    },
  ];

  const filterData = (
    data: Array<{
      receiptNumber: string;
      telephone: string;
    }>,
    filters: { receiptNumber?: string; telephone?: string }
  ) => {
    return data.filter((item) => {
      const matchReceipt = filters.receiptNumber
        ? item.receiptNumber.includes(filters.receiptNumber)
        : true;
      const matchTelephone = filters.telephone
        ? item.telephone.includes(filters.telephone)
        : true;
      return matchReceipt && matchTelephone;
    });
  };

  const filtered = filterData(dummyData, {
    receiptNumber: inputValue.receiptNumber, // Try changing this
    telephone: inputValue.telephone, // Or leave it empty for no filter
  });
  return (
    <div className="min-h-screen mt-8">
      <div className="flex flex-col gap-2 mb-4">
        <h1 className="text-2xl font-bold">Baadhis Xog</h1>
        <p className="text-gray-600">
          Halkan waxad ka baadhi karta dhamman liiska cashuuraha.
        </p>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <Input
          placeholder="Search by receipt number"
          className="border border-green-500
           text-gray-700  focus:border-green-700 outline-none bg-white"
          name="receiptNumber"
          value={inputValue.receiptNumber}
          onChange={handleInputChange}
        />

        <Input
          placeholder="Search by phone"
          className="border border-green-500
           text-gray-700  focus:border-green-700 outline-none bg-white"
          name="telephone"
          value={inputValue.telephone}
          onChange={handleInputChange}
        />
      </div>

      <ReceiptTable data={filtered} />
    </div>
  );
};

export default SearchPage;

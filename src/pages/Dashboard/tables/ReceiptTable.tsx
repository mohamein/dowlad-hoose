/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  // TableBody,
  // TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
// interface ReceiptTableProps {
//   data: any[]; // Replace 'any' with the actual type of your data
// }

const ReceiptTable = () => {
  const Heads = {
    id: "ID",
    place: "Place",
    telephone: "Telephone",
    receiptCode: "Receipt Code",
    receiptNumber: "Receipt Number",
    date: "Date",
    cabbirka: "Cabbirka",
    dhisan: "Dhisan",
    taxRef: "Tax Ref",
    receivedFrom: "Received From",
    totalAmount: "Total Amount",
    amountInWords: "Amount In Words",
  };
  return (
    <Table className="w-full text-sm text-left text-gray-700 dark:text-gray-400">
      <TableHeader className="bg-green-50 dark:bg-gray-700">
        <TableRow className="text-xs text-gray-700 uppercase dark:text-gray-400">
          {Object.entries(Heads).map(([key, value]) => (
            <TableHead key={key}>{value}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      {/* <TableBody className="bg-white dark:bg-gray-800">
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>
              <span className="text-sm text-gray-500">{item.id}</span>
            </TableCell>
            <TableCell>{item.place}</TableCell>
            <TableCell>{item.telephone}</TableCell>
            <TableCell>{item.receipt_code}</TableCell>
            <TableCell>{item.receipt_number}</TableCell>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.cabbirka}</TableCell>
            <TableCell>{item.dhisan}</TableCell>
            <TableCell>{item.tax_ref}</TableCell>
            <TableCell>{item.received_from}</TableCell>
            <TableCell>{item.total_amount}</TableCell>
            <TableCell>{item.amount_in_words}</TableCell>
          </TableRow>
        ))}
      </TableBody> */}
    </Table>
  );
};

export default ReceiptTable;

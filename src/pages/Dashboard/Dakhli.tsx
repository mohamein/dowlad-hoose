import IncomeTable from "./tables/IncomeTable";

const IncomePage = () => {
  return (
    <div className="px-4 mt-10 h-screen">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl text-gray-700 uppercase">Liiska Dakhliga.</h2>
        <IncomeTable />
      </div>
    </div>
  );
};

export default IncomePage;

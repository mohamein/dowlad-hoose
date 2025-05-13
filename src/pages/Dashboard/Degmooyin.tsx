import DistrictTable from "./tables/DistrictTable";

const DistrictsPage = () => {
  return (
    <div className="px-4 mt-10 h-screen">
      <div className="flex flex-col gap-4">
        <h2 className="text-gray-700 text-xl uppercase">
          Liiska Degmooyinka oo dhan.
        </h2>
        <DistrictTable />
      </div>
    </div>
  );
};

export default DistrictsPage;

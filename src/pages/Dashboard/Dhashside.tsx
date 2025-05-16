import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";

// import { links } from '../components/ui/Yumm';

import { links } from "./components/ui/Yumm";
import { useStateContext } from "./components/ui/ContextProvider";
// import { AppDispatch, RootState } from '@/Redux/Store';
// import { getOneCompanayFN } from '@/Redux/Slice/GetOneCompanaySlice';

const DhashSide = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useStateContext();
  //   const dispatch = useDispatch<AppDispatch>();
  //   const GetOneCompanayState = useSelector((state: RootState) => state.GetOneCompanay);

  //   useEffect(() => {
  //     dispatch(getOneCompanayFN());
  //   }, [dispatch]);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    document.body.classList.toggle("DarkSide", theme === "dark");
  }, []);

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize! <= 1020) {
      setActiveMenu(false);
    }
  };

  const activeLink = `flex items-center rounded-xl  gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2 bg-gradient-to-r from-[#1a7757] to-[#035d48] via-[#1a7757] bg-[length:100%_100%] shadow-[0_4px_23px_0_rgba(96,91,255,0.5)] `;
  const normalLink =
    "flex items-center rounded-xl gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-white hover:bg-light-gray m-2";
  return (
    <div
      className={`bg-white w-full h-screen overflow-y-auto ${
        localStorage.getItem("theme") === "dark" ? "DarkSide" : ""
      }`}
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center p-4">
            <Link
              to="/Dashboard/Home"
              onClick={handleCloseSideBar}
              className="flex items-center gap-3 text-[20px] font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware />
              {/* <span>{GetOneCompanayState.data.company_name} </span>  */}
            </Link>
            <button
              type="button"
              onClick={() => setActiveMenu(!activeMenu)}
              style={{ color: currentColor }}
              className="text-xl rounded-full p-3 hover:bg-light-gray md:hidden"
            >
              <MdOutlineCancel />
            </button>
          </div>

          <div className="mt-10 mb-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/Dashboard/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default DhashSide;

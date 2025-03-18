import { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import Input from "./Input";
export default function Education() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="mx-10 my-5 block w-full max-w-sm min-w-[475px] justify-evenly rounded-lg border border-gray-200 bg-white px-6 shadow-sm">
      <button
        className={`flex h-[50px] w-full items-center justify-between transition-all duration-300 ease-in-out ${collapsed ? "rounded-xl" : "rounded-t-xl"}`}
        onClick={() => setCollapsed(!collapsed)}
      >
        <div className="flex items-center justify-center space-x-2">
          <GiGraduateCap />
          <h3 className="font-semibold">Education</h3>
        </div>
        <MdArrowBackIosNew
          className={`text-sm transition-transform duration-300 ${collapsed ? "rotate-90" : "-rotate-90"}`}
        />
      </button>
      <div
        className={`flex w-full items-center justify-center rounded-b-xl transition-all duration-300 ease-in-out ${collapsed ? "h-0" : "h-[75px]"} m-0`}
      >
        {!collapsed && (
          <button className="rounded-full border border-slate-300 px-5 py-2 text-center text-sm text-slate-600 shadow-sm transition-all hover:border-slate-800 hover:bg-slate-800 hover:text-white hover:shadow-lg focus:border-slate-800 focus:bg-slate-800 focus:text-white active:border-slate-800 active:bg-slate-800 active:text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            + Education
          </button>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";
import LogFunctionGLobalData from "./LogFunctionGlobalData";
import LogFunctionSpecificData from "./LogFunctionSpecificData";

export default function LogFunctionPage() {
    const [selectedData, setSelectedData] = useState("global");
    return (
        <div className="w-screen flex flex-col items-center">
            <select
                onChange={(e) => {
                    setSelectedData(e.target.value);
                }}
                className="bg-light text-2xl p-5 w-auto m-3 self-start"
            >
                <option value="global">List functions</option>
                <option value="user">List specific function info</option>
            </select>
            {selectedData === "global" && <LogFunctionGLobalData />}
            {selectedData === "user" && <LogFunctionSpecificData />}
        </div>
    );
}

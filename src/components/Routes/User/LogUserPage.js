import { useState } from "react";
import LogUserGlobalData from "./LogUserGlobalData";
import LogUserSpecificData from "./LogUserSpecificData";

export default function LogUserPage() {
    const [selectedData, setSelectedData] = useState("global");
    return (
        <div className="w-screen flex flex-col items-center">
            <select
                onChange={(e) => {
                    setSelectedData(e.target.value);
                }}
                className="bg-light text-2xl p-5 w-auto m-3 self-start"
            >
                <option value="global">List users</option>
                <option value="user">List specific user info</option>
            </select>
            {selectedData === "global" && <LogUserGlobalData />}
            {selectedData === "user" && <LogUserSpecificData />}
        </div>
    );
}

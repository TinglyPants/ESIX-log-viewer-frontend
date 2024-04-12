import { useState } from "react";
import LogUserGlobalData from "./LogUserGlobalData";
import LogUserSpecificData from "./LogUserSpecificData";

export default function LogUserPage() {
    // Be able to either:
    // - List all users
    // - Get info for specific user - both all time and specific date
    const [selectedData, setSelectedData] = useState("global");
    return (
        <div className="flex flex-col">
            <select
                onChange={(e) => {
                    setSelectedData(e.target.value);
                }}
                className="bg-light text-2xl m-3 p-5 w-auto"
            >
                <option value="global">List users</option>
                <option value="user">List specific user info</option>
            </select>
            {selectedData === "global" && <LogUserGlobalData />}
            {selectedData === "user" && <LogUserSpecificData />}
        </div>
    );
}

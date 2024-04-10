import { useState } from "react";
import LogHistoryViewer from "./LogHistoryViewer";

export default function LogHistoryPage() {
    // Todo: Get it to generate the dates of the last x (1-10) days. Then get it to contact the API, handling missing stuff properly. Then be able to view logs of a specific date if need be.
    const [historyDepth, setHistoryDepth] = useState(1);
    const dateArray = [];

    for (let i = 0; i < historyDepth; i++) {
        let tempDate = new Date();
        tempDate.setDate(tempDate.getDate() - i);
        let formattedDate =
            tempDate.getDate() +
            "-" +
            (tempDate.getMonth() + 1).toString() +
            "-" +
            tempDate.getFullYear();
        dateArray.push(formattedDate);
    }

    console.log(dateArray);

    return (
        <div className="flex flex-col">
            <input
                type="number"
                min="1"
                max="10"
                onChange={(e) => setHistoryDepth(e.target.value)}
                className="bg-light text-2xl m-3 p-5 w-full"
                placeholder="How many days back?"
            />
            {dateArray.map((date) => {
                return <LogHistoryViewer date={date} />;
            })}
        </div>
    );
}

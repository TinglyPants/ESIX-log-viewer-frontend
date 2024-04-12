import { useState } from "react";
import LogHistoryViewer from "./LogHistoryViewer";

export default function LogHistoryPage() {
    const [historyDepth, setHistoryDepth] = useState(1);
    const [customDate, setCustomDate] = useState("");
    let dateArray = [];

    if (customDate === "") {
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
    } else {
        dateArray = [customDate];
    }

    console.log(customDate);

    return (
        <div className="flex flex-col">
            <input
                type="number"
                min="1"
                max="10"
                onChange={(e) => setHistoryDepth(e.target.value)}
                className="bg-light text-2xl m-3 p-5 w-auto"
                placeholder="How many days back?"
            />
            <input
                type="text"
                onChange={(e) => setCustomDate(e.target.value)}
                className="bg-light text-2xl m-3 p-5 w-auto"
                placeholder="Any specific date?"
            />
            {dateArray.map((date) => {
                return <LogHistoryViewer date={date} />;
            })}
        </div>
    );
}

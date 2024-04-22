import { useEffect, useState } from "react";
import axios from "axios";
import LogHistoryElement from "./LogHistoryElement";

export default function LogHistoryViewer({ date }) {
    const [logArray, setLogArray] = useState([]);
    const debounceDelayMS = 500;

    useEffect(() => {
        const debounce = setTimeout(() => {
            axios
                .get("http://api.esix.blenderboard.com/history/" + date)
                .then((response) => {
                    let tempLogArray = [];
                    let lines = response.data.split("\n").slice(0, -1);
                    for (let line of lines) {
                        const usernameL = line.split(" ")[0];
                        const actionL = line.split(" ")[2].slice(0, -1);
                        const timeL = line.split(" ")[4];
                        console.log(usernameL);
                        console.log(actionL);
                        console.log(timeL);

                        tempLogArray.push({
                            username: usernameL,
                            action: actionL,
                            time: timeL,
                        });
                    }
                    setLogArray(tempLogArray);
                })
                .catch((err) => {
                    setLogArray([
                        {
                            username: "Hmmm. Nothing for today?",
                            action: "",
                            time: "",
                        },
                    ]);
                });
        }, debounceDelayMS);
        return () => {
            clearTimeout(debounce);
        };
    }, [date]);
    return (
        <div className="w-auto bg-light flex flex-col py-[0.5rem] my-[1rem] mx-[2rem] ">
            <h1 className="text-white text-3xl mx-[1rem]">{date}</h1>
            <div className="text-white flex flex-col">
                {logArray.map((log) => {
                    return (
                        <LogHistoryElement
                            username={log.username}
                            action={log.action}
                            time={log.time}
                        />
                    );
                })}
            </div>
        </div>
    );
}

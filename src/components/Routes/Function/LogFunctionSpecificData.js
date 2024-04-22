import { useEffect, useState } from "react";
import axios from "axios";
import { VictoryPie, VictoryLabel } from "victory";

export default function LogFunctionSpecificData() {
    const [chosenFunction, setChosenFunction] = useState("e621_questionable");
    const [chosenDate, setChosenDate] = useState("");

    let [pieData, setPieData] = useState([]);

    const debounceDelayTimeMS = 500;

    useEffect(() => {
        const debounce = setTimeout(() => {
            if (chosenDate === "") {
                // No date
                axios
                    .get(
                        `http://api.esix.blenderboard.com/functions/function/${chosenFunction}`
                    )
                    .then((response) => {
                        let bufferObj = {};
                        for (const logObj of response.data) {
                            for (const key of Object.keys(logObj)) {
                                // Create if not exists, otherwise increment
                                bufferObj[key] === undefined
                                    ? (bufferObj[key] = logObj[key])
                                    : (bufferObj[key] += logObj[key]);
                            }
                        }
                        // Clear array
                        let dataObjs = [];
                        let tempCounter = 1;
                        for (const key of Object.keys(bufferObj)) {
                            dataObjs.push({
                                label: `${key}:${bufferObj[key]}`,
                                x: tempCounter++, // Takes value first, then increments! Cool thing.
                                y: bufferObj[key],
                            });
                        }
                        setPieData(dataObjs);
                    })
                    .catch((err) => console.log(err));
            } else {
                // Date specific
                axios
                    .get(
                        `http://api.esix.blenderboard.com/functions/function/${chosenFunction}/${chosenDate}`
                    )
                    .then((response) => {
                        console.log(response.data);
                        let dataObjs = [];
                        let tempCounter = 1;
                        for (const key of Object.keys(response.data)) {
                            dataObjs.push({
                                label: `${key}: ${response.data[key]}`,
                                x: tempCounter++,
                                y: response.data[key],
                            });
                        }

                        setPieData(dataObjs);
                    })
                    .catch((err) => console.log(err));
            }
        }, debounceDelayTimeMS);

        return () => clearTimeout(debounce);
    }, [chosenDate, chosenFunction]);
    return (
        <div className="flex flex-col w-full">
            <input
                type="text"
                min="1"
                max="10"
                onChange={(e) => setChosenFunction(e.target.value)}
                className="bg-light text-2xl m-3 p-5 w-auto"
                placeholder="Which function?"
            />
            <input
                type="text"
                min="1"
                max="10"
                onChange={(e) => setChosenDate(e.target.value)}
                className="bg-light text-2xl m-3 p-5 w-auto"
                placeholder="Which date?"
            />
            <div className="bg-light p-[5rem] w-auto aspect-square my-[2rem] mx-[28rem]">
                <VictoryPie
                    data={pieData}
                    colorScale={[
                        "#2563EB",
                        "#567EFF",
                        "#7B99FF",
                        "#204FB5",
                        "#133378",
                    ]}
                    labelPlacement="parallel"
                    labelComponent={
                        <VictoryLabel
                            style={{
                                fontSize: 20,
                                padding: 1,
                                fill: "white",
                            }}
                        />
                    }
                    style={{
                        data: {
                            stroke: "#232426",
                            strokeWidth: 6,
                        },
                    }}
                    width={1000}
                    radius={500} // Adjust the radius of the pie chart
                    labelRadius={(label) => {
                        return 450 - label.text.length * 12;
                    }} // Adjust the radius of the labels
                />
            </div>
        </div>
    );
}

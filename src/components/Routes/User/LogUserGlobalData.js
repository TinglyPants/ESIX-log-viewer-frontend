import { useEffect, useState } from "react";
import axios from "axios";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from "victory";

export default function LogUserGlobalData() {
    const [barData, setBarData] = useState();
    useEffect(() => {
        axios.get("http://35.246.109.80:4000/users/list").then((response) => {
            setBarData(
                Object.keys(response.data).map((key) => ({
                    username: key,
                    uses: response.data[key],
                }))
            );
        });
    }, []);

    return (
        <div className=" bg-light m-[1rem] h-[40rem] w-full self-start">
            <VictoryChart
                domainPadding={15}
                padding={{ top: 10, bottom: 90, left: 30, right: 30 }}
            >
                <VictoryBar
                    data={barData}
                    x="username"
                    y="uses"
                    style={{
                        data: { fill: "#2563eb" },
                        labels: { fill: "white", fontSize: "8" },
                    }}
                    labels={({ datum }) => `${datum.uses}`}
                />
                <VictoryAxis
                    dependentAxis
                    style={{
                        axis: { stroke: "white" },
                        tickLabels: { fontSize: "10", fill: "white" },
                    }}
                />
                <VictoryAxis
                    style={{
                        axis: { stroke: "white" },
                    }}
                    tickLabelComponent={
                        <VictoryLabel
                            angle={290}
                            textAnchor="end"
                            style={{ fill: "white", fontSize: "10" }}
                        />
                    }
                />
            </VictoryChart>
        </div>
    );
}

import { useEffect, useState } from "react";
import axios from "axios";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from "victory";

export default function LogFunctionGLobalData() {
    const [barData, setBarData] = useState();
    useEffect(() => {
        axios
            .get("http://api.esix.blenderboard.com/functions/list")
            .then((response) => {
                setBarData(
                    Object.keys(response.data).map((key) => ({
                        functionName: key,
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
                    x="functionName"
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

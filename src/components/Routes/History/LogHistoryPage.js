import LogHistoryElement from "./LogHistoryElement";
import LogHistoryViewer from "./LogHistoryViewer";

export default function LogHistoryPage() {
    return (
        <div>
            <LogHistoryViewer date="1-1-1111">
                <LogHistoryElement
                    username="Username"
                    action="Action"
                    time="12:00"
                />
                <LogHistoryElement
                    username="Username"
                    action="Action"
                    time="12:01"
                />
                <LogHistoryElement
                    username="Username"
                    action="Action"
                    time="12:02"
                />
                <LogHistoryElement
                    username="Username"
                    action="Action"
                    time="12:03"
                />
            </LogHistoryViewer>
        </div>
    );
}

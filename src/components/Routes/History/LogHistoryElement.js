export default function LogHistoryElement({ username, action, time }) {
    return (
        <div className="flex flex-col p-4 border-blue-500 border-[1px] my-[0.5rem] mx-[1rem] ">
            <h2 className="text-lg">{username}</h2>
            <p>{action}</p>
            <p className="text-lightest">{time}</p>
        </div>
    );
}

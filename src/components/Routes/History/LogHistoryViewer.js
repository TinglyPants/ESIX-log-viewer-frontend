export default function LogHistoryViewer({ date, children }) {
    return (
        <div className="w-auto bg-light flex flex-col py-[0.5rem] my-[1rem] mx-[2rem] rounded-3xl">
            <h1 className="text-white text-3xl mx-[1rem]">{date}</h1>
            <div className="text-white flex flex-col">{children}</div>
        </div>
    );
}

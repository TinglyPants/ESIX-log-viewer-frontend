import axios from "axios"

export default function NavBarProcessButton() {
    const handleClick = () => {
        axios.get("http://35.246.109.80:4000/processAll")
    }
    return (
        <button className="border-r-[1px] border-white p-5" onClick={handleClick}>
            Reprocess
        </button>
    );
}

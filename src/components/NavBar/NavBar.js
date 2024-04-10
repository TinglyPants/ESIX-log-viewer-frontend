export default function NavBar({ children }) {
    return (
        <nav className="bg-blue-600 w-full flex flex-row text-3xl py-2">
            {children}
        </nav>
    );
}

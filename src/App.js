import NavBar from "./components/NavBar/NavBar";
import NavBarLink from "./components/NavBar/NavBarLink";
import { Routes, Route } from "react-router-dom";
import LogHistoryPage from "./components/Routes/History/LogHistoryPage";
import LogUserPage from "./components/Routes/User/LogUserPage";
import LogFunctionPage from "./components/Routes/Function/LogFunctionPage";
import NavBarProcessButton from "./components/NavBar/NavBarProcessButton";
export default function App() {
    return (
        <div className="w-screen h-screen bg-dark flex flex-col font-poppins overflow-y-scroll overflow-x-hidden text-white">
            <NavBar>
                <NavBarLink href="/history" text="History" />
                <NavBarLink href="/user" text="User" />
                <NavBarLink href="/function" text="Function" />
                <NavBarProcessButton />
            </NavBar>
            <Routes>
                <Route path="/history" element={<LogHistoryPage />} />
                <Route path="/user" element={<LogUserPage />} />
                <Route path="/function" element={<LogFunctionPage />} />
            </Routes>
        </div>
    );
}

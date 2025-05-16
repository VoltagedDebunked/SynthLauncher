import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import ProfileSidebar from "./components/layout/ProfileSidebar";
import { Navbar } from "./components/layout/Navbar";
import InstancesPage from "./pages/InstancesPage";

function App() {
	return (
		<div className="h-screen bg-[#171717] flex-col overflow-hidden">
			<Navbar />

			<div className="flex overflow-hidden h-full">
				<Sidebar setActiveTab={() => {}} activeTab="home" />

				<div className="flex w-full border-l-2 border-t-2 border-neutral-800 rounded-tl-2xl bg-[#151515] overflow-hidden">
					{/* <HomePage /> */}
					<InstancesPage />
					<ProfileSidebar />
				</div>
			</div>
		</div>
	);
}

export default App;

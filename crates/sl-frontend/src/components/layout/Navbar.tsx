import { Maximize, Minus, X } from "lucide-react";
import { Button } from "../ui/button";
import {
	handleWindowClose,
	handleWindowMinimize,
	handleWinndowMaximize,
} from "@/lib/commands";

export const Navbar = () => {
	return (
		<nav
			className="bg-neutral-900 w-full mt-1 flex h-19 items-center p-1 justify-between"
			data-tauri-drag-region
		>
			{/* Left side: logo */}
			<img src="/logo.png" width={50} height={50} className="ml-4 rounded-xl" />

			{/* Right side: buttons */}
			<div className="flex mr-2">
				<Button
					variant="ghost"
					onClick={handleWindowMinimize}
					className="group hover:bg-neutral-500/20 rounded-full p-0 flex items-center justify-center w-14 h-14 transition-all duration-200"
				>
					<Minus className="text-white transition-all duration-200 transform group-hover:scale-105" />
				</Button>

				<Button
					variant="ghost"
					onClick={handleWinndowMaximize}
					className="group hover:bg-neutral-500/20 rounded-full p-0 flex items-center justify-center w-14 h-14 transition-all duration-200"
				>
					<Maximize className="text-white transition-all duration-200 transform group-hover:scale-105" />
				</Button>
				<Button
					variant="ghost"
					onClick={handleWindowClose}
					className="group hover:bg-red-400 rounded-full p-0 flex items-center justify-center w-14 h-14 transition-all duration-200"
				>
					<X className="text-white transition-all duration-200 transform group-hover:scale-105" />
				</Button>
			</div>
		</nav>
	);
};

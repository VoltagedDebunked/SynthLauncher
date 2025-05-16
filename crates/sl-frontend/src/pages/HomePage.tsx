import React from "react";
import { Plus, ArrowRight } from "lucide-react";
import InstanceCard from "../components/InstanceCard";

const HomePage: React.FC = () => {
	return (
		<div className="p-6 w-full overflow-auto pb-12">
			<div className="mb-8">
				<div className="flex items-center justify-between mb-6">
					<h2 className="text-white text-2xl font-bold">Recent Instances</h2>
					<button className="text-purple-400 hover:text-purple-300 flex items-center gap-2 transition-colors cursor-pointer">
						<span>View all instances</span>
						<ArrowRight size={20} />
					</button>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
					{/* {recentInstances.map((instance) => (
            <InstanceCard key={instance.id} {...instance} />
          ))} */}

					<button className="bg-neutral-800/50 rounded-lg h-full p-6 border-2 border-dashed border-neutral-700 hover:border-emerald-600/50 hover:bg-neutral-800 group transition-all flex flex-col items-center justify-center gap-3">
						<div className="w-12 h-12 rounded-full bg-neutral-700 group-hover:bg-emerald-600/20 flex items-center justify-center transition-colors">
							<Plus
								size={24}
								className="text-neutral-400 group-hover:text-emerald-400 transition-colors"
							/>
						</div>
						<span className="text-neutral-400 group-hover:text-emerald-400 font-medium text-center transition-colors">
							Create New Instance
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default HomePage;

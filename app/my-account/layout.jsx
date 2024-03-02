import PrivateRoute from "@/components/PrivaceRoute/PrivateRoute";
import LeftMenu from "@/sections/DashboardLayout/LeftMenu";
import React from "react";

const MyAccountLayout = ({ children }) => {
	return (
		<PrivateRoute>
			<main>
				<div className="bg-slate-100 pt-10 pb-20">
					<div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 px-5 md:px-0">
						<div className=" lg:col-span-1 bg-white rounded-md">
							<LeftMenu />
						</div>
						<div className="lg:col-span-3">{children}</div>
					</div>
				</div>
			</main>
		</PrivateRoute>
	);
};

export default MyAccountLayout;

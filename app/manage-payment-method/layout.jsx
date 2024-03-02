import PrivateRoute from "@/components/PrivaceRoute/PrivateRoute";
import React from "react";

const layout = ({ children }) => {
	return <PrivateRoute>{children}</PrivateRoute>;
};

export default layout;

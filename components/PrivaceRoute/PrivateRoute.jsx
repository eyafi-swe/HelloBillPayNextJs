"use client";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import ScreenLoader from "../Loaders/ScreenLoader/ScreenLoader";

const PrivateRoute = ({ children }) => {
	const { data: session, status } = useSession();
	const pathname = usePathname();
	const router = useRouter();
	if (status === "loading") return <ScreenLoader />;
	if (status === "unauthenticated") {
		router.replace("/login?redirect=" + pathname);
		return <ScreenLoader />;
	}
	return <>{children}</>;
};

export default PrivateRoute;

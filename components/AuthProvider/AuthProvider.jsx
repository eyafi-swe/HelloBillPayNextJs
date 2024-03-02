"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import SetAxiosHeader from "../SetDefault/SetAxiosHeader";

const AuthProvider = ({ children, session }) => {
	return (
		<SessionProvider session={session} refetchOnWindowFocus={false}>
			<SetAxiosHeader />
			{children}
		</SessionProvider>
	);
};

export default AuthProvider;

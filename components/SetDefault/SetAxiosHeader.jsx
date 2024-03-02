"use client";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import axios from "axios";
import { setToken } from "@/services/plugins/axios";

const SetAxiosHeader = () => {
	const { data: session } = useSession();
	useEffect(() => {
		console.log(session);
		if (session) {
			// axios.defaults.headers.common = {
			// 	Authorization: `Bearer ${session.accessToken}`,
			// };
			setToken(session.accessToken);
		}
	}, [session]);
	return null;
};

export default SetAxiosHeader;

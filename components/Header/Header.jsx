"use client";

import React, { useState } from "react";
import Styles from "./PayBillsDropdown.module.css";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import MobileMenu from "./MobileMenu";
import PayBillsDropdown from "./PayBillsDropdown";
import ProfileAvatar from "./ProfileAvatar";

const Header = () => {
	const [showDropdown, setShowDropdown] = useState(" ");
	const [navbar, setNavbar] = useState(false);
	const pathname = usePathname();
	const { data: session } = useSession();

	return (
		<nav className="bg-white fixed w-full top-0 left-0 z-50">
			<div className="bg-success py-2">
				<p className="text-white text-sm text-center">
					Save 10% On Every Payment.{" "}
					<span className="underline cursor-pointer">Use App.</span>
				</p>
			</div>
			<div className="w-full bg-light-faded shadow-none    relative">
				<div className="justify-between px-4 lg:container mx-auto  md:items-center md:flex ">
					<div>
						<div className="flex items-center justify-between py-3 md:py-5 md:block ">
							<div className="flex items-center">
								<div className=" h-10 w-36 mr-5">
									<Link href="/">
										<img
											src="/assets/img/new-logo.png"
											alt=""
											className="object-contain w-full h-full"
										/>
									</Link>
								</div>

								<div
									className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 hidden`}
								>
									<ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
										<li>
											<div
												className={`  flex items-center cursor-pointer ${Styles.dropdown} `}
												// onClick={() => setShowDropdown(!showDropdown)}
												onMouseEnter={() => setShowDropdown("show")}
												onMouseLeave={() => setShowDropdown("hide")}
												role="button"
											>
												<Link
													href="/pay-bills"
													className={`font-semibold mr-1 ${
														showDropdown == "show" ||
														pathname.includes("pay-bills")
															? "text-success border-b-2 border-success"
															: ""
													}`}
												>
													Pay Bills
												</Link>
												{showDropdown == "show" ? (
													<MdKeyboardArrowUp className="text-xl text-success" />
												) : (
													<MdOutlineKeyboardArrowDown
														className={`text-xl ${
															pathname.includes("pay-bills")
																? "text-success"
																: "text-black"
														} `}
													/>
												)}
											</div>

											<PayBillsDropdown
												showDropdown={showDropdown}
												setShowDropdown={setShowDropdown}
											/>
										</li>
										<li
											className={`font-semibold ${
												pathname.includes("about-us")
													? "text-success border-b-2 border-success"
													: "text-black"
											}`}
										>
											<Link href="/about-us">About Us</Link>
										</li>
										<li
											className={`font-semibold ${
												pathname.includes("help-center")
													? "text-success border-b-2 border-success"
													: "text-black"
											}`}
										>
											<Link href="/help-center">Help Center</Link>
										</li>
									</ul>
								</div>
							</div>

							<div className="flex gap-2 md:hidden">
								<Link href="#">
									<button className="py-2.5 px-2 text-white text-sm font-medium rounded-md bg-success">
										Get Started
									</button>
								</Link>
								<button
									className="p-2 text-gray-700 rounded-md outline-none bg-success-light"
									onClick={() => setNavbar(!navbar)}
								>
									{navbar ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 text-black"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6 text-black"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M4 6h16M4 12h16M4 18h16"
											/>
										</svg>
									)}
								</button>
							</div>
						</div>
					</div>

					<div>
						<MobileMenu open={navbar} />
					</div>

					<div className="hidden space-x-3 md:flex items-center">
						<div className="flex items-center">
							<img src="/assets/img/language-icon.svg" alt="" />
							<p className="font-semibold">EN</p>
							<MdOutlineKeyboardArrowDown className="text-xl" />
						</div>
						{!session?.user && (
							<Link href="/login" className="font-semibold">
								Log in
							</Link>
						)}
						<Link href="#">
							<button className="py-2 px-3 text-white font-semibold rounded-md bg-success">
								Get Started
							</button>
						</Link>

						{session?.user && <ProfileAvatar />}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;

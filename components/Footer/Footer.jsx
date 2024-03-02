import Link from "next/link";

const Footer = () => {
	return (
		<div className="bg-dark-bg">
			<div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 ">
				<div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-4 ">
					<div className="md:max-w-md lg:col-span-1">
						<Link
							href="/"
							aria-label="Go home"
							title="Company"
							className="inline-flex items-center"
						>
							<div className="w-36">
								<img
									src="/assets/img/footerlogo.png"
									alt=""
									className="object-contain w-full h-full"
								/>
							</div>
						</Link>
						<div className="mt-4 lg:max-w-sm">
							<p className="text-sm text-white">
								Viva Bill Pay offers the fastest and most convenient mobile top
								up services for all majoir domestic and international wireless
								carriers
							</p>
						</div>
					</div>
					<div className="grid grid-cols-2  gap-5 row-gap-8 lg:col-span-3 md:grid-cols-3">
						<div>
							<p className="font-semibold tracking-wide text-white">Policy</p>
							<ul className="mt-2 space-y-2">
								<li>
									<Link href="/privacy-policy" className="text-white text-sm">
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link href="/refund" className="text-white text-sm">
										Refunds
									</Link>
								</li>
								<li>
									<Link
										href="/terms-and-conditions"
										className="text-white text-sm"
									>
										Terms/Conditions
									</Link>
								</li>
								<li>
									<Link href="/dmca" className="text-white text-sm">
										DMCA
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<p className="font-semibold tracking-wide text-white">Features</p>
							<ul className="mt-2 space-y-2">
								<li>
									<Link href="/" className="text-white text-sm">
										Why Choose
									</Link>
								</li>
								<li>
									<Link href="/" className="text-white text-sm">
										How it work
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<p className="font-semibold tracking-wide text-white">
								Get the app
							</p>
							<ul className="mt-2 flex md:flex-col  md:items-start items-center gap-4">
								<li>
									<div className="border rounded-md px-2 py-1 flex items-center gap-2 w-40 cursor-pointer">
										<img src="/assets/img/Apple logo.png" alt="apple" />
										<div className="leading-none ">
											<p className="text-white text-xs leading-none ">
												Download on the
											</p>
											<p className="text-white text-lg font-semibold">
												App Store
											</p>
										</div>
									</div>
								</li>
								<li>
									<div className="border rounded-md px-2 py-1 flex items-center gap-2 w-40 cursor-pointer">
										<img
											src="/assets/img/Google Play logo.png"
											alt="Google Play"
										/>
										<div className="leading-none ">
											<p className="text-white text-xs leading-none ">
												GET IT ON
											</p>
											<p className="text-white text-lg font-semibold">
												Google Play
											</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-600 sm:flex-row">
					<p className="text-sm text-white">
						© Copyright 2020 Lorem Inc. All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;

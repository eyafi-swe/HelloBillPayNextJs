import React from "react";

const MissionVission = () => {
	return (
		<div className="h-[100vh] md:h-[60vh] py-10 bg-[url('/assets/img/mission-vission.png')] bg-no-repeat bg-cover bg-bottom md:bg-center mb-16">
			<div className="container mx-auto  h-full flex flex-col px-5 md:px-0 md:flex-row  items-center justify-start md:justify-center gap-10 md:gap-24 xl:gap-48">
				<div className="text-center md:text-right  border-red-500 w-full lg:w-1/3">
					<h3 className="font-semibold text-xl">Our Mission</h3>
					<p className="mt-5">
						Our mission is to provide seamless and convenient online mobile
						top-up and bill payment services to individuals, ensuring that they
						can easily stay connected and manage their essential payments
						anytime, anywhere.
					</p>
				</div>
				<div className="text-center md:text-left  border-red-500 w-full lg:w-1/3">
					<h3 className="font-semibold text-xl">Our Vision</h3>
					<p className="mt-5">
						Our vision is to become the leading online platform for mobile
						top-up and bill payment services, revolutionizing the way people
						recharge their mobile phones and settle their bills. We aim to
						simplify the process, and eliminate the hassle of physical
						transactions.
					</p>
				</div>
			</div>
		</div>
	);
};

export default MissionVission;

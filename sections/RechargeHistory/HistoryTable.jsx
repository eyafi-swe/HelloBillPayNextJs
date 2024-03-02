import React from "react";

const HistoryTable = ({ data }) => {
	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table className="w-full text-sm text-left text-gray-600 ">
				<thead className="text-xs text-gray-700 uppercase bg-slate-200">
					<tr>
						<th scope="col" className="px-6 py-3">
							Date
						</th>
						<th scope="col" className="px-6 py-3">
							Transaction ID
						</th>
						<th scope="col" className="px-6 py-3">
							Status
						</th>
						<th scope="col" className="px-6 py-3">
							Amount
						</th>
						<th scope="col" className="px-6 py-3">
							Carrier
						</th>
						<th scope="col" className="px-6 py-3">
							Payment Method
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr className="bg-white border-b " key={index}>
							<th
								scope="row"
								className="px-6 py-4 font-medium  whitespace-nowrap "
							>
								{item.date}
							</th>
							<td className="px-6 py-4">{item.transactionId}</td>
							<td className={`px-3 py-4 `}>
								<p
									className={`${
										item.status === "Success"
											? "bg-badge-success text-success"
											: item.status === "Pending"
											? "bg-badge-pending text-badge-text-pending"
											: "bg-badge-error text-badge-text-error"
									} px-3 py-1 rounded-2xl text-center w-max font-semibold`}
								>
									{item.status}
								</p>
							</td>
							<td className="px-6 py-4">{item.amount}</td>
							<td className="px-6 py-4 ">
								<img src={item.carrier} alt="" className="object-contain" />
							</td>
							<td className="px-6 py-4">{item.paymentMethod}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default HistoryTable;

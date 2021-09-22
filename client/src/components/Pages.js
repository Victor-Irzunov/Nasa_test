import React from 'react';
import { Pagination } from "react-bootstrap";


const Pages = ({countriesPerPage, totalCountries, paginate, currentPage }) => {
	const pages = []
	for (let i = 0; i < Math.ceil(totalCountries / countriesPerPage); i++) {
		pages.push(i + 1)
	}

	return (
		<Pagination className="mt-3" size="sm">
			{pages.map(page =>
				<Pagination.Item
					key={page}
					active={currentPage === page}
					onClick={() => paginate(page)}
				>
					{page}
				</Pagination.Item>
			)}
		</Pagination>
	)
}

export default Pages;

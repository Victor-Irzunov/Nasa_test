import React, { useContext } from 'react'
import { observer } from "mobx-react-lite"
import { Context } from "../index"
// import css from "./Pages.module.css"

import { Pagination } from "react-bootstrap"

const Pages = ({countriesPerPage, totalCountries, paginate, currentPage }) => {
	const { object } = useContext(Context)
	// const pageCount = Math.ceil(device.totalCount / device.limit)
	const pages = []

	for (let i = 0; i < Math.ceil(totalCountries / countriesPerPage); i++) {
		pages.push(i + 1)
	}

	return (
		<Pagination className="mt-3" size="sm">
			{pages.map(page =>
				<Pagination.Item
					key={page}
					// className={css.pages}
					active={currentPage === page}
					onClick={() => paginate(page)}
				>
					{page}
				</Pagination.Item>
			)}
		</Pagination>
	)
}

export default Pages

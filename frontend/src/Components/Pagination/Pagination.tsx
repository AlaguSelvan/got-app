import React from 'react';
import classnames from 'classnames';
import { useEffect } from 'react';

import { UsePagination, DOTS } from '../../hooks/UsePagination';
import { IPaginationProps } from '../../Models/Pagination';


const Pagination = (props: IPaginationProps) => {
	const {
		onPageChange,
		totalCount,
		siblingCount = 1,
		currentPage,
		className,
		pageSize
	} = props;

	const paginationRange = UsePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize
	});

	useEffect(() => {
		console.log("here pagination")
	}, [])

	// If there are less than 2 times in pagination range we shall not render the component
	if (currentPage === 0 || paginationRange!.length < 2) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};


	let lastPage = paginationRange![paginationRange!.length - 1];
	return (
		<ul
			className={classnames('pagination-container', { [className]: className })}
		>

			{/* Left navigation arrow */}
			<li
				className={classnames('pagination-item', {
					disabled: currentPage === 1
				})}
				onClick={onPrevious}
			>
				<div className="arrow left" />
			</li>
			{paginationRange!.map((pageNumber, idx) => {

				// If the pageItem is a DOT, render the DOTS unicode character
				if (pageNumber === DOTS) {
					return <li className="pagination-item dots" key={idx + "-dot"}>&#8230;</li>;
				}

				// Render our Page Pills
				return (
					<li
						className={classnames('pagination-item', {
							selected: pageNumber === currentPage
						})}
						key={idx + "right"}
						onClick={() => onPageChange(parseInt(pageNumber + "") || 1)}
					>
						{pageNumber}
					</li>
				);
			})}

			{/* Right navigation arrow */}
			<li
				className={classnames('pagination-item', {
					disabled: currentPage === lastPage
				})}
				onClick={onNext}
			>
				<div className="arrow right" />
			</li>
		</ul>
	);
};

export default Pagination;
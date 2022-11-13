export interface IUsePagination {
	totalCount: number;
	pageSize: number;
	siblingCount?: number;
	currentPage: number
}

export interface IPaginationProps extends IUsePagination{
	onPageChange: (pageNumber: number) => void;
	className: string;
}
import React, { useState, useEffect, useMemo } from 'react'

import { CharacterCard } from '../../Components';
import Character from '../../Models/Character';
import FilterType from '../../Models/FilterType';
import Pagination from '../../Components/Pagination/Pagination';

import useDebounce from '../../hooks/useDebounce';

let PageSize = 10;

const Home = () => {
	const [characterData, setCharacterData] = useState<Character[]>([])
	const [filteredData, setFilteredData] = useState<Array<Character>>([])
	const [filterBy, setFilterBy] = useState<FilterType>(FilterType.Name)
	const [filterText, setFilterText] = useState<string>("")
	const [currentPage, setCurrentPage] = useState(1);
	const debouncedFilterText = useDebounce(filterText, 500);

	const currentData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return characterData.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, characterData]);

	useEffect(() => {
		fetchData()
	}, [])

	useEffect(() => {
		if (debouncedFilterText.length > 0) {
			fetchFilteredData(debouncedFilterText)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedFilterText])



	const fetchData = async () => {
		try {
			const apiData = await fetch(`http://localhost:8000/Characters`)
			const characters = await apiData.json();
			setCharacterData(characters || []);
		} catch (e) {
			setCharacterData([]);
		}
	}

	const fetchFilteredData = async (text: string | null = null) => {
		const searchTerm = text || filterText;
		const apiData = await fetch(`http://localhost:8000/Characters?searchType=${filterBy}&searchValue=${searchTerm}`)
		const characters = await apiData.json();
		setFilteredData(characters || [])
	}

	const handleFilterTypeChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
		fetchFilteredData()
		setFilterBy(event.target.value as FilterType)
	}

	const onFilterTextChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setFilterText(e.target.value)
	}

	const Characters = (character: Character, idx: number) => <CharacterCard character={character} key={idx} />

	return (
		<>
			<div className={'search-area'}>
				<select name="filterType" id="cars" onChange={handleFilterTypeChange}>
					{Object.values(FilterType).map((filter, idx) => {
						return (
							<option value={filter} key={idx}>
								{filter}
							</option>
						)
					})
					}
				</select>
				<input type={'text'} value={filterText} placeholder={`Search by  ${filterBy}`} onChange={onFilterTextChange} />
			</div>
			<div>
				<p> Results Count: {filterText ? filteredData.length : characterData.length} records</p>
			</div>
			<div className={'list-area'}>
				{filterText ? filteredData.map(Characters) : currentData.length ? currentData.map(Characters) : null}
			</div>
			<Pagination
				className={"pagination-bar"}
				currentPage={currentPage}
				totalCount={characterData.length}
				pageSize={PageSize}
				onPageChange={page => setCurrentPage(page)} siblingCount={2}
			/>
		</>
	);
}

export default Home
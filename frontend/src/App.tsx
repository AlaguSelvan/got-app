import React, { useState, useEffect } from 'react';

import { CharacterCard } from './Components';
import Character from './Models/Character';
import FilterType from './Models/FilterType';
import Pagination from './Components/Pagination/Pagination';

import './App.css';
import useDebounce from './hooks/useDebounce';

let PageSize = 10;

function App() {
	const [characterData, setCharacterData] = useState<Character[]>([])
	const [filteredData, setFilteredData] = useState<Array<Character>>([])
	const [filterBy, setFilterBy] = useState<FilterType>(FilterType.Name)
	const [filterText, setFilterText] = useState<string>("")
	const [currentPage, setCurrentPage] = useState(1);
	const debouncedFilterText = useDebounce(filterText, 500);

	// const currentData = useMemo(() => {
	// 	const firstPageIndex = (currentPage - 1) * PageSize;
	// 	const lastPageIndex = firstPageIndex + PageSize;
	// 	return characterData.slice(firstPageIndex, lastPageIndex);
	// }, [currentPage, characterData]);

	// const currentFilteredData = useMemo(() => {
	// 	const firstPageIndex = (currentPage - 1) * PageSize;
	// 	const lastPageIndex = firstPageIndex + PageSize;
	// 	return filteredData.slice(firstPageIndex, lastPageIndex);
	// }, [currentPage, filteredData]);

	useEffect(() => {
		fetchData()
	}, [])

	useEffect(() => {
		fetchFilteredData(debouncedFilterText)
	}, [debouncedFilterText])



	const fetchData = async () => {
		try {
				const apiData = await fetch(`http://localhost:8000/Characters`)
				const characters = await apiData.json();
				console.log("charactersData:", characters)
				setCharacterData(characters || []);
		} catch (e) {
			setCharacterData([]);
			console.log("error:", e)
		}
	}

	const fetchFilteredData = async (text: string) => {
		const searchTerm = text || filterText;
		const apiData = await fetch(`http://localhost:8000/Characters?searchType=${filterBy}&searchValue=${searchTerm}`)
		const characters = await apiData.json();
		setFilteredData(characters || [])
	}

	const handleFilterChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
		setFilterBy(event.target.value as FilterType)
	}

	const onFilterTextChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setFilterText(e.target.value)
		
	}

	const Characters = (character: Character, idx: number) => <CharacterCard character={character} key={idx} />

	return (
		<div className="App">
			<div className="header">
				<a href="#default" className="logo">CompanyLogo</a>
				<div className="header-right">
					<a className="active" href="#home">Home</a>
					<a href="#contact">Contact</a>
					<a href="#about">About</a>
				</div>
			</div>
			<div>
				<select name="filterType" id="cars" onChange={handleFilterChange}>
					{Object.values(FilterType).map((filter, idx) => {
						return (
							<option value={filter} key={idx}>
								{filter}
								</option>
						)})
					}
				</select>
				<input type={'text'} value={filterText} placeholder={`Search by  ${filterBy}`} onChange={onFilterTextChange}/>
			</div>
			<div className={'list-area'}>
				{(filterText && fetchFilteredData.length) ? filteredData.map(Characters) : characterData.length ? characterData.map(Characters) : null}
			</div>
			{/* <Pagination
				className={"pagination-bar"}
				currentPage={currentPage}
				totalCount={characterData.length}
				pageSize={PageSize}
				onPageChange={page => setCurrentPage(page)} siblingCount={0}
			/> */}
		</div>
	);
}

export default App;

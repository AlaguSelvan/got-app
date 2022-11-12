import React, { useState, useEffect } from 'react';
import './App.css';
import { CharacterCard } from './Components';
import Character from './Models/Character';
import FilterType from './Models/FilterType';

function App() {
	const [data, setData] = useState<Array<Character>>([])
	const [filteredData, setFilteredData] = useState<Array<Character>>([])
	const [filterBy, setFilterBy] = useState<FilterType>(FilterType.Name)

	useEffect(() => {

		
		return () => {
			
		}
	}, [])
	
  return (
    <div className="App">
      <CharacterCard />
    </div>
  );
}

export default App;

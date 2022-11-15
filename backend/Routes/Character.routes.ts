import express from 'express';
import { SearchType } from '../Models/SearchType';
import CharacterService from '../Services/CharacterService';

const characterRouter = express.Router();

const limit = 10000;

const characterService = new CharacterService({limit});

// Get Characters by Name, KilledBy, Parent
characterRouter.get('/', (req, res) => {

	if(req.query.pageNo) {
		characterService.updatePageNo(req.query.pageNo);
	}

	if(req.query.limit) {
		characterService.updateLimit(req.query.limit);
	}

	const isRoyal = req.query.isRoyal === "true" ? true : req.query.isRoyal === "false" ? false : null
	// if(req.query.isRoyal) {
	// 	// TODO: Update Royal
	// 	characterService.updateRoyal(isRoyal);
	// }

	let data = characterService.charactersData

	if (req.query.searchType === SearchType.KilledBy) {
		data = characterService.searchCharacterByKilledBy(req.query.searchValue);
	}

	if (req.query.searchType === SearchType.House) {
		data = characterService.searchCharacterByHouse(req.query.searchValue);
	}

	if (req.query.searchType === SearchType.Parent) {
		data = characterService.searchCharacterByParent(req.query.searchValue);
	}

	if (req.query.searchType === SearchType.CharacterName) {
		data = characterService.searchCharacterByName(req.query.searchValue);
	}

	if (isRoyal === true) {
		data = data.filter((character, idx) => {
			return character.royal === isRoyal;
		})
	}


	if (isRoyal === false) {
		data = data.filter((character, idx) => {
			return !character.royal;
		})
	}

	return res.json(data);

})

// Display Character by Name
characterRouter.get('/:characterName', (req, res) => {

	if (!req.params.characterName) return res.json([]);

	if (req.query.searchType === SearchType.CharacterName) {
		const data = characterService.getCharacterByName(req.params.characterName)
		return res.json(data);
	}

})


export default characterRouter;

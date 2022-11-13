import express from 'express';
import { SearchType } from '../Models/SearchType';
import CharacterService from '../Services/CharacterService';

const characterRouter = express.Router()

const limit = 1000

const characterService = new CharacterService({limit});

characterRouter.get('/', (req, res) => {


	if(req.query.pageNo) {
		characterService.updatePageNo(req.query.pageNo)
	}

	if(req.query.limit) {
		characterService.updateLimit(req.query.limit)
	}

	if (req.query.searchType === SearchType.KilledBy) {
		const data = characterService.searchCharacterByKilledBy(req.query.searchValue)
		return res.json(data);
	}

	if (req.query.searchType === SearchType.Parent) {
		const data = characterService.searchCharacterByParent(req.query.searchValue)
		return res.json(data);
	}

	if (req.query.searchType === SearchType.CharacterName) {
		const data = characterService.searchCharacterByName(req.query.searchValue)
		return res.json(data);
	}

	return res.json(characterService.charactersData);

})

characterRouter.get('/:characterName', (req, res) => {

	if (!req.params.characterName) return res.json([])

	if (req.query.searchType === SearchType.CharacterName) {
		const data = characterService.getCharacterByName(req.params.characterName)
		return res.json(data);
	}

})


export default characterRouter;
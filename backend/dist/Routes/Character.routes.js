"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SearchType_1 = require("../Models/SearchType");
const CharacterService_1 = __importDefault(require("../Services/CharacterService"));
const characterRouter = express_1.default.Router();
const limit = 10000;
const characterService = new CharacterService_1.default({ limit });
// Get Characters by Name, KilledBy, Parent
characterRouter.get('/', (req, res) => {
    if (req.query.pageNo) {
        characterService.updatePageNo(req.query.pageNo);
    }
    if (req.query.limit) {
        characterService.updateLimit(req.query.limit);
    }
    if (req.query.searchType === SearchType_1.SearchType.KilledBy) {
        const data = characterService.searchCharacterByKilledBy(req.query.searchValue);
        return res.json(data);
    }
    if (req.query.searchType === SearchType_1.SearchType.House) {
        const data = characterService.searchCharacterByHouse(req.query.searchValue);
        return res.json(data);
    }
    if (req.query.searchType === SearchType_1.SearchType.Parent) {
        const data = characterService.searchCharacterByParent(req.query.searchValue);
        return res.json(data);
    }
    if (req.query.searchType === SearchType_1.SearchType.CharacterName) {
        const data = characterService.searchCharacterByName(req.query.searchValue);
        return res.json(data);
    }
    return res.json(characterService.charactersData);
});
// Display Character by Name
characterRouter.get('/:characterName', (req, res) => {
    if (!req.params.characterName)
        return res.json([]);
    if (req.query.searchType === SearchType_1.SearchType.CharacterName) {
        const data = characterService.getCharacterByName(req.params.characterName);
        return res.json(data);
    }
});
exports.default = characterRouter;

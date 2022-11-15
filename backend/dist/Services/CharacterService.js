"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const characters_1 = __importDefault(require("../data/characters"));
const Paginate_1 = __importDefault(require("../Helper/Paginate"));
class CharacterService {
    constructor({ pageNo = 1, limit = 50 }) {
        this.characters = [];
        this.pageNo = 1;
        this.limit = 50;
        this.characters = characters_1.default;
        this.pageNo = pageNo;
        this.limit = limit;
    }
    updatePageNo(pageNo) {
        this.pageNo = pageNo;
    }
    updateLimit(limit) {
        this.limit = limit;
    }
    searchCharacterByName(name) {
        const data = this.characters.filter((character) => character.characterName.toLowerCase().includes(name.toLowerCase()));
        return (0, Paginate_1.default)(data, this.limit, this.pageNo);
    }
    get charactersData() {
        return (0, Paginate_1.default)(this.characters, this.limit, this.pageNo);
    }
    getCharacterByName(name) {
        const data = this.characters.find((character) => character.characterName.toLowerCase() === name.toLowerCase());
        return data;
    }
    searchCharacterByParent(parentName) {
        const output = [];
        this.characters.forEach((character) => {
            var _a;
            return (_a = character.parents) === null || _a === void 0 ? void 0 : _a.forEach((parent) => {
                if (parent.toLowerCase().includes(parentName.toLowerCase())) {
                    output.push(character);
                }
            });
        });
        return (0, Paginate_1.default)(output, this.limit, this.pageNo);
    }
    searchCharacterByKilledBy(killedBy) {
        const output = [];
        this.characters.forEach((character) => {
            var _a;
            return (_a = character.killedBy) === null || _a === void 0 ? void 0 : _a.forEach((killedPerson) => {
                if (killedPerson.toLowerCase().includes(killedBy.toLowerCase())) {
                    output.push(character);
                }
            });
        });
        return (0, Paginate_1.default)(output, this.limit, this.pageNo);
    }
    searchCharacterByHouse(house) {
        console.log("house here", house);
        const output = [];
        this.characters.forEach((character) => {
            if (Array.isArray(character.houseName)) {
                console.log("character.houseName", character.houseName);
                character.houseName.forEach((house, idx) => {
                    if (house.toLowerCase().includes(house.toLowerCase())) {
                        output.push(character);
                    }
                });
            }
            else {
                if (character.houseName && character.houseName.toLowerCase().includes(house.toLowerCase())) {
                    output.push(character);
                }
            }
        });
        return (0, Paginate_1.default)(output, this.limit, this.pageNo);
    }
    searchCharacterByRoyal(isRoyal) {
        const data = characters_1.default.filter((character) => character.royal === isRoyal);
        return (0, Paginate_1.default)(data, this.limit, this.pageNo);
    }
}
exports.default = CharacterService;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const characters_1 = __importDefault(require("../data/characters"));
class CharacterService {
    constructor() {
        this.characters = [];
        this.characters = characters_1.default;
    }
    searchCharacterByName(name) {
        const data = this.characters.filter((character) => character.characterName.toLowerCase().includes(name.toLowerCase()));
        return data;
    }
    get getAllCharacters() {
        return this.characters;
    }
    getCharacterByName(name) {
        const data = this.characters.find((character) => character.characterName.toLowerCase() === name.toLowerCase());
        return data;
    }
    searchCharacterByParent(parentName) {
        const output = [];
        characters_1.default.forEach((character) => {
            var _a;
            return (_a = character.parents) === null || _a === void 0 ? void 0 : _a.forEach((parent) => {
                if (parent.toLowerCase().includes(parentName.toLowerCase())) {
                    output.push(character);
                }
            });
        });
        return output;
    }
    searchCharacterByKilledBy(killedBy) {
        const output = [];
        characters_1.default.forEach((character) => {
            var _a;
            return (_a = character.killedBy) === null || _a === void 0 ? void 0 : _a.forEach((killedPerson) => {
                if (killedPerson.toLowerCase().includes(killedBy.toLowerCase())) {
                    output.push(character);
                }
            });
        });
        return output;
    }
    searchCharacterByRoyal(isRoyal) {
        return characters_1.default.filter((character) => character.royal === isRoyal);
    }
}
exports.default = CharacterService;

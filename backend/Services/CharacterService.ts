import characters from "../data/characters"
import Character from "../Models/Character";
import Paginate from '../Helper/Paginate';

class CharacterService {

	private characters: any[] = [];
	private pageNo: number = 1
	private limit: number = 50

	public constructor({pageNo = 1, limit = 50}) {
		this.characters = characters;
		this.pageNo = pageNo;
		this.limit = limit;
	}

	public updatePageNo(pageNo: number) {
		this.pageNo = pageNo;
	}

	public updateLimit(limit: number) {
		this.limit = limit;
	}

	public searchCharacterByName(name: string) {
		const data = this.characters.filter((character) => character.characterName.toLowerCase().includes(name.toLowerCase()))
		return Paginate<Character>(data, this.limit, this.pageNo)
	}

	public get charactersData() {
		return Paginate<Character>(this.characters, this.limit, this.pageNo);
	}

	public getCharacterByName(name: string): Character {
		const data = this.characters.find((character) => character.characterName.toLowerCase() === name.toLowerCase())
		return data
	}

	public searchCharacterByParent(parentName: string) {
		const output: any[] = []
		this.characters.forEach((character: Character) => {
			return character.parents?.forEach((parent) => {
				if (parent.toLowerCase().includes(parentName.toLowerCase())) {
					output.push(character)
				}
			})
		})
		return Paginate<Character>(output, this.limit, this.pageNo);
	}

	public searchCharacterByKilledBy(killedBy: string) {
		const output: any[] = []
		this.characters.forEach((character: Character) => {
			return character.killedBy?.forEach((killedPerson) => {
				if (killedPerson.toLowerCase().includes(killedBy.toLowerCase())) {
					output.push(character)
				}
			})
		})
		return Paginate<Character>(output, this.limit, this.pageNo);
	}

	public searchCharacterByHouse(house: string) {
		console.log("house here", house)
		const output: any[] = []
		this.characters.forEach((character) => {
			if (Array.isArray(character.houseName)) {
				console.log("character.houseName", character.houseName)
				character.houseName.forEach((house: string, idx: number) => {
					if (house.toLowerCase().includes(house.toLowerCase())) {
						output.push(character)

					}
				})
			} else {
				if (character.houseName && character.houseName.toLowerCase().includes(house.toLowerCase()) ) {
					output.push(character)
				}
			}
		})
		return Paginate<Character>(output, this.limit, this.pageNo)
	}

	public searchCharacterByRoyal(isRoyal: boolean) {
		const data = characters.filter((character) => character.royal === isRoyal)
		return Paginate<any>(data, this.limit, this.pageNo);
	}

}

export default CharacterService;
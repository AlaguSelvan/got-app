import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

import Characters from './data/characters'
import Paginate from './Helper/Paginate';
import { SearchType } from './Models/SearchType';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;


// @ts-ignore
app.use(express.json());
// @ts-ignore
app.use(cors())


app.get('/', (req, res) => {
  res.send('Express Server');
});

app.get('/Characters', (req, res) => {

	const pageNo = req.query.pageNo || 1
	const limit = req.query.limit || 10
	let data = Characters;


	if (req.query.searchType === SearchType.KilledBy) {
		const output: any[] = []
		Characters.forEach((character) => {
			return character.killedBy?.forEach((killedPerson) => {
				if(killedPerson.toLowerCase().includes(req.query.searchValue.toLowerCase())) {
					output.push(character)
				}
			})
		})
		return res.json(Paginate(output, limit, pageNo))
	}

	if (req.query.searchType === SearchType.Parent) {
		const output: any[] = []
		Characters.forEach((character) => {
			return character.parents?.forEach((killedPerson) => {
				if (killedPerson.toLowerCase().includes(req.query.searchValue.toLowerCase())) {
					output.push(character)
				}
			})
		})
		return res.json(Paginate(output, limit, pageNo))
	}

	if (req.query.searchType === SearchType.CharacterName) {
		// @ts-ignore
		data = Characters.filter((character) => character[req.query.searchType].toLowerCase().includes())
		return res.json(Paginate(data, limit, pageNo))
	}

	if (req.query.searchType === SearchType.isRoyal) {
		data = Characters.filter((character) => character[SearchType.isRoyal] + "" ===  req.query.searchValue)
		return res.json(Paginate(data, limit, pageNo))
	}

	// Send records by skip & limit
	data = Paginate(data, limit, pageNo)

	res.send(data);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

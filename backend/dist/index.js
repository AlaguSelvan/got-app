"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const characters_1 = __importDefault(require("./data/characters"));
const Paginate_1 = __importDefault(require("./Helper/Paginate"));
const SearchType_1 = require("./Models/SearchType");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// @ts-ignore
app.use(express_1.default.json());
// @ts-ignore
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Express Server');
});
app.get('/Characters', (req, res) => {
    const pageNo = req.query.pageNo || 1;
    const limit = req.query.limit || 10;
    let data = characters_1.default;
    if (req.query.searchType === SearchType_1.SearchType.KilledBy) {
        const output = [];
        characters_1.default.forEach((character) => {
            var _a;
            return (_a = character.killedBy) === null || _a === void 0 ? void 0 : _a.forEach((killedPerson) => {
                if (killedPerson.toLowerCase().includes(req.query.searchValue.toLowerCase())) {
                    output.push(character);
                }
            });
        });
        return res.json((0, Paginate_1.default)(output, limit, pageNo));
    }
    if (req.query.searchType === SearchType_1.SearchType.Parent) {
        const output = [];
        characters_1.default.forEach((character) => {
            var _a;
            return (_a = character.parents) === null || _a === void 0 ? void 0 : _a.forEach((killedPerson) => {
                if (killedPerson.toLowerCase().includes(req.query.searchValue.toLowerCase())) {
                    output.push(character);
                }
            });
        });
        return res.json((0, Paginate_1.default)(output, limit, pageNo));
    }
    if (req.query.searchType === SearchType_1.SearchType.CharacterName) {
        // @ts-ignore
        data = characters_1.default.filter((character) => character[req.query.searchType].toLowerCase().includes());
        return res.json((0, Paginate_1.default)(data, limit, pageNo));
    }
    if (req.query.searchType === SearchType_1.SearchType.isRoyal) {
        data = characters_1.default.filter((character) => character[SearchType_1.SearchType.isRoyal] + "" === req.query.searchValue);
        return res.json((0, Paginate_1.default)(data, limit, pageNo));
    }
    // Send records by skip & limit
    data = (0, Paginate_1.default)(data, limit, pageNo);
    res.send(data);
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

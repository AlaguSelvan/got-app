"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const characters_json_1 = __importDefault(require("./data/characters.json"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// @ts-ignore
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.get('/Characters', (req, res) => {
    if (req.query.killedBy) {
    }
    res.send(characters_json_1.default);
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

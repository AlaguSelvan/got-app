"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const Character_routes_1 = __importDefault(require("./Routes/Character.routes"));
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
app.use('/Characters', Character_routes_1.default);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

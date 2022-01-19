"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 3001;
const app = (0, express_1.default)();
app.get('/bar-hello', (_, res) => {
    res.send('Hello from Bar!');
});
app.listen(PORT, () => {
    console.log('Bar listening on 3001');
});

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeApiAdapter = exports.PokeApiFetchAdapter = void 0;
const axios_1 = __importDefault(require("axios"));
class PokeApiFetchAdapter {
    get(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield fetch(url);
            const data = yield resp.json();
            return data;
        });
    }
}
exports.PokeApiFetchAdapter = PokeApiFetchAdapter;
class PokeApiAdapter {
    get(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield axios_1.default.get(url);
            return data;
        });
    }
    post(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            //peticion get
            return;
        });
    }
    patch(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            //peticion get
            return;
        });
    }
    delete(url) {
        return __awaiter(this, void 0, void 0, function* () {
            //peticion get
            return;
        });
    }
}
exports.PokeApiAdapter = PokeApiAdapter;

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
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
function fileParser(rootFolder) {
    return __awaiter(this, void 0, void 0, function* () {
        const files = {
            name: rootFolder,
        };
        function parseFolders(directory, rootObj) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("function has started");
                fs.readdirSync(directory).forEach((file) => {
                    const absolute = path.join(directory, file);
                    console.log("in the parse function", absolute);
                    if (fs.statSync(absolute).isDirectory()) {
                        let folderToAdd = { name: file, children: [] };
                        if (!rootObj.children) {
                            rootObj.children = [folderToAdd];
                        }
                        else {
                            rootObj.children.push(folderToAdd);
                        }
                        parseFolders(absolute, folderToAdd);
                    }
                    else {
                        let fileToAdd = { name: file };
                        if (!rootObj.children) {
                            rootObj.children = [fileToAdd];
                        }
                        else {
                            rootObj.children.push(fileToAdd);
                        }
                    }
                });
            });
        }
        yield parseFolders(rootFolder, files);
        console.log('parse folder files:', files);
        return files;
    });
}
exports.default = fileParser;

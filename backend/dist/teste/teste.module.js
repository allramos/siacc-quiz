"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TesteModule = void 0;
const common_1 = require("@nestjs/common");
const teste_service_1 = require("./teste.service");
const teste_controller_1 = require("./teste.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let TesteModule = class TesteModule {
};
exports.TesteModule = TesteModule;
exports.TesteModule = TesteModule = __decorate([
    (0, common_1.Module)({
        controllers: [teste_controller_1.TesteController],
        providers: [teste_service_1.TesteService],
        imports: [prisma_module_1.PrismaModule]
    })
], TesteModule);
//# sourceMappingURL=teste.module.js.map
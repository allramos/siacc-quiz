"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TesteController = void 0;
const common_1 = require("@nestjs/common");
const teste_service_1 = require("./teste.service");
const create_teste_dto_1 = require("./dto/create-teste.dto");
const update_teste_dto_1 = require("./dto/update-teste.dto");
let TesteController = class TesteController {
    constructor(testeService) {
        this.testeService = testeService;
    }
    create(createTesteDto) {
        return this.testeService.create(createTesteDto);
    }
    findAll() {
        return this.testeService.findAll();
    }
    findOne(id) {
        return this.testeService.findOne(+id);
    }
    update(id, updateTesteDto) {
        return this.testeService.update(+id, updateTesteDto);
    }
    remove(id) {
        return this.testeService.remove(+id);
    }
};
exports.TesteController = TesteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_teste_dto_1.CreateTesteDto]),
    __metadata("design:returntype", void 0)
], TesteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TesteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TesteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_teste_dto_1.UpdateTesteDto]),
    __metadata("design:returntype", void 0)
], TesteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TesteController.prototype, "remove", null);
exports.TesteController = TesteController = __decorate([
    (0, common_1.Controller)('teste'),
    __metadata("design:paramtypes", [teste_service_1.TesteService])
], TesteController);
//# sourceMappingURL=teste.controller.js.map
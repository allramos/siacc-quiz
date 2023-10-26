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
exports.QuestaoController = void 0;
const common_1 = require("@nestjs/common");
const questao_service_1 = require("./questao.service");
const create_questao_dto_1 = require("./dto/create-questao.dto");
const update_questao_dto_1 = require("./dto/update-questao.dto");
let QuestaoController = class QuestaoController {
    constructor(questaoService) {
        this.questaoService = questaoService;
    }
    create(createQuestaoDto) {
        return this.questaoService.create(createQuestaoDto);
    }
    findAll() {
        return this.questaoService.findAll();
    }
    findOne(id) {
        return this.questaoService.findOne(+id);
    }
    update(id, updateQuestaoDto) {
        return this.questaoService.update(+id, updateQuestaoDto);
    }
    remove(id) {
        return this.questaoService.remove(+id);
    }
};
exports.QuestaoController = QuestaoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_questao_dto_1.CreateQuestaoDto]),
    __metadata("design:returntype", void 0)
], QuestaoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QuestaoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuestaoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_questao_dto_1.UpdateQuestaoDto]),
    __metadata("design:returntype", void 0)
], QuestaoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuestaoController.prototype, "remove", null);
exports.QuestaoController = QuestaoController = __decorate([
    (0, common_1.Controller)('questao'),
    __metadata("design:paramtypes", [questao_service_1.QuestaoService])
], QuestaoController);
//# sourceMappingURL=questao.controller.js.map
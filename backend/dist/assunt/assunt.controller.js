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
exports.AssuntController = void 0;
const common_1 = require("@nestjs/common");
const assunt_service_1 = require("./assunt.service");
const create_assunt_dto_1 = require("./dto/create-assunt.dto");
const update_assunt_dto_1 = require("./dto/update-assunt.dto");
let AssuntController = class AssuntController {
    constructor(assuntService) {
        this.assuntService = assuntService;
    }
    create(createAssuntDto) {
        return this.assuntService.create(createAssuntDto);
    }
    findAll() {
        return this.assuntService.findAll();
    }
    findOne(id) {
        return this.assuntService.findOne(+id);
    }
    update(id, updateAssuntDto) {
        return this.assuntService.update(+id, updateAssuntDto);
    }
    remove(id) {
        return this.assuntService.remove(+id);
    }
};
exports.AssuntController = AssuntController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_assunt_dto_1.CreateAssuntDto]),
    __metadata("design:returntype", void 0)
], AssuntController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AssuntController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AssuntController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_assunt_dto_1.UpdateAssuntDto]),
    __metadata("design:returntype", void 0)
], AssuntController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AssuntController.prototype, "remove", null);
exports.AssuntController = AssuntController = __decorate([
    (0, common_1.Controller)('assunt'),
    __metadata("design:paramtypes", [assunt_service_1.AssuntService])
], AssuntController);
//# sourceMappingURL=assunt.controller.js.map
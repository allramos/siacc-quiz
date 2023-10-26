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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProfessorService = class ProfessorService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createProfessorDto) {
        return 'This action adds a new professor';
    }
    findAll() {
        return this.prisma.professor.findMany();
    }
    findOne(id) {
        return this.prisma.professor.findUnique({ where: { id } });
    }
    update(id, updateProfessorDto) {
        return this.prisma.professor.update({
            where: { id },
            data: updateProfessorDto,
        });
    }
    remove(id) {
        return this.prisma.professor.delete({ where: { id } });
    }
};
exports.ProfessorService = ProfessorService;
exports.ProfessorService = ProfessorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProfessorService);
//# sourceMappingURL=professor.service.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAlunoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_aluno_dto_1 = require("./create-aluno.dto");
class UpdateAlunoDto extends (0, mapped_types_1.PartialType)(create_aluno_dto_1.CreateAlunoDto) {
}
exports.UpdateAlunoDto = UpdateAlunoDto;
//# sourceMappingURL=update-aluno.dto.js.map
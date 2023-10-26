"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQuestaoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_questao_dto_1 = require("./create-questao.dto");
class UpdateQuestaoDto extends (0, mapped_types_1.PartialType)(create_questao_dto_1.CreateQuestaoDto) {
}
exports.UpdateQuestaoDto = UpdateQuestaoDto;
//# sourceMappingURL=update-questao.dto.js.map
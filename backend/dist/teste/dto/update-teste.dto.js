"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTesteDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_teste_dto_1 = require("./create-teste.dto");
class UpdateTesteDto extends (0, mapped_types_1.PartialType)(create_teste_dto_1.CreateTesteDto) {
}
exports.UpdateTesteDto = UpdateTesteDto;
//# sourceMappingURL=update-teste.dto.js.map
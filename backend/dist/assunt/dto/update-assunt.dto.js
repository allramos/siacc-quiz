"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAssuntDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_assunt_dto_1 = require("./create-assunt.dto");
class UpdateAssuntDto extends (0, mapped_types_1.PartialType)(create_assunt_dto_1.CreateAssuntDto) {
}
exports.UpdateAssuntDto = UpdateAssuntDto;
//# sourceMappingURL=update-assunt.dto.js.map
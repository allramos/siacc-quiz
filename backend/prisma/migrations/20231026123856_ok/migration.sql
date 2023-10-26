-- AlterTable
ALTER TABLE "questao" ALTER COLUMN "assunto_id" DROP DEFAULT,
ALTER COLUMN "autor_id" DROP DEFAULT;
DROP SEQUENCE "questao_assunto_id_seq";
DROP SEQUENCE "questao_autor_id_seq";

-- AlterTable
ALTER TABLE "teste" ALTER COLUMN "aluno_id" DROP DEFAULT,
ALTER COLUMN "assunto_id" DROP DEFAULT;
DROP SEQUENCE "teste_aluno_id_seq";
DROP SEQUENCE "teste_assunto_id_seq";

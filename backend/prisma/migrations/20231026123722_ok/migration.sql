-- DropForeignKey
ALTER TABLE "teste" DROP CONSTRAINT "teste_aluno_id_fkey";

-- DropForeignKey
ALTER TABLE "teste" DROP CONSTRAINT "teste_assunto_id_fkey";

-- AlterTable
ALTER TABLE "teste" ALTER COLUMN "inicio" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "aluno_id" DROP NOT NULL,
ALTER COLUMN "assunto_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "teste" ADD CONSTRAINT "teste_aluno_id_fkey" FOREIGN KEY ("aluno_id") REFERENCES "aluno"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teste" ADD CONSTRAINT "teste_assunto_id_fkey" FOREIGN KEY ("assunto_id") REFERENCES "assunto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

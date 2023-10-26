/*
  Warnings:

  - You are about to drop the column `dificult` on the `questao` table. All the data in the column will be lost.
  - You are about to drop the column `enun` on the `questao` table. All the data in the column will be lost.
  - Added the required column `enunciado` to the `questao` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "questao" DROP CONSTRAINT "questao_assunto_id_fkey";

-- DropForeignKey
ALTER TABLE "questao" DROP CONSTRAINT "questao_autor_id_fkey";

-- AlterTable
ALTER TABLE "questao" DROP COLUMN "dificult",
DROP COLUMN "enun",
ADD COLUMN     "dificuldade" INTEGER DEFAULT 0,
ADD COLUMN     "enunciado" TEXT NOT NULL,
ALTER COLUMN "assunto_id" DROP NOT NULL,
ALTER COLUMN "autor_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "questao" ADD CONSTRAINT "questao_assunto_id_fkey" FOREIGN KEY ("assunto_id") REFERENCES "assunto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questao" ADD CONSTRAINT "questao_autor_id_fkey" FOREIGN KEY ("autor_id") REFERENCES "professor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

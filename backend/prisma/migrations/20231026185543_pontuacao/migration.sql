/*
  Warnings:

  - You are about to drop the column `score` on the `teste` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "aluno" ADD COLUMN     "pontuacao" INTEGER;

-- AlterTable
ALTER TABLE "teste" DROP COLUMN "score",
ADD COLUMN     "pontuacao" INTEGER,
ALTER COLUMN "fim" DROP NOT NULL;

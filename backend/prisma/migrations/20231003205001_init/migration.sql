-- CreateTable
CREATE TABLE "professor" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "professor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aluno" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "aluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questao" (
    "id" SERIAL NOT NULL,
    "enun" TEXT NOT NULL,
    "gabarito" BOOLEAN NOT NULL,
    "assunto_id" INTEGER NOT NULL,
    "dificult" TEXT NOT NULL,
    "autor_id" INTEGER NOT NULL,

    CONSTRAINT "questao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assunto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "assunto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teste" (
    "id" SERIAL NOT NULL,
    "inicio" TIMESTAMP(3) NOT NULL,
    "fim" TIMESTAMP(3) NOT NULL,
    "qtd_questoes" INTEGER,
    "aluno_id" INTEGER NOT NULL,
    "assunto_id" INTEGER NOT NULL,
    "score" INTEGER,

    CONSTRAINT "teste_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "questao" ADD CONSTRAINT "questao_assunto_id_fkey" FOREIGN KEY ("assunto_id") REFERENCES "assunto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questao" ADD CONSTRAINT "questao_autor_id_fkey" FOREIGN KEY ("autor_id") REFERENCES "professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teste" ADD CONSTRAINT "teste_aluno_id_fkey" FOREIGN KEY ("aluno_id") REFERENCES "aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teste" ADD CONSTRAINT "teste_assunto_id_fkey" FOREIGN KEY ("assunto_id") REFERENCES "assunto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AlterTable
CREATE SEQUENCE questao_assunto_id_seq;
CREATE SEQUENCE questao_autor_id_seq;
ALTER TABLE "questao" ALTER COLUMN "assunto_id" SET DEFAULT nextval('questao_assunto_id_seq'),
ALTER COLUMN "autor_id" SET DEFAULT nextval('questao_autor_id_seq');
ALTER SEQUENCE questao_assunto_id_seq OWNED BY "questao"."assunto_id";
ALTER SEQUENCE questao_autor_id_seq OWNED BY "questao"."autor_id";

-- AlterTable
CREATE SEQUENCE teste_aluno_id_seq;
CREATE SEQUENCE teste_assunto_id_seq;
ALTER TABLE "teste" ALTER COLUMN "aluno_id" SET DEFAULT nextval('teste_aluno_id_seq'),
ALTER COLUMN "assunto_id" SET DEFAULT nextval('teste_assunto_id_seq');
ALTER SEQUENCE teste_aluno_id_seq OWNED BY "teste"."aluno_id";
ALTER SEQUENCE teste_assunto_id_seq OWNED BY "teste"."assunto_id";

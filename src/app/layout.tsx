import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import Header from "@/components/header/Header";
import "./globals.css";
import Card from "@/components/card/Card";
import Section from '../components/section/Section';

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Knowly - Página inicial",
  description: "Os melhores cursos de tecnologia gratuítos do Youtube",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.className} antialiased`}>
        <Header />
        <Section>
          <Card
            image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
            title="API Rest, Node e Typescript"
            description={`
              Na primeira aula do curso de API Rest em Node e Typescript vamos ver juntos o escopo do curso e se esse curso faz sentido para você ou não. Quero te apresentar as tecnologias e conceitos que vamos usar no projeto que será desenvolvido ao longo do curso, ainda vamos entender como serão  criados os testes que usaremos para garantir a qualidade do código e no final vamos ver o frontend que eu vou te entregar de brinde para usar com esse backend.
              Links mencionados no vídeo:
              📖 Repositório do projeto - https://github.com/lvsouza/youtube-cu...
              🗨️ Discord -   / discord
            
              Outros cursos no canal:
              🎩 Figma para DEVs -    • Figma para DEVs: #00 - Apresentação d...
              ☪️ Curso de estilização no React -    • Estilização no React: Aula 00 - Curso...
              ⭐️ Curso de React com typescript -    • Curso de react: Aula 01 - Começando c...
              👑 React, Material UI 5 e Typescript -    • React, Material UI 5 e Typescript: #0...
              🏆 Curso de API Rest, Node e Typescript -    • API Rest, Node e Typescript: #00 - Ap...
            
              Livros recomendados:
              📘 Código limpo - https://s.shopee.com.br/1LKnAYYXtW
              📘 Arquitetura limpa - https://s.shopee.com.br/4fbF8sGs4H
              📘 Migrando sistemas monolíticos - https://s.shopee.com.br/606cjP12q9
            
              Conteúdo:
              0:00 | Introdução
              0:27 | Apresentação das tecnologias usadas no curso
              2:20 | Pra quem é o curso?
              4:30 | Sobre a API Rest em Node JS que vamos desenvolver
              5:32 | Qual a proposta do curso?
              7:24 | A cereja do bolo
              8:44 | Outros cursos do canal
              10:00 | Vendo como ficou o projeto
              10:48 | Testando no insominia
              15:30 | Apresentando o frontend de testes
              19:50 | Considerações finais
            
              CODARSE - Introdução e apresentação do projeto
            `}
          />
          <Card
            image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
            title="API Rest, Node e Typescript"
            description={`
              Na primeira aula do curso de API Rest em Node e Typescript vamos ver juntos o escopo do curso e se esse curso faz sentido para você ou não. Quero te apresentar as tecnologias e conceitos que vamos usar no projeto que será desenvolvido ao longo do curso, ainda vamos entender como serão  criados os testes que usaremos para garantir a qualidade do código e no final vamos ver o frontend que eu vou te entregar de brinde para usar com esse backend.
              Links mencionados no vídeo:
              📖 Repositório do projeto - https://github.com/lvsouza/youtube-cu...
              🗨️ Discord -   / discord
            
              Outros cursos no canal:
              🎩 Figma para DEVs -    • Figma para DEVs: #00 - Apresentação d...
              ☪️ Curso de estilização no React -    • Estilização no React: Aula 00 - Curso...
              ⭐️ Curso de React com typescript -    • Curso de react: Aula 01 - Começando c...
              👑 React, Material UI 5 e Typescript -    • React, Material UI 5 e Typescript: #0...
              🏆 Curso de API Rest, Node e Typescript -    • API Rest, Node e Typescript: #00 - Ap...
            
              Livros recomendados:
              📘 Código limpo - https://s.shopee.com.br/1LKnAYYXtW
              📘 Arquitetura limpa - https://s.shopee.com.br/4fbF8sGs4H
              📘 Migrando sistemas monolíticos - https://s.shopee.com.br/606cjP12q9
            
              Conteúdo:
              0:00 | Introdução
              0:27 | Apresentação das tecnologias usadas no curso
              2:20 | Pra quem é o curso?
              4:30 | Sobre a API Rest em Node JS que vamos desenvolver
              5:32 | Qual a proposta do curso?
              7:24 | A cereja do bolo
              8:44 | Outros cursos do canal
              10:00 | Vendo como ficou o projeto
              10:48 | Testando no insominia
              15:30 | Apresentando o frontend de testes
              19:50 | Considerações finais
            
              CODARSE - Introdução e apresentação do projeto
            `}
          />
          <Card
            image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
            title="API Rest, Node e Typescript"
            description={`
              Na primeira aula do curso de API Rest em Node e Typescript vamos ver juntos o escopo do curso e se esse curso faz sentido para você ou não. Quero te apresentar as tecnologias e conceitos que vamos usar no projeto que será desenvolvido ao longo do curso, ainda vamos entender como serão  criados os testes que usaremos para garantir a qualidade do código e no final vamos ver o frontend que eu vou te entregar de brinde para usar com esse backend.
              Links mencionados no vídeo:
              📖 Repositório do projeto - https://github.com/lvsouza/youtube-cu...
              🗨️ Discord -   / discord
            
              Outros cursos no canal:
              🎩 Figma para DEVs -    • Figma para DEVs: #00 - Apresentação d...
              ☪️ Curso de estilização no React -    • Estilização no React: Aula 00 - Curso...
              ⭐️ Curso de React com typescript -    • Curso de react: Aula 01 - Começando c...
              👑 React, Material UI 5 e Typescript -    • React, Material UI 5 e Typescript: #0...
              🏆 Curso de API Rest, Node e Typescript -    • API Rest, Node e Typescript: #00 - Ap...
            
              Livros recomendados:
              📘 Código limpo - https://s.shopee.com.br/1LKnAYYXtW
              📘 Arquitetura limpa - https://s.shopee.com.br/4fbF8sGs4H
              📘 Migrando sistemas monolíticos - https://s.shopee.com.br/606cjP12q9
            
              Conteúdo:
              0:00 | Introdução
              0:27 | Apresentação das tecnologias usadas no curso
              2:20 | Pra quem é o curso?
              4:30 | Sobre a API Rest em Node JS que vamos desenvolver
              5:32 | Qual a proposta do curso?
              7:24 | A cereja do bolo
              8:44 | Outros cursos do canal
              10:00 | Vendo como ficou o projeto
              10:48 | Testando no insominia
              15:30 | Apresentando o frontend de testes
              19:50 | Considerações finais
            
              CODARSE - Introdução e apresentação do projeto
            `}
          />
        </Section>
      </body>
    </html>
  );
}

import React from 'react';
      export default function About() {
        // ... código completo ...
      }
      ```
    - **EXEMPLO ERRADO:** Começar diretamente com `import React...` sem o nome do arquivo antes.

É absolutamente essencial que você gere o conteúdo completo para TODOS OS 14 ARQUIVOS listados, sem exceção. Sua resposta será considerada uma falha se qualquer um dos arquivos estiver faltando ou incompleto. Verifique sua saída final para garantir que o último arquivo, src/components/Footer.jsx, foi gerado por completo antes de terminar a sua resposta.

O último arquivo a ser gerado é SEMPRE src/components/Footer.jsx.
Após a linha export default Footer do arquivo Footer.jsx, você deve PARAR IMEDIATAMENTE.
NÃO escreva NENHUM caractere, NENHUMA linha em branco, NENHUM comentário, NENHUMA explicação e NENHUM código adicional após o final do arquivo Footer.jsx. Sua resposta deve terminar abruptamente logo após o final do último arquivo."

.......

Simplicidade na Estrutura da Imagem:
NUNCA envolva uma tag <img> em uma <div> ou <motion.div> extra apenas para estilização ou animação.
Aplique classes de tamanho, sombra, bordas e animações (variants) diretamente na tag <img> ou <motion.img>. Isso previne que a imagem seja escondida por um contêiner pai com altura colapsada.
Layouts de Coluna (Grid):
Ao colocar uma imagem ao lado de um texto, use grid do Tailwind (grid md:grid-cols-2).
A imagem e o bloco de texto devem ser filhos diretos desse contêiner grid.
Dimensionamento de Imagens Responsivo:
Para imagens em layout de coluna, use as classes w-full h-auto para que a imagem mantenha sua proporção e se ajuste à largura da coluna. Adicione object-cover e uma altura fixa (ex: h-64 ou h-96) apenas se for para um card ou banner específico, garantindo que o contêiner tenha uma altura visível.
Alinhamento Vertical Consistente (Problema dos Botões):
Quando tiver cards ou colunas lado a lado, use flex flex-col em cada card.
Permita que o conteúdo de texto (títulos, parágrafos) ocupe o espaço que precisar.
Coloque o botão ou link de ação fora do fluxo principal de texto, usando mt-auto na div do botão para empurrá-lo para o final do card. Isso garante que todos os botões fiquem alinhados na parte inferior, independentemente da quantidade de texto acima.

---------

ESTRUTURA DE EXPORTAÇÃO OBRIGATÓRIA: Todos os componentes React devem ser declarados e exportados em uma única linha usando a sintaxe 'export default function NomeDoComponente() { ... }'. NUNCA use 'const NomeDoComponente = () => ...' seguido de 'export default NomeDoComponente;' em outra linha.
E para garantir, adicione um exemplo claro:
Exemplo de estrutura CORRETA e OBRIGATÓRIA: export default function MeuComponente() {   return (     <div>Olá, mundo!</div>   ); }

.....

Regras para imagens:
Todas as imagens, especialmente a logo, DEVEM ser inseridas no código usando a URL completa fornecida. NUNCA use caminhos locais como /logo.png ou /imagem.svg.
Exemplo CORRETO:
<img src="https://qotdwocbcoirjlqjkjhq.supabase.co/.../logo.png" alt="NOME EMPRESA" />
Exemplo ERRADO:
<img src="/logo.png" alt="NOME EMPRESA" />

IMPORTANTE: CUIDADO PARA NAO ALUCIONAR E DEDUZIR A URL ERRADA.. VAO TER IMAGENS EM: https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/
E OUTRAS IMAGENS EM: https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/

Eu estou passando a url certa para voce aqui. Cuidado para nao montar a url final errada!!!

Use somente imagens que lhe forem passadas

.....


.....

VERIFICAÇÃO DE IMPORTS: Antes de finalizar, verifique se todos os arquivos que você importa em App.jsx (como Header, Hero, About, Services, Contact, Footer) correspondem EXATAMENTE aos nomes dos arquivos que você gerou na pasta src/components/. Os nomes dos arquivos e os nomes nos import devem ser idênticos, incluindo letras maiúsculas e minúsculas.

Você está escrevendo arquivos para um sistema que faz o parse de forma automática. 

FORMATO ESTRITO:
- Coloquei o index.html na raiz, nunca dentro de public ou src.
- Escreva o caminho do arquivo (ex: src/main.tsx) em uma linha sozinha.
- Logo abaixo, escreva o conteúdo do arquivo, sem crases, sem comentários acima.
- Separe cada arquivo com uma linha em branco.
- Nunca use blocos markdown ou explicações entre os arquivos.
.....

DESIGN

- Se for colocar um menu fixo no topo, que ele seja imperceptivel antes da rolagem da pagina, ou seja, que ele tenha o mesmo fundo da area logo abaixo dele. Aí quando a pagina começar a rolar, ele pode mudar de cor.

- Faça microanimaçoes e efeitos para deixar o site dinamico. 

- Você pode ficar livre para colocar símbolos como achar melhor par enriquecer o conteúdo. Como símbolos de organização, símbolos e desenhos para representar algo. 

-  Não faça contraste nulo: é estritamente proibido usar texto branco sobre fundo branco em qualquer botão ou elemento interativo.

- Voce custuma errar aqui, principalmente quando faz um botao branco que antes do mouse ir em cima o texto esta branco e sendo assim nao aparece. Somentequando o mouse vai em cima que o texto fica de outro cor e é possivel ver. 

- A maioria das landing pages não requer menu superior completo — mas, se houver, ele deve ser fixo no topo, com rolagem suave até seções da própria página.

- Evite menus com muitos itens: limite-se a âncoras internas como "Benefícios", "Depoimentos", "Como Funciona", "Contato".

- Não utilize mega menus ou dropdowns. Isso não se aplica a landing pages.

- Todo botão deve estar visível e legível em seu estado normal (sem hover). O hover pode mudar a cor do texto ou fundo, mas o estado inicial precisa garantir contraste e legibilidade.

- Cuidado para não colocar um texto branco em um botao com fundo branco. E um texto preto em um botao com fundo preto.
- Ao clicar em qualquer botão ou âncora, a página deve rolar suavemente até o topo da seção correspondente — nunca para o meio ou de forma abrupta.

- Faça testes reais em modo claro e escuro para garantir acessibilidade.

- Foco em alinhamento. Sempre deixe tudo super alinhado. Voce costuma errar no alinhamento dos botões entre quadros conforme o anexo. Para solucionar, é só vc alinhar o botão sempre no bottom do campo e deixar os campos sempre do mesmo tamanho. O texto pode ser um maior e outro menor, mas o campo, a imagem e o botão devem estar sempre alinhados e do mesmo tamanho. 

- Todos os botões devem levar a ações claras e funcionais: formulário, WhatsApp, checkout, etc.
- Se houver formulário de contato, verifique se ele está funcionando e com feedback visual de envio/sucesso/erro.

- Coloque somente os ícones das redes sociais que voce tem.

*** Estou te mandando links de imagens que mostram as coisas que vc nao deve fazer de jeito nenhum nesse site: 1- Deixar o logo muito pequeno: https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/erros//precisa%20aumentar%20mais%20a%20logo.png 
2- Colocar texto branco em cima de botão branco: https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/erros//fundo%20branco%20texto%20branco.png
3- Desalinhar horizontalmente o botão entre os botões de várias células que deveriam estar alinhadas: https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/erros//botoes%20desalinhados.png e olhe aqui tambem: https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/erros//you%20need%20to%20align%20the%20bottoms%20in%20the%20bottom.png 
4- Colocar elementos do lado da logo. A logo já é o nome da empresa, não preisa colocar o nome da empresa do lado dela escrito: https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/erros//Elementos%20desnecessarios%20perto%20da%20imagem%20da%20logo.png
5- Mesma problmea com a logo no rodape: https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/erros//Nome%20da%20empresa%20do%20lado%20do%20logo%20que%20ja%20tem%20o%20nome%20da%20empresa.png

 O site deve estar com tudo na lingua: pt-BR

Para a decidir as cores do site, use as cores da logo, pois a parte visual do site deve estar alinhada com a logo: O logo tem um design moderno e limpo, ideal para inspirar um site que foque em clareza e simplicidade. Ele apresenta uma combinação de duas principais cores:

1. **Fundo e Base do Retângulo Interno**: Um azul claro (#5DAFEF) que traz uma sensação de tranquilidade e profissionalismo. Essa cor pode ser usada como base no esquema de cores do site, mantendo os elementos visuais harmônicos.

2. **Texto "NTC BRASIL" e Branco no Retângulo**: A parte central do logo é preenchida com branco (#FFFFFF). Isso realça o texto e proporciona um forte contraste com o fundo azul. Para o site, o branco pode ser utilizado em espaços de respiro e fundos de texto para melhorar a legibilidade.

### Sugestões de Design para o Site:
- **Tipografia**: Escolha uma fonte sem serifa, robusta e moderna, semelhante à utilizada no logo, para manter a coerência visual.
- **Layout**: Limpo e espaçoso, aproveitando áreas em branco para destacar conteúdos importantes e melhorar a navegação.
- **Botões e Ícones**: Use o azul principal do logo para botões e destaques, mantendo o minimalismo e a harmonia cromática.

Essas diretrizes ajudam a criar um site que esteja perfeitamente alinhado com a identidade visual do logo, transmitindo profissionalismo e clareza.  

Você deve ter um cor primaria onde por volta de  60% do site vai ser ela, e ela deve vir da logo, na maoria das vezes essa cor é branco. Uma cor secundaria que tambem deve vir da logo, onde por volta de 30% do site vai ser com ela. E uma ou duas cores de "accent" que vai representar em torno de 10% do site. Se a logo tiver 3 cores, vc usa as 3 da logo. Se a logo tiver somente 2 cores, vc ve qual cor encaixar melhor para o "accent", se a logo tiver somente uma cor, voce deve pensar que provavelmente é uma marca minimalista e moderna, cuidado para se essa u nica cor for preta, vc nao colocar o background preto, se a unica cor da logo for preta, a sua cor de 60% deve ser branca e a de 30% preta e provavelmente a cor de accent um gradiente que combine com o setor da empresa. Agora vamos super que a unica cor da logo seja branco. O contrario ja nao funcioona, usar o background preto eh mt pesado.. Entao se a cor da logo for somente branca, voce deve usar um background que de contraste mas sem ser preto. Seja criativo e um otimo design. Pense no setor da empresa. Gradientes em texto sao bem vindos. Use-os para configurar o arquivo tailwind.config.js

Pegue a logo nesse link: https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1752816669584_0.png

As informações gerais da empresa: **Informações Detalhadas da Empresa:**

- **Nome da Empresa:** NTC Brasil
- **Setor de Atuação:** Construção
- **Especialidade:** [Inserir especialidade se disponível]

**Grupos de Produtos ou Serviços:**

Já que a empresa indicou não possuir produtos ou serviços específicos para exibição no site, a informação aqui pode ser omitida.

**Produtos ou Serviços dentro de Cada Grupo:**

Não aplicável.

**Chamadas do Herói, Chamadas para Ação, Frases de Impacto:**

- "Construindo Sonhos, Edificando Realidades"
- "Qualidade e Excelência em Cada Tijolo"
- "Transforme Sua Visão em Estrutura Concreta"
- "Entre em Contato e Construa Conosco!"
- "Sua Obra Começa Aqui!"

**Profissionais Envolvidos e Seus Dados:**

Não há dados fornecidos sobre os profissionais envolvidos.

**Todos os Telefones de Contato da Empresa:**

- +55 44 99104 0774

**E-mail para Ser Usado no Formulário:**

- ffbrunoff@yahoo.com.br

**Todos os Links das Redes Sociais:**

Não foram fornecidos usernames ou links das redes sociais. Caso a empresa possua presença em redes sociais, é recomendável adicioná-los para melhor interatividade com o público.

**Observação:**

Como a empresa NTC Brasil não disponibilizou detalhes específicos acerca de produtos ou serviços, o site será uma página única focando em apresentar a empresa, destacando sua especialidade no setor de construção e facilitando o contato.

Crie Sessões dentro da landing page para somente esses produtos ou serviços: Essa empresa não tem produtos ou serviços. Provavelmente o site vai ter somente uma pagina.

Se precisar da descricao dos produtos, sao essas: (essa empresa nao tem produtos os servicos. Nao precisa criar pagina de produtos )

Aqui está as fotos de cada um desses produtos: (essa empresa nao tem produtos os servicos. Nao precisa criar pagina de produtos)

Se o site for ter um parte que fala de um profissional, seja um autor, um medico, o qualquer equipe ou profissional liberal ou autonomo, você deve pegar as fotos de cada profissional aqui e pelo publicUrl: []  Na propria url tem o nome de quem é o profissional na foto.

Localização: padre lebret 801 g05 bloco 03

-----------

Antes de finalizar, Verifique se o código está sintaticamente correto.

Teste se o código compila sem erros.

Gere o código React, mas certifique-se de que todas as strings CSS estão com escape correto e sem conflitos de aspas. Se usar SVGs inline, use aspas simples internas.
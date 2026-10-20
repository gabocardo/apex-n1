# APEX N1 - landing page

Site acadêmico da equipe APEX da FIAP, feito em HTML, CSS e JavaScript puro. Sem frameworks, instalação de pacotes, fontes externas ou etapa de compilação. Funciona como arquivo local e no GitHub Pages.

## 1. Testar no computador

1. Extraia o ZIP, se estiver usando o pacote compactado.
2. Abra a pasta `apex-n1`.
3. Dê dois cliques em `index.html` para abrir no navegador.
4. Teste os links do menu, o botão “Explore o funcionamento” e o fluxograma do processo.
5. Reduza a largura da janela: em telas pequenas, use o botão “Menu”. Escape fecha o menu. Teste também a navegação com Tab e Enter.
6. Depois de editar um arquivo, salve e atualize a página no navegador.

Opcional: com Python 3 instalado, abra o terminal dentro da pasta `apex-n1` e execute `python -m http.server 8000 --bind 127.0.0.1` (no Windows, pode ser necessário usar `py` no lugar de `python`). Acesse `http://127.0.0.1:8000`. Encerre com Ctrl+C. Esse endereço só funciona no próprio computador; não o use no QR Code do evento.

## 2. Estrutura

```text
apex-n1/
  index.html       Conteúdo, seções e placeholders
  styles.css       Visual e adaptações para diferentes telas
  script.js        Menu em telas pequenas
  .nojekyll        Publicação dos arquivos estáticos sem Jekyll
  README.md        Este guia
  assets/         Pasta para os arquivos reais da equipe
```

Todos os caminhos são relativos, para funcionar também em `usuario.github.io/apex-n1/`.

## 3. Substituir os placeholders

A apresentação usa a origem do desafio e o pitch fornecidos pela equipe. NEMA 17, ESP32 e painel integrado são descritos conforme esse material. Eficiência, redução de intervenções e custo acessível são objetivos, sem resultados quantitativos declarados. A equipe confirmou a integração de uma tela de controle remoto baseada em ESP com tela LCD, com comando de parada de emergência, leituras de temperatura e tensão em tempo real e acionamento de cada parte do processo. A seção apresenta essas funções implementadas. Não atribui ao controle remoto análise por IA, previsão de falhas ou estimativa de desgaste, pois essas capacidades não foram confirmadas na atualização. A seção sobre a Festo destaca a origem do desafio (relato da equipe) e sua atuação em formação técnica, consultada na [página oficial da Festo Didactic](https://www.festo.com/br/pt/e/formacao-tecnica-id_3776). Não presume patrocínio, certificação ou aprovação da máquina pela empresa. Os números de mercado e a citação do fundador não foram incorporados. A abertura contém um espaço reservado para uma foto real da máquina. As quatro etapas são uma descrição conceitual, não uma especificação validada da APEX N1. Nenhum número de desempenho, resultado de ensaio ou componente foi presumido.

Procure em `index.html` por `PLACEHOLDER`, `PENDENTE`, `A definir`, `A completar`, `A detalhar` e `A informar`.

| Conteúdo | Onde alterar |
| --- | --- |
| Logo | A imagem enviada está em `assets/logo-apex.png` e aparece no cabeçalho. |
| Foto principal | Substitua o conteúdo de `.hero-photo-slot` por uma imagem real. Atualize a legenda de `.hero-visual`. |
| Problema e solução | A origem do desafio e os artigos de `#projeto` foram preenchidos com o relato e o pitch da equipe. Revise conforme o projeto evoluir. |
| Controle remoto | A seção `.evolution` descreve as funções confirmadas. Substitua o conteúdo de `.lcd-screen` pela captura real e atualize a legenda. |
| Funcionamento | Revise os quatro itens em `.flow-steps` e descreva os mecanismos efetivamente utilizados. |
| Fotos | Substitua `.placeholder-body` nas figuras da galeria e atualize as legendas e o status “Pendente”. |
| Vídeo | Substitua o placeholder de vídeo por um player real, sem reprodução automática. |
| Integrantes | Existem cinco cartões `.member-card`. Preencha nome, função, descrição, foto e LinkedIn de cada pessoa. |
| Rodapé | Atualize a indicação de conteúdo em preenchimento quando a revisão estiver concluída. |

Exemplo de imagem (adicione o arquivo antes de inserir o trecho):

```html
<img src="assets/maquina.webp" alt="Descreva o que aparece na foto real da APEX N1" width="1200" height="800" loading="lazy">
```

Ajuste `width` e `height` para as dimensões reais. Para a imagem principal, omita `loading="lazy"`. Acrescente ao CSS, conforme o enquadramento desejado:

```css
.hero-visual img, .media-placeholder img {
  display: block;
  width: 100%;
  height: auto;
}
```

Exemplo de vídeo, depois de adicionar os arquivos reais:

```html
<video controls preload="metadata" poster="assets/maquina.webp"
       style="display:block;width:100%" aria-label="Demonstração da APEX N1">
  <source src="assets/demonstracao.mp4" type="video/mp4">
  Seu navegador não suporta vídeo. <a href="assets/demonstracao.mp4">Baixe a demonstração.</a>
</video>
```

Se houver fala, adicione legendas WebVTT com `<track kind="captions" src="assets/legendas.vtt" srclang="pt-BR" label="Português" default>`, além de uma transcrição. Use imagens comprimidas e um vídeo leve para quem acessar pelo celular no evento. A página inicial não depende de nenhuma mídia externa.

As cores estão nas variáveis do início de `styles.css`. A paleta vermelha, preta e prata foi inspirada na logo fornecida.

## 4. Publicar no GitHub Pages

1. Entre na sua conta do GitHub e crie um repositório chamado `apex-n1`. Para usar GitHub Pages no plano gratuito, escolha um repositório público.
2. Abra o repositório e selecione **Add file → Upload files** (em um repositório vazio, use o link para enviar arquivos).
3. Envie o **conteúdo** de `apex-n1`, mantendo `index.html`, `styles.css` e `script.js` na raiz. Não envie apenas o ZIP nem coloque outra pasta `apex-n1` dentro do repositório. Preserve a pasta `assets`.
4. Inclua `.nojekyll`; se o sistema ocultar esse arquivo, crie-o pelo GitHub em **Add file → Create new file**, com esse nome e uma linha em branco.
5. Confirme os arquivos em **Commit changes**, na branch `main`.
6. Acesse **Settings → Pages**.
7. Em **Build and deployment → Source**, selecione **Deploy from a branch**.
8. Em **Branch**, escolha `main` e a pasta **/(root)**. Clique em **Save**.
9. Aguarde a conclusão da publicação. Confira a aba **Actions** caso o processo apresente erro.
10. Volte a **Settings → Pages** e abra a URL exibida. Ela normalmente terá o formato `https://SEU-USUARIO.github.io/apex-n1/`; use a URL real mostrada pelo GitHub.
11. Teste essa URL no celular e confirme imagens, menu e todas as seções.

As etapas de configuração foram conferidas na [documentação oficial do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). A publicação não foi executada nesta entrega.

### Atualizar depois

Edite ou envie os arquivos alterados no mesmo repositório e confirme as mudanças. O Pages publicará a atualização. Mantendo a mesma URL, o QR Code continua funcionando. Se o estilo parecer antigo, atualize com Ctrl+F5.

### Problemas comuns

- **404:** confirme `index.html` na raiz, branch `main`, pasta `/(root)` e publicação concluída em Actions.
- **Imagem não aparece:** confira caminho e letras maiúsculas/minúsculas. `Maquina.webp` e `maquina.webp` são nomes diferentes no servidor.
- **Site sem estilo:** mantenha `styles.css` junto de `index.html` e preserve `href="styles.css"`.
- **Mudanças ainda não aparecem:** confira o último processo em Actions e atualize o navegador após a conclusão.

## 5. Gerar o QR Code para o evento

1. Publique primeiro e copie a URL HTTPS definitiva exibida pelo GitHub Pages.
2. Abra a URL e confirme que o site funciona sem entrar na sua conta.
3. Use um gerador de QR Code que ofereça **QR estático para URL**. Cole a URL completa do site publicado, não a URL do repositório nem o endereço local.
4. Exporte em SVG para impressão ou PNG em alta resolução. Preserve a margem branca e um contraste forte; evite sobrepor o logo ao código.
5. Coloque a URL em texto abaixo do QR Code como alternativa de acesso.
6. Teste com celulares diferentes e imprima uma amostra no tamanho e na distância de leitura previstos antes de produzir o material final.

Não há QR Code final no pacote porque a URL publicada ainda não existe. Um QR estático aponta diretamente para a URL escolhida e não precisa mudar quando o conteúdo do site é atualizado nesse mesmo endereço.

## 6. Conferência antes do evento

- [ ] Substituir fotos, vídeo e integrantes.
- [ ] Validar problema, solução e descrições das etapas com a equipe.
- [ ] Preencher apenas especificações e resultados comprovados.
- [ ] Conferir leitura em celular, teclado e fluxograma.
- [ ] Testar a URL publicada e o QR Code impresso.

O conteúdo permanece legível sem JavaScript. O menu usa `aria-expanded`, há link para pular ao conteúdo, foco visível e respeito à preferência por movimento reduzido. Não há formulários, rastreamento ou coleta de dados.

### Leitura e interação

A logo usa cantos arredondados via CSS, preservando o arquivo original. As etapas do fluxograma possuem detalhes expansíveis por clique ou teclado. Os efeitos de destaque respeitam a preferência por movimento reduzido; o conteúdo e as expansões funcionam sem JavaScript.

### Cinco integrantes

Em cada cartão de equipe, substitua o bloco .member-photo por uma foto real com alt descritivo. Preencha nome, função e apresentação. Substitua o span .linkedin-pending por um link real, por exemplo:

```html
<a class="member-linkedin" href="URL_REAL_DO_PERFIL" target="_blank" rel="noopener noreferrer">Ver LinkedIn de NOME (abre em nova aba)</a>
```

Não há perfis fictícios ou links ativos enquanto os endereços não forem fornecidos.

Logo Festo: arquivo original obtido no [portal oficial de imprensa](https://press.festo.com/sites/default/files/piipe_branding/image/logo-festo.svg), salvo em assets/logo-festo.svg.
Os cinco cartões ficam em uma fileira horizontal compacta. Navegue deslizando, usando a barra de rolagem ou as setas. A fileira aceita foco por teclado; as setas ficam desativadas ao alcançar cada extremidade.
O cabeçalho inclui a logo da Festo com link para a seção do desafio. Os cartões usam o ícone azul original do LinkedIn, obtido em https://static.licdn.com/scds/common/u/images/logos/linkedin/logo-in-win8-tile-144_v1.png e salvo localmente em assets/linkedin.png.

## Preparação das imagens

A página já reserva os enquadramentos sem inventar fotos ou uma interface funcional. Use os atributos data-media-slot para localizar a abertura, as quatro etapas e a tela do controle. Substitua o conteúdo do espaço por uma imagem, removendo os textos de espera correspondentes.

- Abertura: foto horizontal, de preferência com toda a máquina visível. O enquadramento usa object-fit: contain.
- Etapas: recortes horizontais 16:9 mostrando alimentação, embalagem, selagem e corte.
- Controle: foto real do ESP com LCD ou captura da interface. O espaço ilustrativo é horizontal, sem simular valores dos sensores. Ajuste a proporção ao equipamento real quando a foto chegar.
- Equipe: cinco fotos com proporção 4:3, mesmo fundo e enquadramento. Os cartões continuam compactos e deslizantes.
- Galeria: vídeo de demonstração e registros de montagem.

Exemplo: `<img src="assets/alimentacao.webp" alt="Descrição da etapa real de alimentação" loading="lazy">`. Para a foto de abertura, não use loading="lazy". Os estilos de enquadramento já estão definidos.

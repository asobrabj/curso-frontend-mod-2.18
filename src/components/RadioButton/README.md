## Propriedades do Componente RadioButton

O componente `RadioButton` aceita as seguintes propriedades:

### Propriedades Gerais

- **listOptions**
  - *Tipo:* Array de strings
  - *Descrição:* Lista de opções disponíveis para os botões de rádio.

- **name**
  - *Tipo:* string
  - *Descrição:* Nome do grupo de botões de rádio. Os botões com o mesmo nome pertencem ao mesmo grupo.

### Propriedades de Estilo

- **fs**
  - *Tipo:* "xsmall" | "small" | "medium" | "larger" | string
  - *Descrição:* Define o tamanho da fonte dos botões de rádio.

- **fStyle**
  - *Tipo:* "normal" | "italic"
  - *Descrição:* Define o estilo da fonte dos botões de rádio.

- **fw**
  - *Tipo:* "medium" | "larger"
  - *Descrição:* Define a espessura da fonte dos botões de rádio.

- **fFamily**
  - *Tipo:* string
  - *Descrição:* Define a família da fonte dos botões de rádio.

### Propriedades de Alinhamento e Transformação de Texto

- **tAlign**
  - *Tipo:* "start" | "end" | "justify" | "center"
  - *Descrição:* Define o alinhamento do texto dos botões de rádio.

- **tTransform**
  - *Tipo:* "none" | "capitalize" | "uppercase" | "lowercase"
  - *Descrição:* Define a transformação do texto dos botões de rádio.

### Propriedades de Cor e Fundo

- **color**
  - *Tipo:* string
  - *Descrição:* Define a cor do texto dos botões de rádio.

- **bgColor**
  - *Tipo:* string
  - *Descrição:* Define a cor de fundo dos botões de rádio.

### Propriedades de Espaçamento

- **pd, pdTop, pdRight, pdBottom, pdLeft**
  - *Tipo:* "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - *Descrição:* Define o preenchimento (padding) dos botões de rádio.

- **mg, mgTop, mgRight, mgBottom, mgLeft**
  - *Tipo:* "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - *Descrição:* Define a margem dos botões de rádio.

### Classes Predefinidas para Estilos Específicos

- **&.scale**
  - *Descrição:* Aplica um estilo que escala os botões de rádio, exibindo-os de forma centralizada e espaçada uniformemente.

- **&.options**
  - *Descrição:* Aplica um estilo específico para apresentar as opções dos botões de rádio. As opções são exibidas em blocos, com margens e alinhamento específicos.

- **&.primary**
  - *Descrição:* Aplica um estilo primário aos botões de rádio, com borda arredondada e outros estilos definidos internamente.

- **&.secondary**
  - *Descrição:* Aplica um estilo secundário aos botões de rádio, com borda arredondada e outros estilos definidos internamente.

```jsx
<RadioButton listOptions={['Option 1', 'Option 2']} name="group1" className="primary scale" />
```

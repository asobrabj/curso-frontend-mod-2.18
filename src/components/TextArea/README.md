## Propriedades do Componente TextArea

O componente `TextArea` aceita as seguintes propriedades:

### Propriedades Gerais

- **fs**
  - *Tipo:* "xsmall" | "small" | "medium" | "larger" | string
  - *Descrição:* Define o tamanho da fonte do componente.

- **fStyle**
  - *Tipo:* "normal" | "italic"
  - *Descrição:* Define o estilo da fonte do componente.

- **fw**
  - *Tipo:* "medium" | "larger"
  - *Descrição:* Define a espessura da fonte do componente.

- **fFamily**
  - *Tipo:* string
  - *Descrição:* Define a família da fonte do componente.

### Propriedades de Alinhamento e Transformação de Texto

- **tAlign**
  - *Tipo:* "start" | "end" | "justify" | "center"
  - *Descrição:* Define o alinhamento do texto do componente.

- **tTransform**
  - *Tipo:* "none" | "capitalize" | "uppercase" | "lowercase"
  - *Descrição:* Define a transformação do texto do componente.

### Propriedades de Cor e Fundo

- **color**
  - *Tipo:* string
  - *Descrição:* Define a cor do texto do componente.

- **bgColor**
  - *Tipo:* string
  - *Descrição:* Define a cor de fundo do componente.

### Propriedades de Espaçamento

- **pd, pdTop, pdRight, pdBottom, pdLeft**
  - *Tipo:* "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - *Descrição:* Define o preenchimento (padding) do componente.

- **mg, mgTop, mgRight, mgBottom, mgLeft**
  - *Tipo:* "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - *Descrição:* Define a margem do componente.

- **width, height**
  - *Tipo:* string
  - *Descrição:* Define a largura e a altura do componente.

- **className**
  - *Tipo:* string
  - *Descrição:* Define a classe do componente.

- **placeholder**
  - *Tipo:* string
  - *Descrição:* Define o texto de placeholder do componente.

- **resize**
  - *Tipo:* "both" | "none" | "vertical" | "horizontal"
  - *Descrição:* Define a capacidade de redimensionamento do componente.

- **bdColor**
  - *Tipo:* string
  - *Descrição:* Define a cor da borda do componente.

### Estados de Estilo

- **primary, secondary, error, rounded**
  - *Tipo:* boolean
  - *Descrição:* Define o estilo do componente com base em diferentes estados.

### Estados Internos

- **none**

### Elementos Filhos

- **TextArea**
  - *Tipo:* Componente de área de texto estilizado.

```jsx
<TextArea
  fs="medium"
  fw="medium"
  bgColor="#f5f5f5"
  pd="medium"
  mg="medium"
  width="300"
  height="150"
  placeholder="Type here..."
  resize="both"
  bdColor="#cccccc"
/>
```
## Propriedades do Componente Input

O componente `Input` aceita as seguintes propriedades:

### Propriedades Gerais

- **fs**
  - *Tipo:* "xsmall" | "small" | "medium" | "larger" | string
  - *Descrição:* Define o tamanho da fonte do input.

- **fStyle**
  - *Tipo:* "normal" | "italic"
  - *Descrição:* Define o estilo da fonte do input.

- **fw**
  - *Tipo:* "medium" | "larger"
  - *Descrição:* Define a espessura da fonte do input.

- **fFamily**
  - *Tipo:* string
  - *Descrição:* Define a família da fonte do input.

### Propriedades de Alinhamento e Transformação de Texto

- **tAlign**
  - *Tipo:* "start" | "end" | "justify" | "center"
  - *Descrição:* Define o alinhamento do texto no input.

- **tTransform**
  - *Tipo:* "none" | "capitalize" | "uppercase" | "lowercase"
  - *Descrição:* Define a transformação do texto no input.

### Propriedades de Cor e Fundo

- **color**
  - *Tipo:* string
  - *Descrição:* Define a cor do texto no input.

- **bgColor**
  - *Tipo:* string
  - *Descrição:* Define a cor de fundo do input.

### Propriedades de Espaçamento

- **pd, pdTop, pdRight, pdBottom, pdLeft**
  - *Tipo:* "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - *Descrição:* Define o preenchimento (padding) do input.

- **mg, mgTop, mgRight, mgBottom, mgLeft**
  - *Tipo:* "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - *Descrição:* Define a margem do input.

### Propriedades Adicionais

- **width, height**
  - *Tipo:* string
  - *Descrição:* Define a largura e altura do input.

- **placeholder**
  - *Tipo:* string
  - *Descrição:* Define o texto de espaço reservado do input.

- **bdColor**
  - *Tipo:* string
  - *Descrição:* Define a cor da borda do input.

- **type**
  - *Tipo:* "text" | "tel" | "password" | "email" | "time" | "date" | "radio" | "checkbox" | "file" | "hidden" | "number"
  - *Descrição:* Define o tipo do input.

- **required**
  - *Tipo:* boolean
  - *Descrição:* Indica se o input é obrigatório.

### Classes Predefinidas para Estilos Específicos

- **&.primary**
  - *Descrição:* Aplica um estilo primário ao input, com borda arredondada e cor de borda configurável.

- **&.secondary**
  - *Descrição:* Aplica um estilo secundário ao input, com borda arredondada, cor de borda configurável e borda inferior sem arredondamento.

- **&.error**
  - *Descrição:* Aplica um estilo de erro ao input, com borda vermelha e cor de texto vermelha. O estilo da borda é intensificado quando o input está em foco.

- **&.rounded**
  - *Descrição:* Aplica um estilo com bordas arredondadas ao input.

- **&:focus**
  - *Descrição:* Define o estilo do input quando está em foco, com uma borda mais espessa e cor configurável.

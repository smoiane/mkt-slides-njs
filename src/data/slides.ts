export interface SlideData {
  id: number;
  type: 'cover' | 'content' | 'section' | 'closing' | 'matrix' | 'media';
  title: string;
  subtitle?: string;
  content?: string[];
  justification?: string;
  theory?: string;
  imageAlt: string;
  category?: string;
  mediaUrl?: string; // Novo: Caminho do ficheiro ou Link YT
}

export const slides: SlideData[] = [
  {
    id: 1,
    type: 'cover',
    title: 'Marketing Sensorial: A Ciência de Sentir as Marcas',
    subtitle: 'Porque é que compramos com o coração e não com a razão?',
    imageAlt: 'Mosaico dos 5 sentidos e marcas icónicas',
    mediaUrl: 'assets/capa_principal.jpg'
  },
  {
    id: 2,
    type: 'content',
    category: 'Para começar',
    title: 'O que precisamos de saber?',
    content: [
      '**Marketing Sensorial:** É usar cheiros, sons e cores para "falar" com o cliente.',
      '**Sinestesia:** É quando um sentido activa outro (ex: ver uma imagem e sentir frio).',
      '**Branding:** É como construímos a personalidade de uma marca.',
      '**Experiência:** É o que o cliente sente e recorda da marca.'
    ],
    imageAlt: 'Conceitos base de forma simples',
    mediaUrl: 'assets/icones_sentidos.png'
  },
  {
    id: 3,
    type: 'content',
    category: 'Contexto',
    title: 'O mundo das compras mudou!',
    theory: 'Antigamente o marketing era sobre o produto. Hoje, é sobre o que a pessoa sente ao comprar.',
    content: [
      'Estamos rodeados de anúncios por todo o lado.',
      'As pessoas já não compram só por utilidade, compram por emoção.',
      'As marcas que não emocionam, acabam por ser esquecidas.'
    ],
    imageAlt: 'O novo consumidor',
    mediaUrl: 'assets/consumidor_moderno.jpg'
  },
  {
    id: 4,
    type: 'content',
    category: 'O Problema',
    title: 'Porque é que muitas marcas falham?',
    content: [
      '**O Problema:** Muitas marcas tornam-se "cinzentas" e iguais a todas as outras.',
      '**O Erro:** Tentar convencer o cliente apenas com lógica e preços baixos.',
      '**A Solução:** Activar os sentidos para criar uma ligação que dura no tempo.'
    ],
    justification: 'Se o cliente não sente nada, ele não volta.',
    imageAlt: 'Marcas invisíveis no mercado'
  },
  {
    id: 5,
    type: 'content',
    category: 'Roteiro',
    title: 'O que vamos ver hoje?',
    content: [
      '1. Como o nosso cérebro reage às marcas.',
      '2. Os 5 sentidos na prática (Casos Reais).',
      '3. O exemplo das Cervejas de Moçambique (CDM).',
      '4. O futuro digital e as nossas conclusões.'
    ],
    imageAlt: 'Mapa da apresentação'
  },

  /* --- I. VISÃO --- */
  {
    id: 6,
    type: 'section',
    title: 'I. VISÃO: O que os olhos vêem...',
    subtitle: 'Como a luz e as cores decidem o valor do que compramos.',
    imageAlt: 'A magia das cores'
  },
  {
    id: 7,
    type: 'content',
    category: 'Visão: A Teoria',
    title: 'Como as cores "falam" connosco?',
    theory: '80% do que percebemos vem da visão. Uma cor certa pode fazer-nos sentir luxo ou alegria num segundo.',
    content: [
      'As cores activam memórias e desejos subconscientes.',
      'A luz de uma loja define se o produto parece caro ou barato.',
      'A visão é o nosso primeiro contacto com qualquer marca.'
    ],
    imageAlt: 'Cromatologia aplicada'
  },
  {
    id: 8,
    type: 'media',
    category: 'Visão: Caso Apple',
    title: 'O Segredo da Apple',
    imageAlt: 'A arquitectura transparente e minimalista das lojas Apple.',
    mediaUrl: 'assets/apple_store_visao.jpg'
  },
  {
    id: 9,
    type: 'content',
    category: 'Visão: Justificação',
    title: 'Porque é que a Apple usa vidro e luz?',
    justification: 'Ao usar transparência e muita luz branca, a Apple faz o cliente sentir que está num lugar futurista e honesto. O minimalismo retira a confusão e faz o produto brilhar como se fosse uma jóia.',
    imageAlt: 'Análise Apple'
  },
  {
    id: 10,
    type: 'media',
    category: 'Visão: Caso Tiffany',
    title: 'A Magia do Azul Tiffany',
    imageAlt: 'A icónica caixa azul da Tiffany & Co.',
    mediaUrl: 'assets/tiffany_blue_box.jpg'
  },
  {
    id: 11,
    type: 'content',
    category: 'Visão: Justificação',
    title: 'Uma cor que vale milhões!',
    justification: 'O azul da Tiffany é tão forte que o cérebro do cliente sente prazer antes mesmo de ver a jóia. A cor tornou-se o próprio símbolo de luxo e exclusividade mundial.',
    imageAlt: 'Análise Tiffany'
  },
  {
    id: 12,
    type: 'media',
    category: 'Visão: Caso Nacional',
    title: '2M: As Cores do nosso País',
    imageAlt: 'Publicidade da 2M usando as cores da bandeira de Moçambique.',
    mediaUrl: 'assets/2m_nacional.jpg'
  },
  {
    id: 13,
    type: 'content',
    category: 'Visão: Justificação',
    title: 'Porque é que a 2M usa a nossa bandeira?',
    justification: 'A 2M não vende apenas cerveja, vende Moçambique. Ao usar as cores da bandeira, a marca faz o cliente sentir orgulho e patriotismo, tornando a escolha da cerveja uma questão de identidade nacional.',
    imageAlt: 'Análise 2M'
  },

  /* --- II. AUDIÇÃO --- */
  {
    id: 14,
    type: 'section',
    title: 'II. AUDIÇÃO: O som da marca',
    subtitle: 'Como o som prepara o nosso humor para consumir.',
    imageAlt: 'Som imersivo'
  },
  {
    id: 15,
    type: 'content',
    category: 'Audição: A Teoria',
    title: 'O som pode fazer-nos comprar?',
    theory: 'O som altera o nosso ritmo cardíaco. Uma música calma faz-nos ficar mais tempo na loja; um som curto cria uma assinatura eterna.',
    content: [
      'O som prepara o cérebro para o que vem a seguir.',
      'Assinaturas sonoras (Audio Branding) são fáceis de recordar.',
      'A música certa cria o ambiente perfeito para a venda.'
    ],
    imageAlt: 'Impacto do som'
  },
  {
    id: 16,
    type: 'media',
    category: 'Audição: Caso Netflix',
    title: 'O "Tadum" da Netflix',
    imageAlt: 'Logo da Netflix associado ao seu som icónico.',
    mediaUrl: 'assets/netflix_tadum.mp4'
  },
  {
    id: 17,
    type: 'content',
    category: 'Audição: Justificação',
    title: '2 segundos que valem ouro!',
    justification: 'O som inicial da Netflix prepara o nosso cérebro para descansar e ver um filme. É um gatilho de prazer que nos faz focar no ecrã e esquecer o mundo exterior.',
    imageAlt: 'Análise Netflix'
  },
  {
    id: 18,
    type: 'media',
    category: 'Audição: Caso CDM',
    title: 'O Som da Festa em Moçambique',
    imageAlt: 'Festivais patrocinados pela CDM com música local.',
    mediaUrl: 'assets/cdm_festivais.jpg'
  },
  {
    id: 19,
    type: 'content',
    category: 'Audição: Justificação',
    title: 'Porque é que a CDM apoia festivais?',
    justification: 'A CDM associa a 2M aos ritmos da Marrabenta e da música moderna moçambicana. Quando ouvimos a música da festa, o nosso cérebro lembra-se logo do prazer de partilhar uma cerveja com amigos.',
    imageAlt: 'Análise CDM Som'
  },

  /* --- III. OLFACTO --- */
  {
    id: 20,
    type: 'section',
    title: 'III. OLFACTO: O caminho pelo nariz',
    subtitle: 'O único sentido que vai directo à nossa memória emocional.',
    imageAlt: 'Aromas que marcam'
  },
  {
    id: 21,
    type: 'content',
    category: 'Olfacto: A Teoria',
    title: 'O nariz é o guia do nosso cérebro?',
    theory: 'A memória dos cheiros é a mais forte de todas. Podemos esquecer o que vimos, mas raramente esquecemos um cheiro.',
    content: [
      'Cheiros bons fazem-nos querer ficar mais tempo.',
      'Aromas podem guiar o cliente fisicamente até à loja.',
      'Um cheiro característico protege a marca contra cópias.'
    ],
    imageAlt: 'Memória olfactiva'
  },
  {
    id: 22,
    type: 'media',
    category: 'Olfacto: Caso Dunkin\'',
    title: 'O Cheiro que "pesca" o cliente',
    imageAlt: 'Campanha de libertação de aroma de café em autocarros.',
    mediaUrl: 'assets/dunkin_donuts.jpg'
  },
  {
    id: 23,
    type: 'content',
    category: 'Olfacto: Justificação',
    title: 'Como a Dunkin\' Donuts subiu as vendas?',
    justification: 'Na Coreia, a marca libertava cheiro a café quando o anúncio passava no rádio do autocarro. O resultado foi um aumento de 29% nas vendas, porque o cheiro "guiou" os passageiros até à loja mais próxima.',
    imageAlt: 'Análise Dunkin'
  },
  {
    id: 24,
    type: 'media',
    category: 'Olfacto: Caso Nacional',
    title: 'O Pão Quente de Maputo',
    imageAlt: 'Supermercado LOCAL com padaria na entrada.',
    mediaUrl: 'assets/pao_fresco_maputo.jpg'
  },
  {
    id: 25,
    type: 'content',
    category: 'Olfacto: Justificação',
    title: 'Porque o cheiro a pão na entrada?',
    justification: 'O Supermercado LOCAL coloca a padaria à entrada para que o cheiro a pão fresco abra o apetite do cliente. Com fome, o cliente compra mais do que o planeado, aumentando o lucro do supermercado.',
    imageAlt: 'Análise Local'
  },

  /* --- IV. TACTO --- */
  {
    id: 26,
    type: 'section',
    title: 'IV. TACTO: Sentir para Confiar',
    subtitle: 'O toque é a prova final de que um produto tem qualidade.',
    imageAlt: 'Texturas e toque'
  },
  {
    id: 27,
    type: 'content',
    category: 'Tacto: A Teoria',
    title: 'O toque é a prova final?',
    theory: 'O peso e a textura dizem ao nosso cérebro se algo é durável ou descartável. Pegar em algo cria o "sentido de dono".',
    content: [
      'Materiais frios e pesados (metal) transmitem luxo.',
      'O toque retira a dúvida sobre a qualidade do produto.',
      'Pegar no produto aumenta a vontade de o levar para casa.'
    ],
    imageAlt: 'A engenharia táctil'
  },
  {
    id: 28,
    type: 'media',
    category: 'Tacto: Caso Apple',
    title: 'A Solidez do Alumínio',
    imageAlt: 'Detalhe do acabamento metálico de um MacBook ou iPhone.',
    mediaUrl: 'assets/apple_alumínio.jpg'
  },
  {
    id: 29,
    type: 'content',
    category: 'Tacto: Justificação',
    title: 'Porque a Apple não usa plástico barato?',
    justification: 'O toque no alumínio frio e pesado faz o cliente sentir que tem nas mãos uma tecnologia de alta qualidade. Esse peso "justifica" o preço elevado que o cliente paga pelo dispositivo.',
    imageAlt: 'Análise Apple Tacto'
  },
  {
    id: 30,
    type: 'media',
    category: 'Tacto: Caso Nacional',
    title: 'A Garrafa 2M Gelada',
    imageAlt: 'Close-up de uma garrafa de cerveja com condensação de gelo.',
    mediaUrl: 'assets/2m_gelada_suada.jpg'
  },
  {
    id: 31,
    type: 'content',
    category: 'Tacto: Justificação',
    title: 'Como uma imagem nos faz sentir frio?',
    justification: 'Em Moçambique, a visão activa o tacto. Ver as gotas de água numa garrafa de 2M faz o nosso corpo recordar a sensação de frescura, algo essencial para vender bebidas num clima tropical.',
    imageAlt: 'Análise 2M Tacto'
  },

  /* --- V. PALADAR --- */
  {
    id: 32,
    type: 'section',
    title: 'V. PALADAR: O teste final',
    subtitle: 'O sabor é a recompensa que faz o cliente voltar sempre.',
    imageAlt: 'Sabor e prazer'
  },
  {
    id: 33,
    type: 'content',
    category: 'Paladar: A Teoria',
    title: 'O sabor fideliza o cliente?',
    theory: 'O paladar humaniza as marcas. Oferecer algo para comer ou ter um sabor único cria uma lealdade imbatível.',
    content: [
      'O sabor é o veredicto final da qualidade.',
      'Comida em lojas ajuda a reduzir o stress das compras.',
      'O paladar cria uma associação directa com o prazer.'
    ],
    imageAlt: 'Impacto do paladar'
  },
  {
    id: 34,
    type: 'media',
    category: 'Paladar: Caso IKEA',
    title: 'As Almôndegas da IKEA',
    imageAlt: 'Prato de almôndegas servido nos restaurantes IKEA.',
    mediaUrl: 'assets/ikea_almondegas.jpg'
  },
  {
    id: 35,
    type: 'content',
    category: 'Paladar: Justificação',
    title: 'Comer para não desistir de comprar!',
    justification: 'A IKEA vende móveis, mas o seu restaurante é famoso mundialmente. A comida barata e saborosa faz com que as famílias passem o dia na loja sem ficarem cansadas ou com fome, comprando muito mais.',
    imageAlt: 'Análise IKEA'
  },
  {
    id: 36,
    type: 'media',
    category: 'Paladar: Caso Nacional',
    title: 'Laurentina: Orgulho Moçambicano',
    imageAlt: 'A Medalha de Ouro da Laurentina Preta.',
    mediaUrl: 'assets/laurentina_preta_gold.jpg'
  },
  {
    id: 37,
    type: 'content',
    category: 'Paladar: Justificação',
    title: 'O sabor que o mundo premiou',
    justification: 'A Laurentina Preta usa o seu sabor premiado internacionalmente para mostrar que o que é feito em Moçambique é de classe mundial. Isso gera um orgulho nacional que impede o cliente de mudar para marcas estrangeiras.',
    imageAlt: 'Análise Laurentina'
  },

  /* --- CONCLUSÃO --- */
  {
    id: 38,
    type: 'content',
    category: 'O Futuro',
    title: 'O que vem a seguir?',
    content: [
      '**Phygital:** É misturar o físico com o digital (ex: sentir o cheiro via som ou imagem).',
      '**Ética:** As marcas devem persuadir, mas nunca enganar o consumidor.',
      '**Conclusão:** No futuro, as marcas que não se fizerem sentir, serão invisíveis.'
    ],
    imageAlt: 'Marketing futurista',
    mediaUrl: 'assets/futuro_marketing.jpg'
  },
  {
    id: 39,
    type: 'matrix',
    category: 'Resumo Final',
    title: 'Diferenças de Estratégia',
    content: [
      '**Marcas Internacionais:** Focam no Luxo, na Inovação e no Minimalismo.',
      '**Marcas de Moçambique:** Focam na Identidade, na Cultura e no nosso Clima.'
    ],
    justification: 'A biologia é igual em todo o lado, mas o segredo é adaptar ao nosso contexto local.',
    imageAlt: 'Global vs Nacional'
  },
  {
    id: 40,
    type: 'closing',
    title: 'Muito Obrigado pela vossa Atenção!',
    subtitle: 'E a vossa marca, como é que se faz sentir hoje?',
    content: ['Autor: Estudante de Marketing', 'Instituto Técnico, 2026'],
    imageAlt: 'Encerramento',
    mediaUrl: 'assets/encerramento.jpg'
  }
];
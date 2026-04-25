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
  mediaUrl?: string;
  isHidden?: boolean;
}

export const slides: SlideData[] = [
  {
    id: 1,
    type: 'cover',
    title: 'Marketing Sensorial: Uma Abordagem Multissensorial para a Conexão com o Consumidor',
    subtitle: 'Fundamentos de Marketing',
    imageAlt: 'Marketing Sensorial: A Ciência de Sentir as Marcas',
    mediaUrl: 'assets/imagem-da-capa.jpg'
  },
  {
    id: 2,
    type: 'content',
    category: 'Glossário',
    title: 'O que precisamos de saber?',
    content: [
      '**O que é Marketing?** É o processo de identificar, antecipar e satisfazer as necessidades e desejos do consumidor através da criação e entrega de valor.',
      '**O que é Sensorial?** Refere-se à percepção do mundo através dos nossos sentidos (visão, audição, olfacto, tacto e paladar), que transformam estímulos externos em experiências internas.',
      '**Marketing Sensorial:** É a união estratégica destes conceitos; utiliza estímulos sensoriais para criar uma conexão emocional profunda entre a marca e o consumidor.'
    ],
    imageAlt: 'Definições Fundamentais'
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
    imageAlt: 'O novo consumidor'
  },
  {
    id: 4,
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
    id: 5,
    type: 'section',
    title: 'I. VISÃO: O que os olhos vêem...',
    subtitle: 'Como a luz e as cores decidem o valor do que compramos.',
    imageAlt: 'A magia das cores'
  },
  {
    id: 6,
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
    id: 7,
    type: 'media',
    category: 'Visão: Caso Apple',
    title: 'O Segredo da Apple',
    imageAlt: 'Vídeo: Como a Apple constrói as suas lojas icónicas.',
    mediaUrl: 'assets/how-apple-builds-its-stores.mp4'
  },
  {
    id: 8,
    type: 'content',
    category: 'Visão: Justificação',
    isHidden: true,
    title: 'Porque é que a Apple usa vidro e luz?',
    justification: 'Ao usar transparência e muita luz branca, a Apple faz o cliente sentir que está num lugar futurista e honesto. O minimalismo retira a confusão e faz o produto brilhar como se fosse uma jóia.',
    imageAlt: 'Análise Apple'
  },
  {
    id: 9,
    type: 'media',
    category: 'Visão: Caso Tiffany',
    title: 'A Magia do Azul Tiffany',
    imageAlt: 'A icónica caixa azul da Tiffany & Co.',
    mediaUrl: 'assets/tiffany-blue-box-hd.jfif'
  },
  {
    id: 10,
    type: 'content',
    category: 'Visão: Justificação',
    isHidden: true,
    title: 'Uma cor que vale milhões!',
    justification: 'O azul da Tiffany é tão forte que o cérebro do cliente sente prazer antes mesmo de ver a jóia. A cor tornou-se o próprio símbolo de luxo e exclusividade mundial.',
    imageAlt: 'Análise Tiffany'
  },
  {
    id: 12,
    type: 'media',
    category: 'Visão: Caso Nacional',
    title: '2M: As Cores do nosso País',
    imageAlt: 'Vídeo: A 2M e a ligação com a identidade moçambicana.',
    mediaUrl: 'assets/2m-feita-por-nos.mp4'
  },
  {
    id: 13,
    type: 'content',
    category: 'Visão: Justificação',
    isHidden: true,
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
    imageAlt: 'Vídeo: O som das histórias e a identidade auditiva da Netflix.',
    mediaUrl: 'assets/netflix-sound-of-stories.mp4'
  },
  {
    id: 17,
    type: 'content',
    category: 'Audição: Justificação',
    isHidden: true,
    title: '2 segundos que valem ouro!',
    justification: 'O som inicial da Netflix prepara o nosso cérebro para descansar e ver um filme. É um gatilho de prazer que nos faz focar no ecrã e esquecer o mundo exterior.',
    imageAlt: 'Análise Netflix'
  },
  {
    id: 18,
    type: 'media',
    category: 'Audição: Caso CDM',
    title: 'O Som da Festa em Moçambique',
    imageAlt: 'Festivais patrocinados pela CDM com música local e celebração.',
    mediaUrl: 'assets/maputo-party.jpg'
  },
  {
    id: 19,
    type: 'content',
    category: 'Audição: Justificação',
    isHidden: true,
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
    imageAlt: 'Vídeo: A campanha Flavor Radio da Dunkin\' Donuts que usou o olfacto.',
    mediaUrl: 'assets/dunkin-donuts-flavor-radio.mp4'
  },
  {
    id: 23,
    type: 'content',
    category: 'Olfacto: Justificação',
    isHidden: true,
    title: 'Como a Dunkin\' Donuts subiu as vendas?',
    justification: 'Na Coreia, a marca libertava cheiro a café quando o anúncio passava no rádio do autocarro. O resultado foi um aumento de 29% nas vendas, porque o cheiro "guiou" os passageiros até à loja mais próxima.',
    imageAlt: 'Análise Dunkin'
  },
  {
    id: 24,
    type: 'media',
    category: 'Olfacto: Caso Nacional',
    title: 'O Cheiro do Sucesso na LOKAL',
    imageAlt: 'A padaria da LOKAL em Maputo e a diversidade de produtos.',
    mediaUrl: 'assets/padaria-da-lokal-em-maputo.jfif'
  },
  {
    id: 25,
    type: 'content',
    category: 'Olfacto: Justificação',
    isHidden: true,
    title: 'Porque o cheiro a pão na entrada da LOKAL?',
    justification: 'A LOKAL é um supermercado completo, mas coloca a padaria à entrada estrategicamente. O cheiro a pão fresco abre o apetite do cliente, fazendo-o percorrer todos os corredores e comprar muito mais do que apenas pão.',
    imageAlt: 'Análise LOKAL'
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
    imageAlt: 'Vídeo: A filosofia de design da Apple foca em como o produto funciona e se sente.',
    mediaUrl: 'assets/design-is-how-it-works-apple.mp4'
  },
  {
    id: 29,
    type: 'content',
    category: 'Tacto: Justificação',
    isHidden: true,
    title: 'Porque a Apple não usa plástico barato?',
    justification: 'O toque no alumínio frio e pesado faz o cliente sentir que tem nas mãos uma tecnologia de alta qualidade. Esse peso "justifica" o preço elevado que o cliente paga pelo dispositivo.',
    imageAlt: 'Análise Apple Tacto'
  },
  {
    id: 30,
    type: 'media',
    category: 'Tacto: Caso Rolls Royce',
    title: 'O Luxo do Toque',
    imageAlt: 'O interior sofisticado e as texturas nobres do Rolls Royce.',
    mediaUrl: 'assets/rolls-royce-interior.webp'
  },
  {
    id: 31,
    type: 'content',
    category: 'Tacto: Justificação',
    isHidden: true,
    title: 'Como o couro justifica o preço?',
    justification: 'Ao tocar nos materiais de um Rolls Royce, o cliente sente imediatamente que o valor financeiro corresponde à excelência física. A textura confirma o luxo.',
    imageAlt: 'Análise Rolls Tacto'
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
    id: 43,
    type: 'media',
    category: 'Paladar: Caso IKEA',
    title: 'As Almôndegas da IKEA',
    imageAlt: 'Vídeo: A história e o impacto das almôndegas no sucesso da IKEA.',
    mediaUrl: 'assets/segredo-ikea-vender-mais.mp4'
  },
  {
    id: 35,
    type: 'content',
    category: 'Paladar: Justificação',
    isHidden: true,
    title: 'Comer para não desistir de comprar!',
    justification: 'A IKEA vende móveis, mas o seu restaurante é famoso mundialmente. A comida barata e saborosa faz com que as famílias passem o dia na loja sem ficarem cansadas ou com fome, comprando muito mais.',
    imageAlt: 'Análise IKEA'
  },
  {
    id: 36,
    type: 'media',
    category: 'Paladar: Caso Coca-Cola',
    title: 'A Fórmula Secreta',
    imageAlt: 'O sabor inconfundível que se tornou um padrão global.',
    mediaUrl: 'assets/coca-cola.jpg'
  },
  {
    id: 37,
    type: 'content',
    category: 'Paladar: Justificação',
    isHidden: true,
    title: 'O Sabor como Proteção de Marca',
    justification: 'A Coca-Cola protege a sua fórmula como o maior segredo do mundo. O sabor único é o que impede que o cliente mude para a concorrência, pois nada "sente" o mesmo paladar.',
    imageAlt: 'Análise Coca'
  },

  /* --- CONCLUSÃO E SOLUÇÃO --- */
  {
    id: 38,
    type: 'content',
    category: 'Visão Estratégica',
    title: 'Porque é que muitas marcas falham?',
    content: [
      '**O Erro Comum:** Tentar convencer o cliente apenas com lógica e preços baixos.',
      '**A Falha:** Tornar a marca "cinzenta" e igual a todas as outras.',
      '**A Solução Final:** Activar os sentidos para criar uma ligação emocional que o preço não consegue quebrar.'
    ],
    justification: 'Se o cliente não sente nada, ele não tem motivo para voltar.',
    imageAlt: 'Marcas invisíveis no mercado'
  },
  {
    id: 39,
    type: 'closing',
    title: 'Muito Obrigado!',
    content: ['Grupo 2', 'Fundamentos de Marketing'],
    imageAlt: 'Encerramento'
  }
];
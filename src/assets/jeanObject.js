const jeanObj = {
  name: 'Jean',
  affiliation: 'A cavaleira de Favonius',
  constellation: 'Constelação leão menor',
  constellations: [{
    name: 'Tempestade Espiral',
    description: 'Aumenta a velocidade da Espada do Temporal após manter pressionado por mais de 1s e aumenta o dano causado em 40%.'
  },
  {
    name: 'Égide do Povo',
    description: 'Quando a Jean pega um Orbe/Partícula Elemental, todos os membros terão sua Veloc. Mov. e VEL de ATQ aumentados em 15% por 15s.'
  },
  {
    name: 'Quando o Vento do Oeste Sopra',
    description: 'Aumenta o nível da Brisa de Dandelion em 3 e o nível máximo de elevação é 15.'
  },
  {
    name: 'Terra dos Dandelions',
    description: 'Dentro do Campo criado pela Brisa de Dandelion, todos os inimigos têm sua RES Anemo diminuída em 40%.'
  },
  {
    name: 'Rajada Explosiva',
    description: 'Aumenta o nível da Espada do Temporal em 3 e o nível máximo de elevação é 15.'
  },
  {
    name: 'Presa do Leão, Protetor de Mondstadt',
    description: 'Dano recebido é reduzido em 35% dentro da Área criada por Brisa de Dandelion. Após sair do Campo de Dandelion, este efeito dura por 3 ataques ou 10 segundos.'
  },
],
  outfits: [{
    name: 'Sonho da brisa marinha',
    description: 'Se as férias da última vez foram para descansar nos dias ocupados, nesta vez, porém, é para Jean relaxar por completo.',
    price: '1680',
    image: 'https://api.genshin.dev/characters/jean/outfit-sea-breeze-dandelion'
  }],
  passiveTalents: [{
    name: 'Companhia do Vento',
    description: 'Ao acertar Ataques Normais de Jean, possui 50% de chance de regenerar Vida equivalente a 15% do ATQ de Jean a todos os membros da equipe.',
  },
  {
    name: 'Deixe o Vento Guiar',
    description: 'Após usar a Brisa de Dandelion regenera 20% de Energia Elemental.',
  },
  {
    name: 'Brisa de Planagem',
    description: 'Quando uma Culinária Perfeita é feita em uma comida com efeito de recuperação, tem uma chance de 12% de receber o dobro de produção.',
  },
],
  skillTalents: [{
    name: 'Técnica de Favonius',
    description: 'Ataque normal realiza até 5 golpes rápidos. Ataque carregado consome certa quantidade de Stamina para lançar um inimigo ao ar usando o poder do vento. Inimigos lançados cairão lentamente ao chão. Ataque imersivo mergulha do ar para atingir o chão abaixo, causando Dano aos inimigos ao longo do caminho e causando Dano em uma AdE no impacto.'
  },
  {
    name: 'Espada do Temporal',
    description: 'Canalizando o poder do vento sem forma em volta da sua espada, Jean libera uma miniatura de uma tempestade, lançando inimigos na direção em que ela mira, causando um Dano Anemo massivo. Manter pressionado ao custo de um consumo constante de Stamina, Jean pode comandar um turbilhão que suga inimigos e objetos próximos à sua frente.'
  },
  {
    name: 'Brisa de Dandelion',
    description: 'Invocando a proteção do vento, Jean cria um Campo Dandelion rodopiante, lançando inimigos ao redor e causando Dano Anemo. Ao mesmo tempo, ela regenera instantaneamente uma grande quantidade de Vida para todos os membros da equipe. A Vida restaurada dimensiona o ATQ de Jean. Campo de dandelions regenera continuamente a Vida dos personagens dentro da AdE concede o atributo Anemo. Causa Dano Anemo aos inimigos que entram ou saem do campo.'
  }
],
}

export default jeanObj;
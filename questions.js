var questions = [
  {
    competition: "Balón de Oro",
    year: "2023",
    question: "¿Quién ganó el Balón de Oro en 2023?",
    answer: (players.find((player) => player.name === "Lionel Messi") || {})
      .name,
  },
  {
    competition: "Balón de Oro",
    year: "2022",
    question: "¿Quién ganó el Balón de Oro en 2022?",
    answer: (players.find((player) => player.name === "Karim Benzema") || {})
      .name,
  },
  {
    competition: "Balón de Oro",
    year: "2021",
    question: "¿Quién ganó el Balón de Oro en 2021?",
    answer: (players.find((player) => player.name === "Lionel Messi") || {})
      .name,
  },
  {
    competition: "Balón de Oro",
    year: "2019",
    question: "¿Quién ganó el Balón de Oro en 2019?",
    answer: (players.find((player) => player.name === "Lionel Messi") || {})
      .name,
  },
  {
    competition: "Balón de Oro",
    year: "2018",
    question: "¿Quién ganó el Balón de Oro en 2018?",
    answer: (players.find((player) => player.name === "Luka Modric") || {})
      .name,
  },

  {
    competition: "Balón de Oro",
    year: "2017",
    question: "¿Quién ganó el Balón de Oro en 2017?",
    answer: (
      players.find((player) => player.name === "Cristiano Ronaldo") || {}
    ).name,
  },
  {
    competition: "Balón de Oro",
    year: "2016",
    question: "¿Quién ganó el Balón de Oro en 2016?",
    answer: (
      players.find((player) => player.name === "Cristiano Ronaldo") || {}
    ).name,
  },
  {
    competition: "Balón de Oro",
    year: "2015",
    question: "¿Quién ganó el Balón de Oro en 2015?",
    answer: (players.find((player) => player.name === "Lionel Messi") || {})
      .name,
  },
  {
    competition: "Balón de Oro",
    year: "2014",
    question: "¿Quién ganó el Balón de Oro en 2014?",
    answer: (
      players.find((player) => player.name === "Cristiano Ronaldo") || {}
    ).name,
  },
  {
    competition: "Balón de Oro",
    year: "2013",
    question: "¿Quién ganó el Balón de Oro en 2013?",
    answer: (
      players.find((player) => player.name === "Cristiano Ronaldo") || {}
    ).name,
  },
  {
    competition: "Balón de Oro",
    year: "2012",
    question: "¿Quién ganó el Balón de Oro en 2012?",
    answer: (players.find((player) => player.name === "Lionel Messi") || {})
      .name,
  },
  {
    competition: "Balón de Oro",
    year: "2011",
    question: "¿Quién ganó el Balón de Oro en 2011?",
    answer: (players.find((player) => player.name === "Lionel Messi") || {})
      .name,
  },
  {
    competition: "Balón de Oro",
    year: "2010",
    question: "¿Quién ganó el Balón de Oro en 2010?",
    answer: (players.find((player) => player.name === "Lionel Messi") || {})
      .name,
  },
  {
    competition: "Balón de Oro",
    year: "2009",
    question: "¿Quién ganó el Balón de Oro en 2009?",
    answer: (players.find((player) => player.name === "Lionel Messi") || {})
      .name,
  },
  {
    competition: "Balón de Oro",
    year: "2008",
    question: "¿Quién ganó el Balón de Oro en 2008?",
    answer: (
      players.find((player) => player.name === "Cristiano Ronaldo") || {}
    ).name,
  },
  {
    competition: "Balón de Oro",
    year: "2007",
    question: "¿Quién ganó el Balón de Oro en 2007?",
    answer: (players.find((player) => player.name === "Ricardo Kaká") || {})
      .name,
  },
  {
    competition: "Balón de Oro",
    year: "2006",
    question: "¿Quién ganó el Balón de Oro en 2006?",
    answer: (players.find((player) => player.name === "fabio Cannavaro") || {})
      .name,
  },
  {
    competition: "Balón de Oro",
    year: "2005",
    question: "¿Quién ganó el Balón de Oro en 2005?",
    answer: (
      players.find((player) => player.name === "Ronaldinho Gaucho") || {}
    ).name,
  },
  {
    competition: "Balón de Oro",
    year: "2004",
    question: "¿Quién ganó el Balón de Oro en 2004?",
    answer: (
      players.find((player) => player.name === "Andriy Shevchenko") || {}
    ).name,
  },
  {
    competition: "Champions League",
    year: "2003/04",
    question: "¿Quién ganó la Champions League en la temporada 2003/04?",
    answer: (teams.find((team) => team.name === "Porto") || {}).name,
  },
  {
    competition: "Champions League",
    year: "2004/05",
    question: "¿Quién ganó la Champions League en la temporada 2004/05?",

    answer: (teams.find((team) => team.name === "Liverpool") || {}).name,
  },
  {
    competition: "Champions League",
    year: "2005/06",
    question: "¿Quién ganó la Champions League en la temporada 2005/06?",
    answer: (teams.find((team) => team.name === "Barcelona") || {}).name,
  },
  {
    competition: "Champions League",
    year: "2006/07",
    question: "¿Quién ganó la Champions League en la temporada 2006/07?",
    answer: (teams.find((team) => team.name === "Milán") || {}).name,
  },
  {
    competition: "Champions League",
    year: "2007/08",
    question: "¿Quién ganó la Champions League en la temporada 2007/08?",
    answer: (teams.find((team) => team.name === "Manchester United") || {})
      .name,
  },
  {
    competition: "Champions League",
    year: "2008/09",
    question: "¿Quién ganó la Champions League en la temporada 2008/09?",
    answer: (teams.find((team) => team.name === "Barcelona") || {}).name,
  },
  {
    competition: "Champions League",
    year: "2009/10",
    question: "¿Quién ganó la Champions League en la temporada 2009/10?",
    answer: (teams.find((team) => team.name === "Inter de Milán") || {}).name,
  },
  {
    competition: "Champions League",
    year: "2010/11",
    question: "¿Quién ganó la Champions League en la temporada 2010/11?",
    answer: (teams.find((team) => team.name === "Barcelona") || {}).name,
  },
  {
    competition: "Champions League",
    year: "2011/12",
    question: "¿Quién ganó la Champions League en la temporada 2011/12?",
    answer: (teams.find((team) => team.name === "Chelsea") || {}).name,
  },
  {
    competition: "Champions League",
    year: "2012/13",
    question: "¿Quién ganó la Champions League en la temporada 2012/13?",
    answer: (teams.find((team) => team.name === "Bayern Munich") || {}).name,
  },
  {
    competition: "Champions League",
    year: "2013/14",
    question: "¿Quién ganó la Champions League en la temporada 2013/14?",
    answer: (teams.find((team) => team.name === "Real Madrid") || {}).name,
  },
  {
    competition: "Champions League",
    year: "2014/15",
    question: "¿Quién ganó la Champions League en la temporada 2014/15?",
    answer: (teams.find((team) => team.name === "Barcelona") || {}).name,
  },
  {
    competition: "Champions League",
    year: "2015/16",
    question: "¿Quién ganó la Champions League en la temporada 2015/16?",
    answer: (teams.find((team) => team.name === "Real Madrid") || {}).name,
  },
  {
    competition: "Champions League",
    year: "2016/17",
    question: "¿Quién ganó la Champions League en la temporada 2016/17?",
    answer: (teams.find((team) => team.name === "Real Madrid") || {}).name,
  },
  {
    competition: "Champions League",
    year: "017/18",
    question: "¿Quién ganó la Champions League en la temporada 2017/18?",
    answer: (teams.find((team) => team.name === "Real Madrid") || {}).name,
  },
  {
    competition: "Champions League",
    year: "2018/19",
    question: "¿Quién ganó la Champions League en la temporada 2018/19?",
    answer: (teams.find((team) => team.name === "Liverpool") || {}).name,
  },
  {
    competition: "Champions League",
    year: "2019/20",
    question: "¿Quién ganó la Champions League en la temporada 2019/20?",
    answer: (teams.find((team) => team.name === "Bayern Munich") || {}).name,
  },
  {
    competition: "Champions League",
    year: "2020/21",
    question: "¿Quién ganó la Champions League en la temporada 2020/21?",
    answer: (teams.find((team) => team.name === "Chelsea") || {}).name,
  },
  {
    competition: "Champions League",
    year: "2021/22",
    question: "¿Quién ganó la Champions League en la temporada 2021/22?",
    answer: (teams.find((team) => team.name === "Real Madrid") || {}).name,
  },
  {
    competition: "Champions League",
    year: "2022/23",
    question: "¿Quién ganó la Champions League en la temporada 2022/23?",
    answer: (teams.find((team) => team.name === "Real Madrid") || {}).name,
  },
];

const datos = [
  {
    email: "carebola@fpllefia.com",
    porra: "1-5",
  },
  {
    email: "ivan@fpllefia.com",
    porra: "1-0",
  },
  {
    email: "joel@fpllefia.com",
    porra: "1-3",
  },
  {
    email: "edgar@fpllefia.com",
    porra: "3-2",
  },
  {
    email: "miguel@fpllefia.com",
    porra: "1-4",
  },
];

function getPorras(req, res) {
  return res.status(200).json(datos);
}

export { getPorras };

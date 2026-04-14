const datos = [
  {
    email: "carebola@fpllefia.com",
    porra: "1-5",
  },
];

function getPorras(req, res) {
  return res.status(200).json(datos);
}

export { getPorras };

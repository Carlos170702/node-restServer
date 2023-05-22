import app from "express";

export const getUsuarios = (req = app.request, res = app.response) => {
  const { id = null, nombre = "not name", tipo = "not found" } = req.query;

  res.json({
    message: "GET",
    id,
    nombre,
    tipo,
  });
};

export const addUsuarios = (req = app.request, res = app.response) => {
  const body = req.body;

  res.json({
    message: "POST",
    body: body,
  });
};

export const updateUsuarios = (req = app.request, res = app.response) => {
  const params = req.params;

  res.json({
    message: "PUT",
    params,
  });
};

export const deleteUsuarios = (req = app.request, res = app.response) => {
  res.json({
    message: "DELETE",
  });
};

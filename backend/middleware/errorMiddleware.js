/** @format */

const notFound = (req, res, next) => {
  const error = new Error(
    `Not found - http://localhost:8000${req.originalUrl}`
  );
  res.status(400);
  next(error);
};
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "resource not found !";
  }
  res.status(statusCode).json({
    message,
    stack: process.env.NODE.ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };

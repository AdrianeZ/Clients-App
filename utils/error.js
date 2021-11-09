function handleError(err, req, res, next)
{
  if (err instanceof NotFoundError)
  {
    return res.status(404).render("error", {message: err.message});
  }

  res.status(err instanceof ValidationError ? 400 : 500);
  const message = err instanceof ValidationError ? err.message : "something went wrong try again later";
  res.render("error", {
    message
  });

}

class ValidationError extends Error
{

}

class NotFoundError extends Error
{

}

module.exports =
    {
      handleError,
      ValidationError,
      NotFoundError
    };
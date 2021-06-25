import auth from "basic-auth";

const Credentials = (name, pass) => ({
  matches: (candidate) =>
    candidate && candidate.name === name && candidate.pass === pass,
});

const basicAuthConfig = {
  credentials: Credentials(
    process.env.ADMIN_AUTH_USER,
    process.env.ADMIN_AUTH_PASS
  ),
};

export const requireBasicAuth = (apiHandler) => (req, res) => {
  const givenCredentials = auth(req);

  if (!basicAuthConfig.credentials.matches(givenCredentials)) {
    return res.status(401).end("Access denied");
  }

  return apiHandler(req, res);
};

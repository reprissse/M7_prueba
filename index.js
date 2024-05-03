import express from 'express';
import routes from "./routes/routes.js";
const app = express();
const PORT = process.env.PORT || 3012;

//middlewares

app.use(express.json());
//routes
app.use('/', routes);

app.listen(PORT, () => console.log(`levantando el servidor en http://localhost:${PORT}`));


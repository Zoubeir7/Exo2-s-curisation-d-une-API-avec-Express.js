import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const app = express()
const port = 3000


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 15, // limite chaque IP à 100 requêtes par fenêtre
    message: { message: "Trop de requêtes, veuillez réessayer plus tard." }
});

app.use(express.json());
app.use(helmet());
app.use(limiter)

app.get('/api/hello', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
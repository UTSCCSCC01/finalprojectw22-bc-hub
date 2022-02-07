import express from "express"
import NewsAPI from "newsapi"

const router = express.Router()
const newsapi = new NewsAPI('24f53dc9736346eaae2c126784c3b631')

router.get('/:pageNo', async (req, res) => {
    newsapi.v2.everything({
        q: 'crypto OR bitcoin',
        language: 'en',
        pageSize: 20,
        page: req.params.pageNo
    }).then(response => {
        res.send(response.articles)
    }).catch(err => {
        console.log(err)
    })
})

export default router;
const {Router} = require('express')
const router = Router()

router.get('/', (req,res) =>{
    res.render('index', {
        title: "Главная",
        isHome:true
    })
})


module.exports = router
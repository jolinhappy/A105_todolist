const express = require('express')
const router = express.Router()
const home = require('./modules/home')
// 引入 todos 模組程式碼
const todos = require('./modules/todos')
// 將網址結構符合 /todos 字串開頭的 request 導向 todos 模組 
router.use('/todos', todos)

router.use('/', home)

module.exports = router
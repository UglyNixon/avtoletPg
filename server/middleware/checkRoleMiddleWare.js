
const jwt = require('jsonwebtoken');

module.exports = function (role) {

return function (req,res,next){
    if (req.method==='OPTIONS') {
        next()
    }
     try {
         const token = req.headers.authorization.split(' ')[1]
     
         if (!token) {
             return res.status(401).json('Не автозизован')
         }
         const decode = jwt.verify(token,process.env.SECRET_KEY)
         req.user = decode
         if (decode.role !==role) {
             return  res.status(403).json({message:'нет доступа'})
         }
         next()
     } catch (error) {
         
         res.status(401).json({message:'пользователь не авторизован'})
     }
    
    }

}
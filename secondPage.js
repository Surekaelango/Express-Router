const express =require('express')
const router = express.Router()
router.get('/',(request,response)=>{
    response.send("This is second page")
})
router.get('/:id',(request,response)=>{
   const number=request.params.id;

   if(number==1){
    response.send("App Development")
   }
   else if(number==2){
    response.send("Web Development")
   }
   else if(number==3){
    response.send("Full stack Development")
   }
   else if(number==4){
    response.send("Mern Full Stack")
   }
   else{
    response.send("Invalid Number!")
   }

})
module.exports = router
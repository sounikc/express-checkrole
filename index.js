/**
 * @param {Array} roles
 * @param {Boolean} flag
 * @param {string} routename
 */
const checkrole = (roles, flag=false,routename='/')=>{
    return (req,res,next)=>{
        if(req.query.role && roles.includes(req.query.role)){
            next();
        }else if(flag){
            res.redirect(routename);
        }
        else{
            res.status('403').send('User does not have permission to navigate');
        }
    }
}


module.exports = checkrole;
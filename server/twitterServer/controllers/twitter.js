const service = require('../services/twitterService');
module.exports = {
    async getFollowers(req, res, next){
        try{
            const apiResponse = await service.getFollowers(req.query);
            res.send(apiResponse);
        }
        catch(err) {
            next(err);
        }        
    }
}
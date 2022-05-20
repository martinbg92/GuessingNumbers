const express = require('express')

function guesserController(guesserService){

    function postEnteredNumber(req,res)
    {
        let response,code;
        try
        {

            response = guesserService.getEnteredNumber(req.body.number);
            response = {'state':'ok', 'comment': String(response)};
            console.log(JSON.stringify(response))
            code=200;

        }
        catch(e)
        {
            console.log(JSON.stringify(e))
            response = {'state':'ko',"comment":"something was wrong"}
            code=500;
        }
        
        return res.status(code).json(response);
    }

    return {postEnteredNumber}
}

module.exports = guesserController;
const utils= require('../components/utils');

function guesserService() {
    
    function getEnteredNumber(numero, min=utils.min, max=utils.max){
        let operaciones=0;
        let encontrado=0;
        let average= getAverage(max,min);
            
        while (encontrado==0)
        {
            operaciones=operaciones+1;
            
            if (numero==average)
            {
                encontrado=1;
            }

            if (numero > average)
            {
                min=average;
                average=getAverage(max,min);
            
            }
            if (numero < average)
            {
                max=average;
                average=getAverage(max,min);
            }
            
        }

        console.log('The number entered is: '+ average);
        return average

    }

    getAverage=(max,min)=>{
        return (max+min)/2;
    }

    return { getEnteredNumber }
}

module.exports= guesserService;
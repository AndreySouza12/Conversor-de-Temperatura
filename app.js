document.getElementById('celsius-form').addEventListener('submit',function(e){
    document.getElementById('results').style.display = "none";
    document.querySelector('#loading').style.display = "block";
    document.querySelector('#converted-fahrenheit').value = '';
    document.querySelector('#converted-kelvins').value = '';
    setTimeout(ConvertTo,2000);

    e.preventDefault();
});





function ConvertTo(){
   

    const celsius = document.getElementById('celsius');
    const convertoTo = document.getElementById('convertTo');

    


    if(convertoTo.value ==='Fahrenheit'){
        if(celsius.value !== ''){
            document.querySelector('#loading').style.display = "none";
            document.querySelector('#results').style.display = "block";
            const toFahrenheit = parseFloat(1.8 * celsius.value + 32);
           const convertedFahrenheit = document.getElementById('converted-fahrenheit');
           convertedFahrenheit.value = (toFahrenheit).toFixed(2);
        }else{
            document.querySelector('#loading').style.display = "none";
            showError('Check Your Numbers');
        }
    }

    if(convertoTo.value === 'Kelvins'){
        if(celsius.value !== ''){
        document.querySelector('#loading').style.display = "none";
        document.querySelector('#results').style.display = "block";
        const toKelvins =  parseFloat(celsius.value) + 273.15;
        const convertedKelvins = document.getElementById('converted-kelvins');
        convertedKelvins.value = (toKelvins).toFixed(2);
    }else{
        document.querySelector('#loading').style.display = "none";
        showError('Check Your Numbers');
    }

   
    }

    
}

function showError(error){
    const newDiv = document.createElement('div');
    newDiv.className = "alert alert-danger";
    const str = document.createTextNode(error);
    newDiv.appendChild(str);

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    card.insertBefore(newDiv,heading);

    setTimeout(function(){
        const hideError = document.querySelector('.alert');
        hideError.remove();
    },3000);
    
}
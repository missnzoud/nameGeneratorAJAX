document.querySelector('#generate-names').addEventListener('submit', loadNames);

function loadNames(e) {
    e.preventDefault();
    
    //read the value from the form and create the variables;
    
    const origin = document.getElementById('country').value;
    
    const genre = document.getElementById('genre').value;
    
    const amount = document.getElementById('quantity').value;
    
    
      //build the URL
    let url = 'http://uinames.com/api/?';
    //read the origin and append to the URL
    
    if(origin !== '') {
        url += `region=${origin}&`;
    }
    console.log(url);
    //read the genre and append to the url
        if(genre !== '') {
        url += `gender=${genre}&`;
    }
    console.log(url);
    // read the amount and append to the url
       if(amount !== '') {
        url += `amount=${amount}&`;
    }
    console.log(url);
     //ajax call 
    xhr = new XMLHttpRequest();
}
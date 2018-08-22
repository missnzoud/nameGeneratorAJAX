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
    
//open the connection
    xhr.open('GET', url, true);
    
    //execute the function
    xhr.onload = function() {
        if(this.status === 200){
            const names = JSON.parse(this.responseText);
           // console.log(names);
            //insert into HTML
            
            let html = `<h2>Generated Names </h2> `;
            html += `<ul names"list">`;
            names.forEach(function(name) {
                          html += `  
                                   <li>${name.name}</li>
                          `;
                     });
                       html += `</ul>`;
                          document.querySelector('#result').innerHTML = html;
                          
        }
         
    }
    //send the url
xhr.send();    
}


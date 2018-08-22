document.querySelector('#generate-names').addEventListener('submit', loadNames);

function loadNames(e) {
    e.preventDefault();
    
    //read the value from the form and create the variables;
    
    const origin = document.getElementById('country').value;
    
    const genre = document.getElementById('genre').value;
    
    const amount = document.getElementById('quantity').value;
}
function getFormvalue() {
    //Write your code here
	const form = document.querySelector('form');
        
        // Get input values
        const firstName = form.querySelector('input[name="fname"]').value;
        const lastName = form.querySelector('input[name="lname"]').value;
        
        // Alert the full name
        alert(`${firstName} ${lastName}`);
        
        // Prevent form submission
        return false;
}

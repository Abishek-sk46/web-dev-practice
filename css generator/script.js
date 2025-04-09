document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const allBorder = document.getElementById('all');
    const btncopy = document.querySelector('#btncopy');
    const borerElement = document.querySelector('#border');
    
    const all_value = document.getElementById('all_value');
    const border_value = document.getElementById('borderd_value');
    const code = document.getElementById('code');
    const border_styleElement = document.getElementById('border_style')

    var all_radius = 10;
    var coding = "Test";
    var border_size=2;
    var border_style = "solid";

    function allBordersUpadte() {
        all_radius = allBorder.value;
        border_size= borerElement.value;
        
        all_value.innerText = all_radius + "px";
        border_value.innerText = border_size + "px";
        coding = `
        border-radius:${all_radius}px;
        border:${border_size}px ${border_style} red;
        `;
        code.value = coding;
        container.style.cssText = coding;
    }



    allBorder.addEventListener("mousemove", allBordersUpadte)
    allBorder.addEventListener("change", allBordersUpadte)


    borerElement.addEventListener("mousemove", allBordersUpadte)
    borerElement.addEventListener("change", allBordersUpadte)



    btncopy.addEventListener("click", () => {
        document.querySelector('textarea').select();
        document.execCommand('copy');
        alert("code copied")

    });


    allBordersUpadte();
    border_styleElement.addEventListener('change', function() {
        border_style=this.value;
        allBordersUpadte();
    });
   




});
    const nextBtn = document.getElementById('next');
    const backBtn = document.getElementById('back');
 
    const nameInput = document.querySelector('input[name=name]');
    const emailInput = document.querySelector('input[name=email]');
    const numberInput = document.querySelector('input[name=number]');
 
    const page = document.getElementsByClassName('page');
 
    const yearlyPlan = document.querySelector('.yearlyPlan');
    const monthlyPlan = document.querySelector('.monthlyPlan');
 
    const yearlyAddon = document.querySelector('.yearlyAddon');
    const monthlyAddon = document.querySelector('.monthlyAddon');
 
    const checkbox = document.getElementById('switch');
 
    const planType = document.querySelectorAll('.plan-type');
 
    let currentPage = 0;
    showPage(currentPage);
 

    // Function to show the current form page
    function showPage(step) {
        page[step].style.display = 'flex';
 
        if (step === page.length - 1) {
            nextBtn.style.display = 'none';
            backBtn.style.display = 'none';
        } else if (step === 0) {
            backBtn.style.display = 'none';
        } else if (step === 3) {
            nextBtn.innerText = 'Confirm';
        } else {
            backBtn.style.display = 'block';
            nextBtn.innerText = 'Next step';
        }
 
        changeStep(step);
    }
 
    function pagesTraverse(step) {
        if (validateStep(currentPage)) {
            page[currentPage].style.display = 'none';
            currentPage = currentPage + step;
            showPage(currentPage);
        }
    }
 
    nextBtn.addEventListener('click', e => {
        pagesTraverse(1);
    });
 
    backBtn.addEventListener('click', e => {
        pagesTraverse(-1);
    });
 
    // Function to show the status of steps completed on the sidebar
    function changeStep(step) {
        const steps = document.querySelectorAll('.step');
        steps.forEach((stepElement, index) => {
            if (index == step) {
                stepElement.firstElementChild.style.backgroundColor = 'hsl(206, 94%, 87%)';
                stepElement.firstElementChild.style.color = 'hsl(213, 96%, 18%)';
            } 
            else {
                stepElement.firstElementChild.style.backgroundColor = '';
                stepElement.firstElementChild.style.color = '';
            }
        });
    }
 
    // Main validation function
    function validateStep(step) {
        switch (step) {
            case 0:
                return validateStep1();
            case 1:
                return validateStep2();
            default:
                return true;
        }
    }
 
// Function to validate Step 1
function validateStep1() {
    let valid = true;
 
    // Validate Name
    if (nameInput.value === '') {
        nameInput.style.borderColor = 'hsl(354, 84%, 57%)';
        document.getElementById('name-error').innerText = 'This field is required';
        valid = false;
    } else {
        nameInput.style.borderColor = 'hsl(229, 24%, 87%)';
        document.getElementById('name-error').innerText = '';
    }
 
    // Validate Email
    if (emailInput.value === '') {
        emailInput.style.borderColor = 'hsl(354, 84%, 57%)';
        document.getElementById('email-error').innerText = 'This field is required';
        valid = false;
    } else {
        emailInput.style.borderColor = 'hsl(229, 24%, 87%)';
        document.getElementById('email-error').innerText = '';
    }
 
    // Validate Number
    if (numberInput.value === '') {
        numberInput.style.borderColor = 'hsl(354, 84%, 57%)';
        document.getElementById('number-error').innerText = 'This field is required';
        valid = false;
    } else {
        numberInput.style.borderColor = 'hsl(229, 24%, 87%)';
        document.getElementById('number-error').innerText = '';
    }
 
    // vailidate inputs:
        
    // const name = /^[a-zA-Z]+ [a-zA-Z]+/;
    const name = /^[a-zA-Z]+( [a-zA-Z]+)?$/;
    const email =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const number = /^\d{10}$/;
 
    const nameCheck = name.test(nameInput.value)
    const emailCheck = email.test(emailInput.value)
    const numberCheck = number.test(numberInput.value)
 
    if(nameCheck == false){
        nameInput.style.borderColor = 'hsl(354, 84%, 57%)';
        document.getElementById('name-error').innerText = 'Enter a valid name';
        valid = false;
    }   
    else{
        nameInput.style.borderColor = 'hsl(229, 24%, 87%)';
        document.getElementById('name-error').innerText = '';
    }
 
    if(emailCheck == false){
        emailInput.style.borderColor = 'hsl(354, 84%, 57%)';
        document.getElementById('email-error').innerText = 'Enter a valid email';
        valid = false;
    }
    else{
        emailInput.style.borderColor = 'hsl(229, 24%, 87%)';
        document.getElementById('name-error').innerText = '';
    }
 
 
    if(numberCheck == false){
        numberInput.style.borderColor = 'hsl(354, 84%, 57%)';
        document.getElementById('number-error').innerText = 'Enter a valid number';
        valid = false;
    }
    else {
        numberInput.style.borderColor = 'hsl(229, 24%, 87%)';
        document.getElementById('name-error').innerText = '';
    }
 
    return valid;
}
     
 

let selected = false;
function validateStep2(){
    console.log(selected)
    if(selected == false){
        alert('please select a plan');
    }
    console.log(selected)
    return selected;
}

 
    // Toggle button logic
    document.addEventListener("DOMContentLoaded", e=>{
        let active = false;
 
    function toggle() {
        let toggle = document.querySelector('.toggle');
        active = !active;
        if (active) {
            toggle.classList.add('active');
            yearlyPlan.style.display = 'block';
            monthlyPlan.style.display = 'none';
            yearlyAddon.style.display = 'block';
            monthlyAddon.style.display = 'none';
        } else {
            toggle.classList.remove('active');
            yearlyPlan.style.display = 'none';
            monthlyPlan.style.display = 'block';
            yearlyAddon.style.display = 'none';
            monthlyAddon.style.display = 'block';
        }
    }
 
    toggle();
 
    const toggleSwitch = document.querySelector('.toggle');
    toggleSwitch.addEventListener('click', toggle);
    })
    

    



    // Function to add selected plan type to the last page
    let planArray = [];
    let addonArray = [];
 
    const addonBoxes = document.querySelectorAll('#select');

    planType.forEach(plan => {
        plan.addEventListener('click', e => {
            planType.forEach(p => {
                p.style.backgroundColor = 'transparent';
                p.style.border = '0.1em solid hsl(229, 24%, 87%)';
                selected = true;
            });
            
            addonArray = [];
            addonBoxes.forEach(box=>{
                box.checked = false;
                box.parentElement.parentElement.style.backgroundColor = 'transparent';
                box.parentElement.parentElement.style.border = '0.1em solid hsl(229, 24%, 87%)';    
            })


            plan.style.backgroundColor = 'hsl(231, 100%, 99%)';
            plan.style.border = '0.1em solid hsl(243, 100%, 62%)';
 
            let selectedPlan = plan.querySelector('#item').innerText;
            const selectedPrice = plan.querySelector('#cost').innerText;

            let toggle = document.querySelector('.toggle');
            if(toggle.classList.contains('active')){
                selectedPlan = `${selectedPlan}(Yearly)`
            }
            else{
                selectedPlan = `${selectedPlan}(Monthly)`
            }
            
            const planDetails = {
                planText: selectedPlan,
                planPrice: selectedPrice,
            };
            planArray = [planDetails];
 
            const viewDetails = document.querySelector('.view-details');
            viewDetails.innerHTML = ''; // Clear previous details
 
            planArray.forEach(element => {
                const text = document.createElement('p');
                const price = document.createElement('p');
 
                text.innerText = element.planText;
                price.innerText = element.planPrice;
 
                const finalDetails = document.createElement('div');
                finalDetails.setAttribute('class', 'final-details');
 
                finalDetails.appendChild(text);
                finalDetails.appendChild(price);
 
                viewDetails.appendChild(finalDetails);
            });
 
            addSeparator();
        });
    });
 

    // Function to add selected add-ons to the last page
    // const addonBoxes = document.querySelectorAll('#select');
    // let addonArray = [];
 
    addonBoxes.forEach(box => {
        box.addEventListener('change', e => {
            const addonText = box.nextElementSibling.firstElementChild.innerText;
            const addonPrice = box.parentElement.parentElement.lastElementChild.innerText;
 
            const addonDetails = {
                planText: addonText,
                planPrice: addonPrice,
            };
 
            if(box.checked) {
                box.parentElement.parentElement.style.backgroundColor = 'hsl(217, 100%, 97%)';
                box.parentElement.parentElement.style.border = '0.1em solid hsl(243, 100%, 62%)';
                addonArray.push(addonDetails);
            } else {
                box.parentElement.parentElement.style.backgroundColor = 'transparent';
                box.parentElement.parentElement.style.border = '0.1em solid hsl(229, 24%, 87%)';
                addonArray = addonArray.filter(addon => addon.planText !== addonText);
            }
 
            const viewDetails = document.querySelector('.view-details');
            viewDetails.innerHTML = ''; // Clear previous details
 
            planArray.forEach(element => {
                const text = document.createElement('p');
                const price = document.createElement('p');
 
                text.innerText = element.planText;
                price.innerText = element.planPrice;
 
                const finalDetails = document.createElement('div');
                finalDetails.setAttribute('class', 'final-details');
 
                finalDetails.appendChild(text);
                finalDetails.appendChild(price);
 
                viewDetails.appendChild(finalDetails);
            });
 
            addSeparator();
 
            addonArray.forEach(element => {
                const text = document.createElement('p');
                const price = document.createElement('p');
                price.setAttribute('id', 'addon-price')
 
                text.innerText = element.planText;
                price.innerText = element.planPrice;
 
                const finalDetails = document.createElement('div');
                finalDetails.setAttribute('class', 'final-details');
 
                finalDetails.appendChild(text);
                finalDetails.appendChild(price);
 
                viewDetails.appendChild(finalDetails);
            });
        });
    });
 
    // Function to add a separator line between plan details and addon details
    function addSeparator() {
        const viewDetails = document.querySelector('.view-details');
        const separator = document.createElement('hr');
        viewDetails.appendChild(separator);


        const change = document .createElement('p');
        change.setAttribute('id', 'changePlan')
        change.innerText = "Change";
        change.style.color = "grey";
        change.style.textDecoration = "underline"
        separator.insertAdjacentElement('beforebegin', change)
        // viewDetails.appendChild(change)


        change.addEventListener("click", e=>{
            page[3].style.display = 'none'   
            currentPage = 1;
            showPage(currentPage);     
        })

        change.addEventListener('mouseover', e=>{
            change.style.color = 'hsl(243, 100%, 62%)';
        })
        change.addEventListener('mouseout', e=>{
            change.style.color = 'grey';
        })
 
    }
 

    // Function to calculate total
    nextBtn.addEventListener('click', e => {
        if (currentPage == 3) {
            const prices = document.querySelectorAll('.final-details p:nth-child(2)');
            console.log(prices)

            let sum = 0;
            prices.forEach(price => {
                const priceValue = price.innerText;
                let matches = priceValue.match(/(\d+)/);
                if (matches) {
                    sum += Number(matches[0]);
                }
            });
 
            const total = document.querySelector('.total');
            let planWiseSum = sum;
            let planWiseTotal;
            let toggle = document.querySelector('.toggle');
            if(toggle.classList.contains('active')){
                planWiseSum = `${planWiseSum}/yr`
                planWiseTotal = 'Total (per year)'
            }
            else{
                planWiseSum = `${planWiseSum}/mo`
                planWiseTotal = 'Total (per month)'
            }
            total.innerHTML = `<p>${planWiseTotal}</p><p id='total-price'>$${planWiseSum}</p>`;
            total.lastElementChild.style.color = "blue";
            total.lastElementChild.style.fontSize = "1.2em";
            total.firstElementChild.style.color = "hsl(231, 11%, 63%)";
        }

        if(currentPage == 4){
            // saving data to localstorge

            const savedData = JSON.parse(localStorage.getItem('usersData')) || [];

            const totalPrice = document.getElementById('total-price').innerText;
            const plan = document.querySelector('.final-details').firstElementChild.innerText;
            const indiviualData = {
                'name' : nameInput.value,
                'email' : emailInput.value,
                'number' : numberInput.value,
                'plan' : plan,
                'addons' : addonArray,
                'total' : totalPrice,
            }
    
            savedData.push(indiviualData);
            localStorage.setItem('usersData', JSON.stringify(savedData))
        }
    });





    










gsap.from(".head" ,{x:100,opacity: 0,
    duration: .6,
    delay: 0.8}
)
gsap.from(".head1" ,{x:100,opacity: 0,
    duration: .6,
    delay: 1.6}
)
gsap.from(".head2" ,{x:100,opacity: 0,
    duration: .6,
    delay: 2.4}
)
gsap.from(".head3" ,{x:100,opacity: 0,
    duration: .6,
    delay: 3.2}
)
gsap.from(".btn" ,{opacity: 0,
    duration: .6,
    delay: 3.9}
)


const btn = document.querySelector(".btn");
btn.addEventListener("click", calculateAmount);
function calculateAmount(e){
    
    e.preventDefault();
    const block= document.querySelector(".down");
    block.style.display ="block";
    
    const inputBill = document.querySelector(".inputBill").value;
    const inputPerson = document.querySelector(".inputPerson").value;
    const tip = document.querySelector("#tip").value;
    if(inputBill==="" || inputPerson===""){
        block.style.display ="none";
        Swal.fire('Please enter your information')
    }
    
    let amountPerPerson = inputBill/inputPerson;
    let tipPerPerson = (inputBill*tip)/inputPerson;
    let totalSum = amountPerPerson+tipPerPerson;
    let totalBillWithTipp = (inputBill*tip)+(amountPerPerson*inputPerson);
    totalBillWithTipp=totalBillWithTipp.toFixed(2);
    amountPerPerson=amountPerPerson.toFixed(2);
    tipPerPerson=tipPerPerson.toFixed(2);
    totalSum=totalSum.toFixed(2);

    document.querySelector(".res1").textContent = totalBillWithTipp;
    document.querySelector(".res2").textContent = amountPerPerson;
    document.querySelector(".res3").textContent = tipPerPerson;
    document.querySelector(".res4").textContent = totalSum;
gsap.from(".head5" ,{
        opacity: 0,
        duration: 1.6,
        delay: 0.5}
    )
    gsap.from(".head6" ,{
        opacity: 0,
        duration: 1.6,
        delay: 1}
    )
    gsap.from(".head7" ,{
        opacity: 0,
        duration: 1.6,
        delay: 1.5}
    )
    gsap.from(".head8" ,{
        scale:-2,
        opacity: 0,
        duration: 1.6,
        delay: 2}
    )



}

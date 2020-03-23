const Input=document.getElementsByTagName("input");
const Send=document.getElementById("send");
Send.addEventListener('click',SubmitFunction);
function validate(field,regex){
    if (!regex.test(field.value)){
        alert(`please give a valid ${field.placeholder}`)
    }

}
let regEmail= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regPass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,}/;

function SubmitFunction(event){
    
    for(let i=0;i<Input.length;i++){
        if (Input[i].value==""){
            alert(`Your ${Input[i].placeholder} is required`);
        }
        else if (Input[i].name=="email"){
            validate(Input[i],regEmail);

        }
        else if (Input[i].name=="password"){
            validate(Input[i],regPass);
        }
        else alert('your Form has been successfully submitted')


    }


}
// Reset
const Reset=document.getElementById("reset");
Reset.addEventListener('click',ResetFunction);
function ResetFunction(event){
    for(let i=0;i<Input.length;i++){
        Input[i].value="";
    }
}
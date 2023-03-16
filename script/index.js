const btn = document.querySelector(".__btn");
const msg = document.querySelector(".error");
const input = document.querySelector(".form__wrapper>input")


function output(valid){

    if(valid.indexOf("@gmail.com") === -1){
        return "Please provide a valid email";
    }else{
        return null
    }

}

input.addEventListener("blur", ()=>{
    const error = output(input.value);
    msg.textContent = error;
})


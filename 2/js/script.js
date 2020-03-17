
//задание 2.1.1

document.addEventListener('click', (e) => {

    const catalogList = document.querySelector('.catalog-list');
    const cataloglistItem = document.querySelectorAll('.catalog-list-item');
    const target = e.target;
    if(target.closest('#list')){

        catalogList.style.flexDirection = 'column';
        cataloglistItem.forEach(item => item.style.width = 'calc(100% - 20px)');
    }
    if(target.closest('#grid')){
        catalogList.style.flexDirection = '';
        cataloglistItem.forEach(item => item.style.width = '');
    }
})

//Задание 2.1.2

const moreButton = document.querySelector('.more');

moreButton.addEventListener('click', async (e) => {
    const res = await fetch('http://localhost:3000/goods');
    const goods = await res.json();

    goods.forEach(item => {
        const newItem = document.createElement('li');
        const catalogList = document.querySelector('.catalog-list');
        newItem.classList.add('catalog-list-item');
        catalogList.appendChild(newItem);
    })
    moreButton.style.display = 'none';
})


const validText = () => {

    const textInput = document.querySelector('.label-text');
    if(textInput.value == ''){
        const textInputLabel = textInput.closest('.label');
        const massage = document.createElement('div');
        massage.textContent = 'Это поле обязательное';
        textInputLabel.appendChild(massage);
        return false
    }else {
        return true;
    }
}

const valid = () => {
    const textInput = document.querySelectorAll('.text-input');
    let res = true;
    textInput.forEach(input => {
        const textInputLabel = input.closest('.label');
        const massage = textInputLabel.querySelector('.massage');
        if(input.value == ''){
            massage.textContent = 'Это поле обязательное.';
            res = false;
        }else{
            massage.textContent = '';
        }
    })
    return res;
}

const validPhone = () => {
    const input = document.querySelector('.label-phone');
    const label = input.closest('.label');
    const massage = label.querySelector('.massage');
    const regExp = /\D/g;
    if(input.value == ''){
        return false;
    }
    if(regExp.test(input.value)){
        massage.innerHTML += " В этом поле только цифры";
    }else{
        massage.innerHTML += "";
    }
    return !regExp.test(input.value);
}

const validEmail = () => {
    const labelEmail = document.querySelector('.label-email');
    const label = labelEmail.closest('.label');
    let massage = label.querySelector('.massage');
    const regEmail = /\w@/g;
    
    if(labelEmail.value == ''){
        return false;
    }else{
        if(labelEmail.value.match(regEmail)){
            massage.innerHTML = "";
            return regEmail.test(labelEmail.value);
        }else{
            massage.innerHTML = "Неверный формат email";
        }
    }

    return regEmail.test(labelEmail.value);
}


const formButton = document.querySelector('.form-button');

formButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(valid() && validPhone() && validEmail()){
        console.log('+')
    }else {
        console.log('-');
    }
})

const undoArr = [];

const form = document.getElementById('form');
const undo = document.querySelector('.undo');

const removeLastAction = () => {
    if(undoArr.length !== 0){
        undoArr[undoArr.length - 1].value = '';
        undoArr.pop();
    }
}

form.addEventListener('change', (e) => {
    e.preventDefault()
    const target = e.target;
    console.log(undoArr);
    if(target.closest('input')){
        const targetInput = target.closest('input');
        if(undoArr.indexOf(targetInput) > -1){
            const inputIndex = undoArr.indexOf(targetInput);
            undoArr.splice(inputIndex,1);
            undoArr.push(targetInput);
        }else{
            undoArr.push(targetInput);
        }
    }
})

undo.addEventListener('click',(e) => {
    removeLastAction();
})




  



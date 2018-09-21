//^(?=.*\d.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^0-z]).{6,}$

'use strict';
const INPUT = document.querySelector(".password__field");
const NUMBERREGEX = RegExp(/(?=.*\d.*\d)/);
const LOWERCASEREGEX = RegExp(/(?=.*[a-z])/);
const UPPERCASEREGEX = RegExp(/(?=.*[A-Z])/);
const SPECIALRREGEX = RegExp(/(?=.*[^0-z])/);
const MINCHARREGEX = RegExp(/.{6,}/);

const NUMBERS = document.querySelector(".password__error--numbers");
const LOWERCASE = document.querySelector(".password__error--lowercase");
const UPPERCASE = document.querySelector(".password__error--uppercase");
const SPECIAL = document.querySelector(".password__error--special");
const MINCHAR = document.querySelector(".password__error--minchar");


INPUT.onkeyup = () =>{
    if(NUMBERREGEX.test(INPUT.value)){
        NUMBERS.style.display = "none";
    }else{
        NUMBERS.style.display = "block";
    }

    if(LOWERCASEREGEX.test(INPUT.value)){
        LOWERCASE.style.display = "none";
    }else{
        LOWERCASE.style.display = "block";
    }

    if(UPPERCASEREGEX.test(INPUT.value)){
        UPPERCASE.style.display = "none";
    }else{
        UPPERCASE.style.display = "block";
    }

    if(SPECIALRREGEX.test(INPUT.value)){
        SPECIAL.style.display = "none";
    }else{
        SPECIAL.style.display = "block";
    }

    if(MINCHARREGEX.test(INPUT.value)){
        MINCHAR.style.display = "none";
    }else{
        MINCHAR.style.display = "block";
    }
};
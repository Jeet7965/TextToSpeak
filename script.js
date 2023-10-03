const btn = document.getElementById("btn")
const textArea=document.getElementById('textarea')
const speaktext=new SpeechSynthesisUtterance();
let voices =[];
let select = document.getElementById("option")

window.speechSynthesis.onvoiceschanged=(e)=>{
    voices=window.speechSynthesis.getVoices();
    const HindiVoices =voices.filter((voice)=>voice.lang.startsWith('hi'));
    const EnglishVoices =voices.filter((voice)=>voice.lang.startsWith('en'));
    speaktext.voice =HindiVoices[0] || EnglishVoices [0];
    HindiVoices.concat(EnglishVoices).forEach((element,i)=>{
        select.options[i]=new Option(element.name,i)
    })

};


btn.addEventListener("click",(e)=>{
    let inputText=textArea.value;
    speaktext.text=inputText;
    speaktext.lang="hi-IN"
    window.speechSynthesis.speak(speaktext)
})
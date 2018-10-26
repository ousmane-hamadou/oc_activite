var btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    console.log('Vous avez soumis le formulaire, bye!')
    var name = document.querySelector('[placeholder]').value
    alert(name)
})
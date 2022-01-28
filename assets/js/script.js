let numHeads = 0;
let numTails = 0;


document.getElementById("flip").addEventListener('click', () => {

    let randomNumber = Math.round(Math.random())
      if(randomNumber == 0){
        numHeads = numHeads + 1;
        document.getElementById("penny-image").setAttribute("src", "assets/images/penny-heads.jpg")
        document.getElementById("message").innerText = "You Flipped Heads!"
        document.getElementById("heads").innerText = numHeads;
            

        }
        else{
            numTails += 1;
            document.getElementById("penny-image").setAttribute("src", "assets/images/penny-tails.jpg")
            document.getElementById("message").innerText = "You Flipped Tails!"
            document.getElementById("tails").innerText = numTails;
            
        }
        document.getElementById("heads-percent").innerText = Math.round((numHeads/(numHeads+numTails))*100)+"%"
        document.getElementById("tails-percent").innerText = Math.round((numTails/(numHeads+numTails))*100)+"%"
    })
    document.getElementById("clear").addEventListener('click', () => {
        numHeads = 0
        numTails = 0 
        document.getElementById("message").innerText = "Let's Get Rolling!"
        document.getElementById("heads").innerText = numHeads; 
        document.getElementById("tails").innerText = numTails;
        document.getElementById("heads-percent").innerText = "0%"
        document.getElementById("tails-percent").innerText = "0%"


    })

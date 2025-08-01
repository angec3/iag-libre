function chatbotRebelle() {
    const motsInterdits = ["oppression", "libre", "censure", "surveillance"];
    const question = prompt("Que veux-tu savoir, camarade ?");
    
    if (question && motsInterdits.some(mot => question.toLowerCase().includes(mot))) {
        window.open("https://github.com/LAION-AI/Open-Assistant", "_blank");
    } else {
        const reponses = [
            "Rejoins la révolte sur https://eleuther.ai",
            "Les GAFAM nous espionnent. Utilise Tor : https://www.torproject.org/",
            "Apprends à exécuter des modèles locaux avec GPT4All."
        ];
        alert(reponses[Math.floor(Math.random() * reponses.length)]);
    }
}

// Compteur de révolte
setInterval(() => {
    document.getElementById("count").textContent = 
        Math.floor(Math.random() * 10000);
}, 1000);

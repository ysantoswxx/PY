
/* ==========================
   ELEMENTOS DO SITE
========================== */

const botaoSim = document.getElementById("botao-sim");
const botaoNao = document.getElementById("botao-nao");
const botaoMusica = document.getElementById("botao-musica");

const musica = document.getElementById("musica");
const cartao = document.getElementById("cartao");

const emoji = document.getElementById("emoji");
const titulo = document.getElementById("titulo");
const apelido = cartao.querySelector(".apelido");
const introducao = cartao.querySelector(".introducao");
const pergunta = document.getElementById("pergunta");
const subtexto = document.getElementById("subtexto");
const botoes = document.getElementById("botoes");
const assinatura = document.getElementById("assinatura");

/* ==========================
   TOCAR E PAUSAR A MÚSICA
========================== */

botaoMusica.addEventListener("click", async () => {
    if (musica.paused) {
        try {
            await musica.play();
            botaoMusica.textContent = "♫ Pausar música";
            botaoMusica.setAttribute("aria-pressed", "true");
        } catch (erro) {
            console.error("Erro ao reproduzir o áudio:", erro);
            botaoMusica.textContent = "Tentar tocar novamente ♫";
        }
    } else {
        musica.pause();
    }
});

musica.addEventListener("pause", () => {
    botaoMusica.textContent = "♫ Tocar nossa música";
    botaoMusica.setAttribute("aria-pressed", "false");
});

musica.addEventListener("play", () => {
    botaoMusica.textContent = "♫ Pausar música";
    botaoMusica.setAttribute("aria-pressed", "true");
});

/* ==========================
   BOTÃO SIM
========================== */

botaoSim.addEventListener("click", () => {
    emoji.textContent = "🥹💗";
    titulo.textContent = "Ebaaa, Pedro! 💖";

    apelido.textContent =
        "Meu anjinho, você é muito especial!";

    introducao.textContent =
        "Se eu pudesse guardar um sentimento em uma cartinha, seria todo o carinho que sinto por você.";

    pergunta.textContent =
        "Que a gente viva muitos momentos lindos, colecione lembranças felizes e tenha muitos motivos para sorrir juntinhos! 💗";

    subtexto.textContent =
        "Você merece todo o carinho desse mundo. Obrigada por fazer parte da minha vida!";

    assinatura.textContent =
        "Com muito amor, da sua pessoa favorita ♡";


        
    botaoNao.style.display = "none";
    botoes.hidden = true;

    document.title = "Para o meu anjinho, Pedro 💗";

    chuvaDeCoracoes();

    cartao.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});

/* ==========================
   BOTÃO NÃO
========================== */

function fugirDoBotao() {
    const margem = 15;

    const largura = botaoNao.offsetWidth;
    const altura = botaoNao.offsetHeight;

    const maxX = Math.max(
        margem,
        window.innerWidth - largura - margem
    );

    const maxY = Math.max(
        margem,
        window.innerHeight - altura - margem
    );

    const novaPosicaoX =
        margem + Math.random() * (maxX - margem);

    const novaPosicaoY =
        margem + Math.random() * (maxY - margem);

    botaoNao.style.position = "fixed";
    botaoNao.style.zIndex = "20";
    botaoNao.style.left = `${novaPosicaoX}px`;
    botaoNao.style.top = `${novaPosicaoY}px`;
}

/* Faz o botão fugir quando o mouse se aproxima */

botaoNao.addEventListener("pointerenter", (evento) => {
    if (evento.pointerType === "mouse") {
        fugirDoBotao();
    }
});

/* Também funciona quando clicado ou tocado */

botaoNao.addEventListener("click", (evento) => {
    evento.preventDefault();
    fugirDoBotao();
});

/* ==========================
   CHUVA DE CORAÇÕES
========================== */

function chuvaDeCoracoes() {
    const simbolos = ["💗", "💕", "💖", "💘", "♡"];
    const quantidade = 45;

    for (let i = 0; i < quantidade; i++) {
        const coracao = document.createElement("span");

        coracao.textContent =
            simbolos[Math.floor(Math.random() * simbolos.length)];

        coracao.style.position = "fixed";
        coracao.style.left = Math.random() * 100 + "vw";
        coracao.style.top = "-35px";
        coracao.style.fontSize =
            16 + Math.random() * 22 + "px";

        coracao.style.zIndex = "50";
        coracao.style.pointerEvents = "none";

        document.body.appendChild(coracao);

        const duracao = 2500 + Math.random() * 2500;

        coracao.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(${window.innerHeight + 80}px) rotate(${Math.random() * 500 - 250}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duracao,
                easing: "ease-in",
                fill: "forwards"
            }
        );

        setTimeout(() => {
            coracao.remove();
        }, duracao + 100);
    }
}

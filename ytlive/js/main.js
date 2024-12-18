new Vue({
  el: "#app",
  data: {
    tempoEmSegundos: 5, //Tempo em segundos do delay
    min: 600, // valor mÃ­nimo de pessoas na live
    max: 1000, // mÃ¡ximo de pessoas na live

    //aqui definimos os comentarios, com imagem,nome e texto
    comentarios: [
      {
        img: "./assets/img/1.webp",
        nome: "Lia",
        texto: "This changed my life completely… can’t believe the results!",
      },
      {
        img: "./assets/img/2.webp",
        nome: "Herbert",
        texto:
          "thank youu my pain is GONE. Unreal!",
      },
      {
        img: "./assets/img/3.webp",
        nome: "Raul",
        texto:
          "Just tried it last night and I already feel different",
      },
      {
        img: "./assets/img/4.webp",
        nome: "Maria R.",
        texto:
          " how is this not all over the news ",
      },
      {
        img: "./assets/img/5.webp",
        nome: "Selenna",
        texto: " Best thing I’ve found for energy and pain relief. Hands down!",
      },
      {
        img: "./assets/img/6.webp",
        nome: "Ester R",
        texto:
          " My husband has been using this for two days and is blown away!",
      },
      {
        img: "./assets/img/7.webp",
        nome: "Love2",
        texto:
          " Thank you Pastor Matthew, for sharing this with us ",
      },
      {
        img: "./assets/img/8.webp",
        nome: "Brunno",
        texto:
          "Are these results permanent? Anyone else tried this?",
      },
      {
        img: "./assets/img/9.webp",
        nome: "Leo",
        texto: "Can’t believe how many people are seeing results with this",
      },
      {
        img: "./assets/img/10.webp",
        nome: "Cleo M.",
        texto: "If this works for me, I’m telling everyone I know",
      },
      {
        img: "./assets/img/11.webp",
        nome: "Lady L.",
        texto:
          "I never thought I’d feel this good again",
      },
      {
        img: "./assets/img/12.webp",
        nome: "The Weed",
        texto:
          "Thank u <3",
      },
      {
        img: "./assets/img/13.webp",
        nome: "Michael",
        texto: "So glad I found this before the page got taken down!",
      },
      {
        img: "./assets/img/14.webp",
        nome: "Roque",
        texto: "He deserves a Nobel Prize for this. Seriously",
      },
      {
        img: "./assets/img/15.webp",
        nome: "Thiago",
        texto: "My grandma started using it last week, and her joint pain is almost gone. This is unreal",
      },
      {
        img: "./assets/img/16.webp",
        nome: "Rodrygo ",
        texto:
          "Can someone confirm if this worked for them?",
      },
      {
        img: "./assets/img/17.webp",
        nome: "DJ Trash",
        texto:
          "I’m usually skeptical, but my best friend swore by it, and now I get it. This works!",
      },
      {
        img: "./assets/img/18.webp",
        nome: "Alone",
        texto:
          "Just finished the video, and I’m about to try it tonight. Fingers crossed",
      },
      {
        img: "./assets/img/19.webp",
        nome: "Mixely",
        texto:
          " I’m honestly speechless",
      },
      {
        img: "./assets/img/20.webp",
        nome: "Pale Man",
        texto: "Yesss! Thank youu",
      },
    ],

    btnDisplay: "none", //nÃ£o mexe
    contador: 730, //nÃ£o mexe
    comentariosExibidos: [], //nÃ£o mexe
    indiceComentario: 0, //nÃ£o mex
    showContent: true, //nÃ£o mex
  },
  mounted() {
    this.exibirComentario();
    this.delay();
    this.atualizarContador();
  },
  methods: {
    delay() {
      setTimeout(() => {
        this.btnDisplay = "flex";
      }, this.tempoEmSegundos * 1000);
    },
    gerarNumeroAleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    atualizarContador() {
      setInterval(() => {
        this.contador = this.gerarNumeroAleatorio(this.min, this.max);
      }, this.gerarNumeroAleatorio(15000, 30000));
    },
    exibirComentario() {
      if (this.indiceComentario < this.comentarios.length) {
        this.comentariosExibidos.push(this.comentarios[this.indiceComentario]);
        this.indiceComentario++;
        setTimeout(
          this.exibirComentario,
          this.gerarNumeroAleatorio(10000, 30000)
        );
      }
    },
    atualizarContador() {
      setInterval(() => {
        this.contador = this.gerarNumeroAleatorio(this.min, this.max);
      }, this.gerarNumeroAleatorio(5000, 20000));
    },
    toggleContent() {
      this.showContent = !this.showContent;
    },
  },
});
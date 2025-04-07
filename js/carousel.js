

//carousel

//Array storage class
let carouselArr = [];
//class Carousel
class Carousel {
    constructor(imagem, texto, link) {
        this.Imagem = imagem;
        this.Texto = texto;
        this.Link = link;
    }



    static Start(arr) {
        if (arr) {

            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.addDiv(arr)
                Carousel.Next(); //start
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 2000);
            }

        } else {
            throw "Method Start need a Array Variable.";
        }
    }
    static Next() {
        document.querySelectorAll('#carousel a').forEach(element => {
            element.style.display = 'none';
        });
        document.querySelectorAll('#carousel-title a').forEach(element => {
            element.style.display = 'none';
        });
        document.querySelector(`#carousel a:nth-child(${Carousel._sequence + 1})`).style.display = 'inline';
        document.querySelector(`#carousel-title a:nth-child(${Carousel._sequence + 1})`).style.display = 'inline';

        (Carousel._sequence >= Carousel._size - 1) ? Carousel._sequence = 0 : Carousel._sequence++;
        // if (Carousel._sequence >= Carousel._size-1) {
        //     Carousel._sequence = 0;
        // } else {
        //     Carousel._sequence++;
        // }
    }

    static addDiv(arr) {
        for (let i = 0; i < arr.length; i++) {

            const carouselAtual = arr[i];
            const carouselImg = carouselAtual.Imagem;
            const carouselTexto = carouselAtual.Texto;
            const carouselLink = carouselAtual.Link;

            document.querySelector('#carousel').innerHTML += `<a href="${carouselLink}"><img src="img/${carouselImg}" alt="${carouselTexto}"></a>`
            document.querySelector('#carousel-title').innerHTML += `<a href="${carouselLink}">${carouselTexto}</a>`
        }
    }
};

//car
let carArr = [];

class Car {


    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;

    }
}

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if (carClass instanceof Car) {
        if (el.checked) {
            carArr.push(carClass)
        } else {
            let index = GetCarArrPosition(carArr, carClass)
            carArr.splice(index, 1)

        }
        if (carArr.length >= 2) {
            document.querySelectorAll(".checkbox").forEach(element => {
                if (!element.checked) {
                    element.setAttribute("disabled", true)
                }
            })
        } else {
            document.querySelectorAll(".checkbox").forEach(element => {
                element.removeAttribute("disabled")
            });
        }
    } else {
        throw "You need set a Car Class";
    }

    console.log(carArr)

}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    for (let i = 0; i < carArr.length; i++) {
        
        let comparecarro = carArr[i];
       
        document.querySelector(`#compare_image_${i}`).innerHTML = `<img src="${comparecarro.image}" alt="${comparecarro.nome}">`
        document.querySelector(`#compare_modelo_${i}`).innerHTML = comparecarro.nome;
        document.querySelector(`#compare_alturacacamba_${i}`).innerHTML = comparecarro.alturaCacamba;
        document.querySelector(`#compare_alturaveiculo_${i}`).innerHTML = comparecarro.alturaVeiculo;
        document.querySelector(`#compare_alturasolo_${i}`).innerHTML = comparecarro.alturaSolo;
        document.querySelector(`#compare_capacidadecarga_${i}`).innerHTML = comparecarro.capacidadeCarga;
        document.querySelector(`#compare_motor_${i}`).innerHTML = comparecarro.motor;
        document.querySelector(`#compare_potencia_${i}`).innerHTML = comparecarro.potencia;
        document.querySelector(`#compare_volumecacamba_${i}`).innerHTML = comparecarro.volumeCacamba;
        document.querySelector(`#compare_roda_${i}`).innerHTML = comparecarro.roda;
        document.querySelector(`#compare_preco_${i}`).innerHTML = (comparecarro.preco).toLocaleString('pt-BR',{ style:'currency',currency:'BRL'});
    }
}


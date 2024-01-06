let switchPrices = document.getElementById("switch-price");

const getPrice = async () => {

        if(!(switchPrices.classList.contains("discount"))){
                
                switchPrices.classList.toggle("discount");
                let request = await axios("preciosDescuento.txt");

                document.getElementById("price1").innerHTML = request.data.price1;
                document.getElementById("price2").innerHTML = request.data.price2;
                document.getElementById("price3").innerHTML = request.data.price3;
                document.getElementById("price4").innerHTML = request.data.price4;
                document.getElementById("price5").innerHTML = request.data.price5;
                document.getElementById("price6").innerHTML = request.data.price6;

                switchPrices.innerHTML = "Eliminar Descuento";
        }
        else{
                switchPrices.classList.toggle("discount");
                location.reload();
        }

}

document.getElementById("switch-price").addEventListener("click", getPrice);

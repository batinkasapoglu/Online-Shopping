function arttir() {
    var miktar = document.getElementById("miktar");
    miktar.value = Number(miktar.value) +1;

    hesapla();
}

function azalt() {
    var miktar = document.getElementById("miktar");
    var yeniMiktar = Number(miktar.value);

    if (yeniMiktar > 0) {
        miktar.value = Number(miktar.value) -1;
    }

 hesapla();
}


function hesapla() {
    var toplamMiktar = document.getElementById("miktar").value;
    var fiyat = document.getElementById("fiyat");
    var yeniFiyat = Number(fiyat.innerHTML);
    var subTotal = document.getElementById("subTotal");
    var tax = document.getElementById("tax");
    var odenecek = document.getElementById("odenecek");

        toplamFiyat = toplamMiktar * yeniFiyat;
        subTotal = toplamFiyat;
        tax = toplamFiyat * 18 /100;
        odenecek = subTotal + tax;
        



        document.getElementById("toplamFiyat").innerHTML = toplamFiyat;
        document.getElementById("subTotal").innerHTML = subTotal;
        document.getElementById("tax").innerHTML = tax;
        document.getElementById("odenecek").innerHTML = odenecek;
        
}



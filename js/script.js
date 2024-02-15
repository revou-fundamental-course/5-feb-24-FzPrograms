function kalkulator() {
    var input = document.getElementById("input-field");
    var hitung = document.getElementById("hasil");
    var cara = document.getElementById("cara");
    const kali = 1.8;
    const tambah = 32;

    if (input.value !== "") {
        var suhu = parseFloat(input.value);
        var hasil = suhu * kali + tambah;
        hitung.textContent = hasil;
        cara.textContent = `${input.value}°C * (9/5) + ${tambah} = ${hasil}°F`;
    } else {
        hitung.textContent = "";
        cara.textContent = "";
        input.classList.add('error');
    }
}

function reset() {
    var input = document.getElementById('input-field');
    var hitung = document.getElementById("hasil");
    var cara = document.getElementById("cara");

    hitung.textContent = "";
    cara.textContent = "";
    input.classList.remove('error');
    input.value = "";
}

function reverse() {
    var input = document.getElementById("input-field");
    var hitung = document.getElementById("hasil");
    var cara = document.getElementById("cara");
    const kali = 5 / 9;
    const tambah = 32;

    if (input.value !== "") {
        var suhu = parseFloat(input.value);
        var hasil = kali * (suhu - tambah);
        hitung.textContent = hasil;
        cara.textContent = `9/5 * (${input.value}°F - ${tambah}) = ${hasil}°C`;
    } else {
        input.classList.add('error');
        hitung.textContent = "";
        cara.textContent = "";
    }
}

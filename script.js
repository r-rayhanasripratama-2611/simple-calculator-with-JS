let angkapertama, angkakedua, hasil;
document.getElementById("jumlahkan").onclick = function () {
  angkapertama = document.getElementById("angkapertama").value;
  angkakedua = document.getElementById("angkakedua").value;
  htambah = parseFloat(angkapertama) + parseFloat(angkakedua);
  document.getElementById("hasilnya").textContent = htambah;
};

document.getElementById("kurangkan").onclick = function () {
  angkapertama = document.getElementById("angkapertama").value;
  angkakedua = document.getElementById("angkakedua").value;
  hkurang = parseFloat(angkapertama) - parseFloat(angkakedua);
  document.getElementById("hasilnya").textContent = hkurang;
};

document.getElementById("kali").onclick = function () {
  angkapertama = document.getElementById("angkapertama").value;
  angkakedua = document.getElementById("angkakedua").value;
  hkali = parseFloat(angkapertama) * parseFloat(angkakedua);
  document.getElementById("hasilnya").textContent = hkali;
};

document.getElementById("bagi").onclick = function () {
  angkapertama = document.getElementById("angkapertama").value;
  angkakedua = document.getElementById("angkakedua").value;
  hbagi = parseFloat(angkapertama) / parseFloat(angkakedua);
  document.getElementById("hasilnya").textContent = hbagi;
};

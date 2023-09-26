function getEleSpan(id) {
  return document.getElementById(id);
}
function kiemTraRong(value, mess, idSpan) {
  var span = getEleSpan(idSpan);
  if (value == "") {
    span.innerHTML = mess;
    return false;
  } else {
    span.innerHTML = "";
    return true;
  }
}

function kiemTraRegex(regex, value, span, mess) {
  if (regex.test(value)) {
    span.innerHTML = "";
    return true;
  } else {
    span.innerHTML = mess;
    return false;
  }
}

// function kiemTraTrungTaiKhoan(nv) {
//   for (let i = 0; i < ds.length; i++) {
//     const element = array[i];

//   }

// }
function kiemTraSelect(mess, idSpan, id) {
  var span = getEleSpan(idSpan);
  var domSelectedIndex = document.getElementById(id).selectedIndex;
  if (domSelectedIndex == 0) {
    span.innerHTML = mess;
    return false;
  } else {
    span.innerHTML = "";
    return true;
  }
}

function kiemTraKyTuTaiKhoan(value, mess, idSpan) {
  var span = getEleSpan(idSpan);
  var regex = /^\d{1,6}$/;
  return kiemTraRegex(regex, value, span, mess);
}
function kiemTraTen(value, mess, idSpan) {
  var span = getEleSpan(idSpan);
  var regex = /^[a-zA-Z]+$/;
  return kiemTraRegex(regex, value, span, mess);
}
function kiemTraEmail(value, mess, idSpan) {
  var span = getEleSpan(idSpan);
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return kiemTraRegex(regex, value, span, mess);
}
function kiemTraEmail(value, mess, idSpan) {
  var span = getEleSpan(idSpan);
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return kiemTraRegex(regex, value, span, mess);
}

function kiemTraMatKhau(value, mess, idSpan) {
  var span = getEleSpan(idSpan);
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.{6,10})/;
  return kiemTraRegex(regex, value, span, mess);
}

function kiemTraNgayLam(value, mess, idSpan) {
  var span = getEleSpan(idSpan);
  var regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[0-1])\/\d{4}$/;
  return kiemTraRegex(regex, value, span, mess);
}

function kiemTraLuongCoBan(value, mess, idSpan) {
  var span = getEleSpan(idSpan);
  if (value >= 1000000 && value <= 20000000) {
    span.innerHTML = "";
    return true;
  } else {
    span.innerHTML = mess;
    return false;
  }
}
function kiemTraSoGioLam(value, mess, idSpan) {
  var span = getEleSpan(idSpan);
  if (value >= 80 && value <= 200) {
    span.innerHTML = "";
    return true;
  } else {
    span.innerHTML = mess;
    return false;
  }
}

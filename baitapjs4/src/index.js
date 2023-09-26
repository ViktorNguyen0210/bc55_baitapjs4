var dsnv = new DanhSachNhanVien();
getLocalStorage();
var isUpdating = false;
var nhanVienDangCapNhat = null;

function getEle(id) {
  return document.getElementById(id);
}
function layThongTinNhanVien() {
  var taiKhoan = getEle("tknv").value;
  var ten = getEle("name").value;
  var email = getEle("email").value;
  var matKhau = getEle("password").value;
  var ngayLam = getEle("datepicker").value;
  var luongCoBan = getEle("luongCB").value;
  var chucVu = getEle("chucvu").value;
  var gioLam = getEle("gioLam").value;

  var nv = new NhanVien(
    taiKhoan,
    ten,
    email,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam
  );
  var isValid = check(nv);

  if (!isValid) {
    return null;
  }
  nv.tinhTongLuong();
  nv.tinhXepLoai();
  return nv;
}
function check(nv) {
  // Kiểm tra tài khoản
  // Kiểm tra tên
  var isValid = true;
  isValid &=
    kiemTraRong(nv.taiKhoan, "Tài khoản không được rỗng", "tbTKNV") &&
    kiemTraKyTuTaiKhoan(nv.taiKhoan, "Tài khoản tối đa 6 ký tự", "tbTKNV");
  isValid &=
    kiemTraRong(nv.ten, "Tên không được rỗng", "tbTen") &&
    kiemTraTen(nv.ten, "Tên phải là chữ", "tbTen");
  // Kiểm tra Email
  isValid &=
    kiemTraRong(nv.email, "Email không được rỗng", "tbEmail") &&
    kiemTraEmail(nv.email, "Email không đúng định dạng", "tbEmail");
  // Kiểm tra mật khẩu
  isValid &=
    kiemTraRong(nv.matKhau, "Mật khẩu không được rỗng", "tbMatKhau") &&
    kiemTraMatKhau(
      nv.matKhau,
      "Mật khẩu phải từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)",
      "tbMatKhau"
    );
  // Kiểm tra ngày làm
  isValid &=
    kiemTraRong(nv.ngayLam, "Ngày không được rỗng", "tbNgay") &&
    kiemTraNgayLam(nv.ngayLam, "Ngày làm không hợp lệ", "tbNgay");
  // Kiểm tra lương cơ bản
  isValid &=
    kiemTraRong(nv.luongCoBan, "Lương cơ bản không được rỗng", "tbLuongCB") &&
    kiemTraLuongCoBan(
      nv.luongCoBan,
      "Lương phải > 1 triệu và < 20 triệu",
      "tbLuongCB"
    );
  // Kiểm tra chức vụ
  isValid &= kiemTraSelect("Hãy chọn chức vụ", "tbChucVu", "chucvu");
  // Kiểm tra giờ làm
  isValid &=
    kiemTraRong(nv.gioLam, "Giờ làm không được rỗng", "tbGiolam") &&
    kiemTraSoGioLam(
      nv.gioLam,
      "Số giờ làm phải lớn hơn bằng 80 và bé hơn bằng 200",
      "tbGiolam"
    );
  return isValid;
}
function suaNhanVien(taiKhoan) {
  disableThem();

  var nv = dsnv.layThongTinNV(taiKhoan);
  if (!nv) {
    console.log("Nhân viên này không tồn tại");
  } else {
    getEle("tknv").value = nv.taiKhoan;
    getEle("tknv").disabled = true;
    getEle("name").value = nv.ten;
    getEle("email").value = nv.email;
    getEle("password").value = nv.matKhau;
    getEle("datepicker").value = nv.ngayLam;
    getEle("luongCB").value = nv.luongCoBan;
    getEle("chucvu").value = nv.chucVu;
    getEle("gioLam").value = nv.gioLam;
  }
}
function capNhatNhanVien() {
  var nvMoi = layThongTinNhanVien();
  if (nvMoi) {
    dsnv.capNhatNhanVien(nvMoi);
    renderListNhanVien(dsnv.arr);
    setLocalStorage();
    resetInputFields();
  }
}

function themNhanVien() {
  var nhanVien = layThongTinNhanVien();
  for (let i = 0; i < dsnv.arr.length; i++) {
    if (dsnv.arr[i].taiKhoan === nhanVien.taiKhoan) {
      getEle("tbTKNV").innerHTML = "Tài khoản này đã tồn tại";
      return;
    }
  }
  if (nhanVien) {
    dsnv.themNhanVien(nhanVien);
    renderListNhanVien(dsnv.arr);
    setLocalStorage();
  }
}

function xoaNhanVien(nv) {
  dsnv.xoaNhanVienArr(nv);
  renderListNhanVien(dsnv.arr);
  setLocalStorage();
}

function renderListNhanVien(data) {
  var content = "";
  for (let i = 0; i < data.length; i++) {
    content += `<tr>
        <td>${data[i].taiKhoan}</td>
        <td>${data[i].ten}</td>
        <td>${data[i].email}</td>
        <td>${data[i].ngayLam}</td>
        <td>${data[i].chucVu}</td>
        <td>${data[i].tongLuong}</td>
        <td>${data[i].xepLoai}</td>
        <td><button onclick="xoaNhanVien('${data[i].taiKhoan}')" class="btn btn-danger">Xóa</button>
        <button id="btnSua" onclick="suaNhanVien('${data[i].taiKhoan}')" class="btn btn-info mt-2" data-toggle="modal"
        data-target="#myModal">Sửa</button></td>
    </tr>`;
  }
  getEle("tableDanhSach").innerHTML = content;
}

function setLocalStorage() {
  var dataString = JSON.stringify(dsnv.arr);
  localStorage.setItem("DSNV", dataString);
}
function getLocalStorage() {
  if (localStorage.getItem("DSNV")) {
    var dataString = localStorage.getItem("DSNV");
    var parseJson = JSON.parse(dataString);
    dsnv.arr = parseJson;
    renderListNhanVien(dsnv.arr);
  }
}
function resetInputFields() {
  getEle("tknv").value = "";
  getEle("tknv").disabled = false;
  getEle("name").value = "";
  getEle("email").value = "";
  getEle("password").value = "";
  getEle("datepicker").value = "";
  getEle("luongCB").value = "";
  getEle("chucvu").value = "Chọn chức vụ";
  getEle("gioLam").value = "";
}

getEle("searchName").addEventListener("keyup", function () {
  var domSearch = getEle("searchName").value;
  var mangTimKiem = dsnv.timKiemTheoLoai(domSearch);
  renderListNhanVien(mangTimKiem);
});

function disableThem() {
  document.getElementById("btnThemNV").style.display = "none";
  document.getElementById("btnCapNhat").style.display = "block";
}
function disableCapNhat() {
  document.getElementById("btnCapNhat").style.display = "none";
  document.getElementById("btnThemNV").style.display = "block";
  resetInputFields();
}

class NhanVien {
  constructor(
    taiKhoan,
    ten,
    email,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam
  ) {
    this.taiKhoan = taiKhoan;
    this.ten = ten;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCoBan = luongCoBan;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.xepLoai = "";
    this.tinhTongLuong = function () {
      if (this.chucVu === "Sếp") {
        this.tongLuong = this.luongCoBan * 3;
      } else if (this.chucVu === "Trưởng phòng") {
        this.tongLuong = this.luongCoBan * 2;
      } else if (this.chucVu === "Nhân viên") {
        this.tongLuong = this.luongCoBan * 1;
      }
    };
    this.tinhXepLoai = function () {
      if (this.gioLam > 0 && this.gioLam < 160) {
        this.xepLoai = "Nhân viên trung bình";
      } else if (this.gioLam >= 160 && this.gioLam <= 176) {
        this.xepLoai = "Nhân viên khá";
      } else if (this.gioLam >= 176 && this.gioLam < 192) {
        this.xepLoai = "Nhân viên giỏi";
      } else if (this.gioLam >= 192) {
        this.xepLoai = "Nhân viên xuất sắc";
      }
    };
  }
}

class DanhSachNhanVien {
  constructor() {
    this.arr = [];
    this.themNhanVien = function (nv) {
      this.arr.push(nv);
    };
    this.xoaNhanVienArr = function (taiKhoan) {
      this.arr = this.arr.filter((nv) => nv.taiKhoan !== taiKhoan);
    };
    this.layThongTinNV = function (taiKhoan) {
      var nv = this.arr.find((item) => item.taiKhoan == taiKhoan);
      if (nv) {
        return nv;
      }
      return null;
    };

    this.capNhatNhanVien = function (nvMoi) {
      this.arr = this.arr.map((nv) => {
        if (nv.taiKhoan === nvMoi.taiKhoan) {
          return nvMoi;
        } else {
          return nv;
        }
      });
    };

    this.timKiemTheoLoai = function (keyword) {
      var mangTimKiem = [];
      for (var i = 0; i < this.arr.length; i++) {
        var nv = this.arr[i];

        var keywordLowercase = keyword.toLowerCase();
        var nvLowerCase = nv.xepLoai.toLowerCase();

        if (nvLowerCase.indexOf(keywordLowercase) !== -1) {
          mangTimKiem.push(nv);
        } else {
          console.log("no");
        }
      }
      return mangTimKiem;
    };
  }
}

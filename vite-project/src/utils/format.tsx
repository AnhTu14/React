export function ToSlug(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
  str = str.replace(/(đ)/g, "d");

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, "");

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, "-");

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, "");

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, "");

  // return
  return str;
}

export function formatName(name) {
  const hashName = name.split(" ");
  const firstName = hashName[hashName.length - 1][0];
  return firstName;
}

export function formatDate(date) {
  let a = new Date(parseInt(date));

  var year = a.getFullYear();
  var month = a.getMonth() + 1;
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + "/" + month + "/" + year + " " + hour + ":" + min;
  return time;
}

export function formatDateS(date) {
  let a = new Date(date);

  var year = a.getFullYear();
  var month = a.getMonth() + 1;
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + "/" + month + "/" + year + " " + hour + ":" + min;
  return time;
}

export const timeShip = (curentTime, shipTime) => {
  const d = new Date(curentTime);
  const dm = d.getTime();
  const ship = dm + shipTime;
  const new_milis = new Date(ship);

  var year = new_milis.getFullYear();
  var month = new_milis.getMonth() + 1;
  var date = new_milis.getDate();
  var hour = new_milis.getHours();
  var min = new_milis.getMinutes();
  var sec = new_milis.getSeconds();
  var time = hour + ":" + min + " ngày " + date + "/" + month + "/" + year;
  return time;
};

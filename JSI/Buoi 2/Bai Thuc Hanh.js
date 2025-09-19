const students = [
  {
    name: "An",
    Điểm: {
      Toan: { điểm: 7.4, Đánh_giá: "ĐB" },
      NguVan: { điểm: 8.9, Đánh_giá: "ĐB" },
      NgoaiNgu: { điểm: 8.5, Đánh_giá: "ĐB" },
      VatLy: { điểm: 9.0, Đánh_giá: "ĐB" },
      HoaHoc: { điểm: 9, Đánh_giá: "KD" },
      SinhHoc: { điểm: 9, Đánh_giá: "TB" },
      LichSu: { điểm: 8.3, Đánh_giá: "ĐB" },
      DiaLy: { điểm: 9.4, Đánh_giá: "ĐB" },
      GDCD: { điểm: 6.6, Đánh_giá: "TB" },
    },
  },
  {
    name: "Bình",
    Điểm: {
      Toan: { điểm: 3.4, Đánh_giá: "KD" },
      NguVan: { điểm: 7.9, Đánh_giá: "TB" },
      NgoaiNgu: { điểm: 5.4, Đánh_giá: "TB" },
      VatLy: { điểm: 9.4, Đánh_giá: "ĐB" },
      HoaHoc: { điểm: 6.3, Đánh_giá: "ĐB" },
      SinhHoc: { điểm: 8.6, Đánh_giá: "ĐB" },
      LichSu: { điểm: 5.2, Đánh_giá: "TB" },
      DiaLy: { điểm: 6.1, Đánh_giá: "ĐB" },
      GDCD: { điểm: 6.7, Đánh_giá: "TB" },
    },
  },
  {
    name: "Cường",
    Điểm: {
      Toan: { điểm: 9.2, Đánh_giá: "ĐB" },
      NguVan: { điểm: 7.8, Đánh_giá: "ĐB" },
      NgoaiNgu: { điểm: 8.0, Đánh_giá: "ĐB" },
      VatLy: { điểm: 8.7, Đánh_giá: "ĐB" },
      HoaHoc: { điểm: 7.5, Đánh_giá: "ĐB" },
      SinhHoc: { điểm: 7.1, Đánh_giá: "ĐB" },
      LichSu: { điểm: 6.9, Đánh_giá: "TB" },
      DiaLy: { điểm: 8.4, Đánh_giá: "ĐB" },
      GDCD: { điểm: 7.6, Đánh_giá: "ĐB" },
    },
  },
  {
    name: "Đào",
    Điểm: {
      Toan: { điểm: 6.1, Đánh_giá: "TB" },
      NguVan: { điểm: 5.4, Đánh_giá: "TB" },
      NgoaiNgu: { điểm: 4.8, Đánh_giá: "KD" },
      VatLy: { điểm: 6.3, Đánh_giá: "TB" },
      HoaHoc: { điểm: 5.9, Đánh_giá: "TB" },
      SinhHoc: { điểm: 4.7, Đánh_giá: "KD" },
      LichSu: { điểm: 6.0, Đánh_giá: "TB" },
      DiaLy: { điểm: 5.2, Đánh_giá: "TB" },
      GDCD: { điểm: 6.4, Đánh_giá: "TB" },
    },
  },
  {
    name: "Hoa",
    Điểm: {
      Toan: { điểm: 8.5, Đánh_giá: "ĐB" },
      NguVan: { điểm: 9.1, Đánh_giá: "ĐB" },
      NgoaiNgu: { điểm: 9.8, Đánh_giá: "ĐB" },
      VatLy: { điểm: 9.0, Đánh_giá: "ĐB" },
      HoaHoc: { điểm: 9.4, Đánh_giá: "ĐB" },
      SinhHoc: { điểm: 9.9, Đánh_giá: "ĐB" },
      LichSu: { điểm: 9.2, Đánh_giá: "ĐB" },
      DiaLy: { điểm: 9.5, Đánh_giá: "ĐB" },
      GDCD: { điểm: 9.3, Đánh_giá: "ĐB" },
    },
  },
];

// Tính điểm trung bình
function calcAvg(student) {
  const scores = Object.values(student.Điểm).map(s => s.điểm);
  return scores.reduce((a, b) => a + b, 0) / scores.length;
}

// Gắn trung bình học kì
for (let i = 0; i < students.length; i++) {
  let s = students[i];       // lấy ra học sinh thứ i
  s.avg = calcAvg(s);        // tính điểm TB và gán vào thuộc tính avg
}
// 3 bạn học sinh có điểm trung bình học kì cao nhất
const top3 = [...students].sort((a, b) => b.avg - a.avg).slice(0, 3);

// TBHK thấp nhất
const minStudent = students.reduce((a, b) => (a.avg < b.avg ? a : b));

// điểm trung bình học kì của cả lớp
const classAvg = students.reduce((sum, s) => sum + s.avg, 0) / students.length;

// phân loại học lực
function hocLuc(avg) {
  if (avg >= 9) return "Giỏi";
  if (avg >= 6) return "Khá";
  if (avg >= 5) return "Trung Bình";
  return "Yếu";
}
students.forEach(s => s.hocLuc = hocLuc(s.avg));

// học sinh có điểm trung bình trên 7
const above7 = students.filter(s => s.avg >= 7);

// kết quả
console.log("1) Top 3 học sinh có điểm TBHK cao nhất:");
top3.forEach(s => console.log(`   ${s.name}: ${s.avg.toFixed(2)}`));

console.log("\n2) Học sinh có điểm TBHK thấp nhất:");
console.log(`   ${minStudent.name}: ${minStudent.avg.toFixed(2)}`);

console.log("\n3) Điểm TB cả lớp:");
console.log(`   ${classAvg.toFixed(2)}`);

console.log("\n4) Học lực của từng học sinh:");
students.forEach(s => console.log(`   ${s.name}: ${s.hocLuc} (TBHK = ${s.avg.toFixed(2)})`));

console.log("\n5) Học sinh có điểm TBHK >= 7:");
above7.forEach(s => console.log(`   ${s.name}: ${s.avg.toFixed(2)}`));

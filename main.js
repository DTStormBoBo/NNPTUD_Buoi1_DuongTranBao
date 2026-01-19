// CÂU 1 
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// CÂU 2 
let products = [
    new Product(1, "Fidget Cube", 120000, 50, "Toy", true),
    new Product(2, "Divoom Ditoo Pixel", 1990000, 5, "Decor", true),
    new Product(3, "Đèn màn hình Xiaomi", 890000, 15, "Accessories", true),
    new Product(4, "Lót chuột RGB khổ lớn", 350000, 0, "Accessories", false), 
    new Product(5, "Giá đỡ Laptop nhôm", 450000, 20, "Accessories", true),
    new Product(6, "Cáp bọc dù 100W", 150000, 100, "Accessories", true),
    new Product(7, "PC Gaming Custom", 55000000, 2, "Computer", true),
    new Product(8, "Màn hình Apple Studio", 32000000, 1, "Monitor", true),
    new Product(9, "Bóng đèn Yeelight", 250000, 30, "Smart Home", true),
    new Product(10, "Google Nest Mini", 790000, 0, "Smart Home", true),
    new Product(11, "Sách Clean Code", 350000, 10, "Book", true),
    new Product(12, "Sách 'Code Dạo Ký Sự'", 120000, 5, "Book", true)
];

console.log("  Câu 2: Danh sách sản phẩm đang có trong kho");
console.log(products);

console.log("=".  repeat(150));

// CÂU 3 
const nameAndPrice = products.map(p => {
  return { name: p.name, price: p.price };
});
console.log("  Câu 3: Hiển thị tên và giá sản phẩm");
console.log(nameAndPrice);
console.log("=".  repeat(150));

// CÂU 4 
const availableProducts = products.filter(p => p.quantity > 0);
console.log("  Câu 4: Sản phẩm còn hàng trong kho");
console.log(availableProducts);
console.log("=".  repeat(150));

// CÂU 5 
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("  Câu 5: Có sản phẩm giá > 30 triệu không?");
console.log(`Kết quả: ${hasExpensiveProduct}`);
console.log("=".  repeat(150));

// CÂU 6 
const accessories = products.filter(p => p.category === "Accessories");
const allAccessoriesAvailable = accessories.every(p => p.isAvailable === true);
console.log("  Câu 6: Tất cả sản phẩm có danh mục \"Accessories\" đang bán đúng không?");
console.log(`Kết quả: ${allAccessoriesAvailable}`);
console.log("=".  repeat(150));

// CÂU 7 
const totalInventoryValue = products.reduce((acc, curr) => {
  return acc + (curr.price * curr.quantity);
}, 0);
const formattedTotal = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalInventoryValue);
console.log("  Câu 7: Tổng giá trị kho hàng");
console.log(`Tổng giá trị: ${formattedTotal}`);
console.log("=".  repeat(150));

// CÂU 8
console.log("--- Câu 8: Thông tin sản phẩm (Đã căn chỉnh) ---");
const colName = 30;
const colCate = 15;

console.log(
    "TÊN SẢN PHẨM".padEnd(colName) + " | " + 
    "DANH MỤC".padEnd(colCate) + " | " + 
    "TRẠNG THÁI"
);
console.log("-". repeat(65));
for (const p of products) {
    const nameStr = p.name.padEnd(colName); 
    const cateStr = p.category.padEnd(colCate);
    const statusStr = p.isAvailable ? "✓ Đang bán" : "✗ Ngừng bán";
    console.log(`${nameStr} | ${cateStr} | ${statusStr}`);
}

console.log("=".  repeat(150));

// CÂU 9 
console.log("  Câu 9: Chi tiết thuộc tính sản phẩm đầu tiên");
const firstProduct = products[0];
for (const key in firstProduct) {
  console.log(`  • ${key}: ${firstProduct[key]}`);
}
console.log("=".  repeat(150));

// CÂU 10 
const readyToSellNames = products
  .filter(p => p.isAvailable === true && p.quantity > 0)
  .map(p => p.name);

console.log("  Câu 10: Tên sản phẩm sẵn sàng bán");
console.log(readyToSellNames);
console.log("=".  repeat(150));
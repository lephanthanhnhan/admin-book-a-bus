// Helper function để định dạng tiền tệ Việt Nam (đ)
export const formatCurrency = (amount: number): string => {
  return amount.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  }).replace('₫', 'đ'); // Thay thế ký hiệu ₫ bằng đ để khớp với ảnh
};

// Helper function để mô phỏng độ trễ mạng
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
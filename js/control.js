$('#slide').owlCarousel({
	loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:false,	// cho xuất hiện bộ nút tới lui 
 dots:false,
})
document.addEventListener('DOMContentLoaded', () => {
  // Lấy tất cả các phần tử li trong menu
  const menuItems = document.querySelectorAll('.menu-left ul li');

  // Thêm sự kiện mouseenter và mouseleave cho các menu items
  menuItems.forEach(item => {
    const dropdown = item.querySelector('.dropdown');
    
    if (dropdown) {  // Kiểm tra xem phần tử dropdown có tồn tại hay không
      item.addEventListener('mouseenter', () => {
        dropdown.style.display = 'flex';
        dropdown.style.opacity = '1';
        dropdown.style.visibility = 'visible';
      });

      item.addEventListener('mouseleave', () => {
        dropdown.style.display = 'none';
        dropdown.style.opacity = '0';
        dropdown.style.visibility = 'hidden';
      });
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const dropdownParents = document.querySelectorAll('.has-dropdown');

  dropdownParents.forEach(parent => {
    parent.addEventListener('click', function (e) {
      e.preventDefault();

      // Toggle dropdown visibility
      const dropdown = this.querySelector('.dropdown');
      dropdown.classList.toggle('show-dropdown');

      // Close other dropdowns
      dropdownParents.forEach(other => {
        if (other !== this) {
          other.querySelector('.dropdown').classList.remove('show-dropdown');
        }
      });
    });
  });

  // Optional: Close dropdown if clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-dropdown')) {
      dropdownParents.forEach(parent => {
        parent.querySelector('.dropdown').classList.remove('show-dropdown');
      });
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const dropdownParents = document.querySelectorAll('.has-dropdown');

  dropdownParents.forEach(parent => {
    parent.addEventListener('click', function (e) {
      e.preventDefault();

      // Toggle dropdown visibility
      const dropdown = this.querySelector('.dropdown');
      dropdown.classList.toggle('show-dropdown');

      // Close other dropdowns
      dropdownParents.forEach(other => {
        if (other !== this) {
          other.querySelector('.dropdown').classList.remove('show-dropdown');
        }
      });
    });
  });

  // Optional: Close dropdown if clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-dropdown')) {
      dropdownParents.forEach(parent => {
        parent.querySelector('.dropdown').classList.remove('show-dropdown');
      });
    }
  });
});

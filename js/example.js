/* Email Me */
const contact = document.querySelector("#contact");
contact.addEventListener("click", function () {
  window.location.href = "mailto:23687599@student.uwa.edu.au";
});

/*  Change active navigation */
const pageItems = document.querySelectorAll(".page-item");
pageItems.forEach((pageItem) => {
  pageItem.addEventListener("click", function () {
    pageItems.forEach((item) => {
      item.classList.remove("active");
    });
    pageItem.classList.add("active");
  });
});

/* Hover the map then show the label for WA  */
const waArea = document.querySelector("#wa-area");
const wa = document.querySelector("#wa");
waArea.addEventListener("mouseover", function () {
  wa.style.display = "block";
});
waArea.addEventListener("mouseout", function () {
  wa.style.display = "none";
});

// 当点击超链接时，JavaScript会截取点击事件并执行一个函数
document.getElementById("ajaxLink").addEventListener("click", function (event) {
  event.preventDefault(); // 阻止超链接的默认跳转行为

  const ajaxContent = document.getElementById("ajaxContent");

  // 如果内容已经加载，仅切换显示状态
  if (ajaxContent.innerHTML !== "") {
    ajaxContent.style.display =
      ajaxContent.style.display === "none" ? "block" : "none";
    return; // 提前退出函数
  }

  // 执行AJAX请求
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // 使用服务器的响应更新网页内容
      ajaxContent.style.display = "block";
      ajaxContent.innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "../ajax_info.txt", true);
  xhttp.send();
});

window.onload = function() {
  // button
  change_list = document.getElementById("change-list");
  change_block = document.getElementById("change-block");
  change_map = document.getElementById("change-map");

  // target
  target_list = document.getElementById("display-list");
  target_block = document.getElementById("display-block");
  target_map = document.getElementById("display-map");

  // 初期化
  target_list.style.display = "block";
  target_block.style.display = "none";
  target_map.style.display = "none";

  change_list.addEventListener("click", function() {
    $(target_list).fadeIn();
    target_block.style.display = "none";
    target_map.style.display = "none";
  });
  change_block.addEventListener("click", function() {
    target_list.style.display = "none";
    $(target_block).fadeIn();
    target_map.style.display = "none";
  });
  change_map.addEventListener("click", function() {
    target_list.style.display = "none";
    target_block.style.display = "none";
    $(target_map).fadeIn();
  });
};


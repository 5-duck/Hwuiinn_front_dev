// export const OpenBtn = document.querySelector(".open_modal");
// export const modal = document.querySelector(".modal");
// export const overlay = document.querySelector(".modal_overlay");
// export const closeBtn = document.querySelector(".close_modal");
export const OpenBtn = function() {
    document.querySelector(".open_modal");
    OpenBtn.addEventListener("click", openModal);
}

export const modal = function() {
    document.querySelector(".modal");
}

export const overlay = function() {
    document.querySelector(".modal_overlay");
    overlay.addEventListener("click", closeModal);
}

export const closeBtn = function() {
    document.querySelector(".close_modal");
    closeBtn.addEventListener("click", closeModal);
}

export const openModal = () => {
    modal.classList.remove("hidden");
    };
export const closeModal = () => {
    modal.classList.add("hidden");
    };

    // dropdown
    window.onload = () => {
    // document.querySelector(".dropbtn_click").onclick = () => {
    //     dropdown();
    // };
    document.getElementsByClassName("fastfood").onclick = () => {
        showMenu(value);
    };
    const dropdown = () => {
        var v = document.querySelector(".dropdown-content");
        var dropbtn = document.querySelector(".dropbtn");
        v.classList.toggle("show");
        dropbtn.style.borderColor = "rgb(94, 94, 94)";
        document.querySelector(".dropbtn_click").onclick = () => {
            dropdown();
        };
    };

    const showMenu = (value) => {
        var dropbtn_icon = document.querySelector(".dropbtn_icon");
        var dropbtn_content = document.querySelector(".dropbtn_content");
        var dropbtn_click = document.querySelector(".dropbtn_click");
        var dropbtn = document.querySelector(".dropbtn");

        dropbtn_icon.innerText = "";
        dropbtn_content.innerText = value;
        dropbtn_content.style.color = "#252525";
        dropbtn.style.borderColor = "#3992a8";
    };
    };
    window.onclick = (e) => {
    if (!e.target.matches(".dropbtn_click")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");

        var dropbtn_icon = document.querySelector(".dropbtn_icon");
        var dropbtn_content = document.querySelector(".dropbtn_content");
        var dropbtn_click = document.querySelector(".dropbtn_click");
        var dropbtn = document.querySelector(".dropbtn");

        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
        }
        }
    }
};


    // 팝업 열기
export const show = $(document).on("click", ".write_btn", function (e){
    let target = $(this).attr("href");
    $(target).removeClass("hidden");
});

  // 외부영역 클릭 시 팝업 닫기
export const hide = $(document).mouseup(function (e){
    let ModalOverlay = $(".modal_overlay");
    if(ModalOverlay.has(e.target).length === 0){
        ModalOverlay.addClass("hidden");
    }
});
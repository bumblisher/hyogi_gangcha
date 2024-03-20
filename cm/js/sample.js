// popupUtils.js

export function openPopup(externalURL) {
    console.log("Asdasdasd");
    const dimLayer = document.querySelector(".dim-layer");
    const popupContent = document.getElementById("popupContent");
    const popup = document.getElementById("popup");
    
    // 외부 파일 가져오기
    fetch(externalURL)
        .then(response => response.text())
        .then(html => {
            popupContent.innerHTML = html;
            dimLayer.style.display = "block";
            popup.style.display = "block";
        })
        .catch(error => console.error("팝업을 가져오는 동안 오류가 발생했습니다.", error));
}

export function closePopup() {
    const dimLayer = document.querySelector(".dim-layer");
    const popup = document.getElementById("popup");
    dimLayer.style.display = "none";
    popup.style.display = "none";
}

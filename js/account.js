
window.addEventListener('DOMContentLoaded', () => {

    document.getElementById('mainPhotoContainer').addEventListener('click', () => {
        document.getElementById('mainPhotoInput').click();
    });

    document.getElementsByClassName('photoContainerHint')[0].addEventListener('click', () => {
        document.getElementById('mainPhotoInput').click();
    });

    document.getElementById('mainPhotoInput').addEventListener('change', () => {
        console.log("here")
        mainReader = new FileReader();
        mainReader.onload = function (oFREvent) {
            document.getElementById('mainPhotoContainer').getElementsByTagName('img')[0].src = oFREvent.target.result || window.URL.createObjectURL(fl[0]);
        };
        // if (document.getElementById('mainPhotoInput').files.length === 0) { return; }

        let file = document.getElementById('mainPhotoInput').files[0];
        console.log(file);
        mainReader.readAsDataURL(file);
    });

});

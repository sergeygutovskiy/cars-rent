
window.addEventListener('DOMContentLoaded', () => {

    document.getElementById('mainPhotoContainer').addEventListener('click', () => {
        document.getElementById('mainPhotoInput').click();
    });

    document.getElementsByClassName('photoContainerHint')[0].addEventListener('click', () => {
        document.getElementById('mainPhotoInput').click();
    });

    document.getElementById('mainPhotoInput').addEventListener('change', () => {
        // console.log("here")
        mainReader = new FileReader();
        mainReader.onload = function (oFREvent) {
            document.getElementById('mainPhotoContainer').getElementsByTagName('img')[0].src = oFREvent.target.result || window.URL.createObjectURL(fl[0]);
        };
        // if (document.getElementById('mainPhotoInput').files.length === 0) { return; }

        let file = document.getElementById('mainPhotoInput').files[0];
        // console.log(file);
        mainReader.readAsDataURL(file);
    });


    document.getElementById('passport1PhotoInputContainer').addEventListener('click', () => {
        document.getElementById('passport1PhotoInput').click();
    });

    document.getElementById('passport1PhotoInput').addEventListener('change', () => {
        // console.log("here")
        mainReader = new FileReader();
        mainReader.onload = function (oFREvent) {
            document.getElementById('passport1PhotoInputContainer').getElementsByTagName('img')[0].src = oFREvent.target.result || window.URL.createObjectURL(fl[0]);
        };
        // if (document.getElementById('mainPhotoInput').files.length === 0) { return; }

        let file = document.getElementById('passport1PhotoInput').files[0];
        // console.log(file);
        mainReader.readAsDataURL(file);
    });


    document.getElementById('passport2PhotoInputContainer').addEventListener('click', () => {
        document.getElementById('passport2PhotoInput').click();
    });

    document.getElementById('passport2PhotoInput').addEventListener('change', () => {
        // console.log("here")
        mainReader = new FileReader();
        mainReader.onload = function (oFREvent) {
            document.getElementById('passport2PhotoInputContainer').getElementsByTagName('img')[0].src = oFREvent.target.result || window.URL.createObjectURL(fl[0]);
        };
        // if (document.getElementById('mainPhotoInput').files.length === 0) { return; }

        let file = document.getElementById('passport2PhotoInput').files[0];
        // console.log(file);
        mainReader.readAsDataURL(file);
    });


    document.getElementById('driver1PhotoInputContainer').addEventListener('click', () => {
        document.getElementById('driver1PhotoInput').click();
    });

    document.getElementById('driver1PhotoInput').addEventListener('change', () => {
        // console.log("here")
        mainReader = new FileReader();
        mainReader.onload = function (oFREvent) {
            document.getElementById('driver1PhotoInputContainer').getElementsByTagName('img')[0].src = oFREvent.target.result || window.URL.createObjectURL(fl[0]);
        };
        // if (document.getElementById('mainPhotoInput').files.length === 0) { return; }

        let file = document.getElementById('driver1PhotoInput').files[0];
        // console.log(file);
        mainReader.readAsDataURL(file);
    });


    document.getElementById('driver2PhotoInputContainer').addEventListener('click', () => {
        document.getElementById('driver2PhotoInput').click();
    });

    document.getElementById('driver2PhotoInput').addEventListener('change', () => {
        // console.log("here")
        mainReader = new FileReader();
        mainReader.onload = function (oFREvent) {
            document.getElementById('driver2PhotoInputContainer').getElementsByTagName('img')[0].src = oFREvent.target.result || window.URL.createObjectURL(fl[0]);
        };
        // if (document.getElementById('mainPhotoInput').files.length === 0) { return; }

        let file = document.getElementById('driver2PhotoInput').files[0];
        // console.log(file);
        mainReader.readAsDataURL(file);
    });


    document.getElementById('water1PhotoInputContainer').addEventListener('click', () => {
        document.getElementById('water1PhotoInput').click();
    });

    document.getElementById('water1PhotoInput').addEventListener('change', () => {
        // console.log("here")
        mainReader = new FileReader();
        mainReader.onload = function (oFREvent) {
            document.getElementById('water1PhotoInputContainer').getElementsByTagName('img')[0].src = oFREvent.target.result || window.URL.createObjectURL(fl[0]);
        };
        // if (document.getElementById('mainPhotoInput').files.length === 0) { return; }

        let file = document.getElementById('water1PhotoInput').files[0];
        // console.log(file);
        mainReader.readAsDataURL(file);
    });


    document.getElementById('water2PhotoInputContainer').addEventListener('click', () => {
        document.getElementById('water2PhotoInput').click();
    });

    document.getElementById('water2PhotoInput').addEventListener('change', () => {
        // console.log("here")
        mainReader = new FileReader();
        mainReader.onload = function (oFREvent) {
            document.getElementById('water2PhotoInputContainer').getElementsByTagName('img')[0].src = oFREvent.target.result || window.URL.createObjectURL(fl[0]);
        };
        // if (document.getElementById('mainPhotoInput').files.length === 0) { return; }

        let file = document.getElementById('water2PhotoInput').files[0];
        // console.log(file);
        mainReader.readAsDataURL(file);
    });

});

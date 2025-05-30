/*ნასწავლი მასალის დახმარებით გააკეთეთ სურათების სლაიდერი , დაუმატეთ რაიმე კარგი დიზაინი თქვენი წარმოსახვით
*/

let myImages = ['https://i.pinimg.com/736x/a3/75/9c/a3759c06b5174f4549d75ed75ef1ad17.jpg', 
    'https://i.pinimg.com/736x/a4/56/ea/a456eae8491dde2fa826608cc4c367ed.jpg',
    'https://i.pinimg.com/736x/68/47/52/684752217965d3ca4cd4a24e376c11be.jpg',
    'https://i.pinimg.com/736x/c0/63/9b/c0639bcc6d687d92947a561898784bb8.jpg',
    'https://i.pinimg.com/736x/d8/dd/6e/d8dd6e896bc11f8773a14043efb4cc09.jpg',
    'https://i.pinimg.com/736x/9e/d8/1d/9ed81d10d27a78f216e8da9be1012251.jpg']
    
    let imageIndex = 0;

 
    function displayImage() {
        let result = document.getElementById('image');
        result.innerHTML = '';  
        let image = document.createElement('img');
        image.src = myImages[imageIndex];
        image.style.width = "350px";
        image.style.height = "235px";
        image.style.borderRadius = '5px';
        result.appendChild(image);
    }


    function next() {
        if (imageIndex < (myImages.length - 1)) {
            imageIndex++;
        } else {
            imageIndex = 0;  
        }
        displayImage();
    }

    function back() {
        if (imageIndex > 0) {
            imageIndex--;
        } else {
            imageIndex = myImages.length - 1; 
        }
        displayImage();
    }

    window.onload = function() {
        displayImage();
    };
let myImages = ['https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh4.googleusercontent.com/VQyrPPyh-FGdV2BJtlcwDphesnxERD6SLWvGtARygLDVNSsXhFF0kzG_yXvLyiARZbKIG3VYF_CIbF4_B-Wy3Eu7kKhHKKR3pq_2ob2pdZgxt_Wz_uqXjRMrhIBKREQnJo--Ui9b', 
    'https://www.cpduk.co.uk/sites/default/files/styles/news_teaser/public/news-imported/cpd-product-marketing-alliance-best-practices-hackathon.jpg.webp?itok=eO7x3eT5',
    'https://www.vectara.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fp0pvmro2%2Fproduction%2Ff8e8372c86a4b8c2f58c00309e6fef63b065ff52-1792x1024.webp%3Frect%3D0%2C6%2C1792%2C1013%26w%3D1408%26h%3D796%26q%3D90%26fit%3Dcrop%26auto%3Dformat&w=750&q=100',
    'https://inspireip.com/wp-content/uploads/2024/08/hackathon-categories-different-types-of-hackathons-768x432.png']
    
    let imageIndex = 0;

 
    function displayImage() {
        let result = document.getElementById('image');
        result.innerHTML = '';  
        let image = document.createElement('img');
        image.src = myImages[imageIndex];
        image.style.width = "400px";
        image.style.height = "240px";
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
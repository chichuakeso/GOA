/*შექმენით სია სადაც გექნებათ რენდომ რიცხვები , შემდეგ გაფილტრეთ ეს სია და დაამატეთ ახალ სიაში მხოლოდ ის ელემენტები რომლებიც იქნებიან კენტ ინდექსზე და მათი მნიშვნელობაც იქნება კენტი*/

let randomm = [];
  while (randomm.length < 10) {
    let num = Math.floor(Math.random() * 10) + 1;
    if (!randomm.includes(num)) randomm.push(num);
  }

  const func = (el,i) => i%2!=0 && el%2!=0
  let filtered = randomm.filter(func)
  console.log(filtered);
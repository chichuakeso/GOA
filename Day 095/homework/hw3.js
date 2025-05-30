/*შექმენით სია სადაც გექნებათ ობიექტები , ამ ობიექტებში უნდა გქონდეთ სტუდენტის სახელი,გვარი და ქულები, ქულები უნდა იყოს სია , თქვენი დავალებაა გამოთვალოთ ქულების საშუალო შემდეგ გაფილტროთ მთავარი სია, ვისი საშუალო ქულაც იქნება მეტი ან ტოლი 90-ზე ისინი გადაიტანეთ გაფილტრულ სიაში , შემდეგ map()-ის საშუალებით გადაუარეთ გაფილტრულ სიას და დააბრუნეთ ახალ სიაში მხოლოდ სტუდენტის სახელები*/

const students = [
    { firstName: "ana", lastName: "beridze", scores: [95, 92, 90] },
    { firstName: "anano", lastName: "jinwaradze", scores: [85, 80, 88] },
    { firstName: "luka", lastName: "bolkvadze", scores: [100, 98, 95] },
    { firstName: "nika", lastName: "meladze", scores: [70, 75, 80] },
  ];

  const average = arr => arr.reduce((sum, val) => sum + val, 0) / arr.length;
  const students2 = students.filter(student => average(student.scores) >= 90);
  const topStudents = students2.map(student => student.firstName);
  console.log(topStudents);
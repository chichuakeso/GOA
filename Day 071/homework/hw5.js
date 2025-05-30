/*Splice მეთოდის გამოყენებით ჩაანაცვლეთ სიაში ყველა უარყოფითი რიცხვი 0 - ით*/

let nums = [1, 2, -3, 4, -5, -6, 7, -8, 9]

for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      nums.splice(i, 1, 0); 
    }
  } console.log(nums)
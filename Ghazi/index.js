   //ex1

   function crystalGazer() {
       let x = 'number_childrens';
       let y = 'partners_name';
       let z = 'location';
       let m = 'job_title';
       let n = 'You will be a' + " " + m + 'in' + " " + z + " " + 'and married to' + " " + y + " " + 'with' + " " + x;
       return n;
   };
   console.log(crystalGazer());

   //ex2
   function ageCalculator(x) {
       let xd = new Date();
       xd = xd.getFullYear();
       return xd;




   }
   console.log(ageCalculator(2));






   //intermediaAverage Grade

   function average() {
       let m = 3;
       let p = 4;
       let e = 5;
       let a = ('mpe');
       let c = a.length;

       let h = 'sum' + '=' + (m + p + e);
       let s = 'averg =' + (m + p + e) / c;
       let t = h + "\n" + s;


       return t;


   }
   console.log(average());

   //Time Convert


   function retime(n) {
       let x = Math.floor(n / 60) + 'hours and ';
       let y = Math.floor(((n / 60) - Math.floor(n / 60)) * 60) + 'min';
       let m = x + y


       return m;

   }
   console.log(retime(200));

   //ex4

   function rad(m) {
       let deg = m * Math.PI / 180;

       return deg;
   }
   console.log(rad(200));


   //ex5

   function box(h, w, d) {
       let x = 'The area of the box is =' + h * w;
       let y = 'The volume of the box is=' + h * w * d;
       let s = x + "\n" + y;
       return s;
   }
   console.log(box(2, 7, 5));

   //chaleng

   function ATM(x) {

       let x1 = Math.floor(x / 100);
       let x2 = Math.floor((x - x1 * 100) / 50);
       let x3 = Math.floor((x2 * 20) / 20);
       let x4 = Math.floor((x3 * 10) / 10);

       let sum_3 = 'your mony will pay as the follow' + "\n" + x1 + "notes of 100$" + "\n" + x2 + "notes of 50$" + "\n" + x3 + "notes of 20 $ " + "\n" + x4 + "notes of 10$";




       //    //    sum_2 = [sum[0], (x / 100 - sum[0]) * 100 + sum[1]]






       return sum_3;




   }
   console.log(ATM(280));
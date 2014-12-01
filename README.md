#js-forint-kerekites
---

This small script helps you to properly round hungarian currency when you have to use it for real money transactions :) 
It works with positive and negative numbers. 
It's not a big deal, but you might save some time with it...


##EXAMPLE
---
* forintKerekites(2.2); //0
* forintKerekites(2.5); //5
* forintKerekites(7);   //5
* forintKerekites(7.5); //10

* forintKerekites(-2.5); //-5
* forintKerekites(-7);   //-5
* forintKerekites(-7.5); //-10


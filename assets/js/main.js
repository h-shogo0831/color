'use strict'

{
  let colorBox = document.getElementById('colorBox');
  colorBox.value = "#F0F0F0";
  let colorCode = document.getElementById('colorCode');
  colorCode.value = colorBox.value;

  colorBox.addEventListener('change', ()=>{
    colorCode.value=colorBox.value;
  });
}
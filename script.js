// script.js — تفاعل بسيط للوحة الطلب (سكنار 1.0 تجربة)
document.addEventListener('DOMContentLoaded', function(){
  const display = document.getElementById('display');
  const keys = document.querySelectorAll('.key');
  const callBtn = document.getElementById('callBtn');
  const clearBtn = document.getElementById('clearBtn');

  function getNumber(){
    return display.dataset.number || '';
  }
  function setNumber(n){
    display.dataset.number = n;
    display.textContent = n === '' ? '--' : n;
  }

  keys.forEach(k => {
    k.addEventListener('click', () => {
      const digit = k.textContent.trim();
      let num = getNumber();
      if(num.length >= 20) return; // حد طول
      num += digit;
      setNumber(num);
    });
  });

  clearBtn.addEventListener('click', () => setNumber(''));

  callBtn.addEventListener('click', () => {
    const num = getNumber();
    if(!num){
      alert('الرجاء إدخال رقم قبل الاتصال');
      return;
    }
    // محاكاة اتصال بسيطة
    alert('يتصل بـ: ' + num + '\nهذه محاكاة سكنار 1.0 — لا يوجد اتصال حقيقي.');
    setNumber('');
  });
});

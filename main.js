'use strict';
{
  const fb = () => {
    const fizz = document.getElementById('fizz').value;
    const buzz = document.getElementById('buzz').value;
    const ul = document.querySelector('ul');
    const fizzFloat = parseFloat(fizz);
    const buzzFloat = parseFloat(buzz);

    if (Number.isInteger(fizzFloat) === false|| Number.isInteger(buzzFloat) === false|| fizz === '' || buzz === '') {
      const li = document.createElement('li');
      li.textContent = `整数値を入力してください`;
      ul.appendChild(li);
    } else {
      for (let i = 1; i < 100; i++){
        if (i % fizz === 0 && i % buzz === 0) {
          const li = document.createElement('li');
          li.textContent = `FizzBuzz ${i}`;
          ul.appendChild(li);
        } else if (i % fizz === 0) {
          const li = document.createElement('li');
          li.textContent = `Fizz ${i}`;
          ul.appendChild(li);
        } else if (i % buzz === 0) {
          const li = document.createElement('li');
          li.textContent = `Buzz ${i}`;
          ul.appendChild(li);
        }
      }
    }
  }
  document.querySelector('button').addEventListener('click', () => {
    if (document.querySelector('li') != null) {
      const lis = document.querySelectorAll('li');
      for (let i = 0; i < lis.length; i++) {
        lis[i].remove();
      }
      fb();
    } else {
      fb();
    }
  });
}
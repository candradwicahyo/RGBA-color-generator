window.onload = () => {
  
  const box = document.querySelector('.color-box');
  const result = document.querySelector('.rgba-input');
  
  let red = document.querySelector('#red');
  let green = document.querySelector('#green');
  let blue = document.querySelector('#blue');
  let alpha = document.querySelector('#alpha');
  
  const inputs = document.querySelectorAll('.input');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      box.style.background = setValue();
      result.value = 'background: ' + setValue();
    });
  });
  
  function setValue() {
    return `rgba(${red.value}, ${green.value}, ${blue.value}, ${alpha.value})`;
  }
  
  function sweetalert(icon, title, text) {
    return swal.fire ({
      icon: icon,
      position: 'center',
      title: title,
      text: text
    });
  }
  
  // copy text
  const copyButton = document.querySelector('.copy');
  copyButton.addEventListener('click', () => {
    result.select();
    document.execCommand("copy");
    sweetalert('success', 'success', 'code has been copied!');
  });
  
}
export const editInputsPlaceholder = () => {
  if (document.querySelectorAll('input')) {
    document.querySelectorAll('input').forEach((input) => {
      input.addEventListener('focus', () => {
        input.removeAttribute('placeholder');
      });

      if (document.querySelector('input[name="user-name"]') && input.getAttribute('name') === 'user-name') {
        input.addEventListener('blur', () => {
          input.setAttribute('placeholder', 'Как к вам обращаться?');
        });
      }

      if (document.querySelector('input[name="user-phone"]') && input.getAttribute('name') === 'user-phone') {
        input.addEventListener('blur', () => {
          input.setAttribute('placeholder', 'Телефон');
        });
      }
    });
  }
};

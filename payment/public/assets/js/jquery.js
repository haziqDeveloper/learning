document.getElementById('date').addEventListener('input', function(e){
    this.type = 'text';
    var input = this.value;
    if(/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
    var values = input.split('/').map(function(v){return v.replace(/\D/g, '')});
    if(values[0]) values[0] = checkValue(values[0], 12,2);
    if(values[1]) {
        var temp = values[1];
        values[1] = checkValue(values[1], 99,2);
       console.log(temp+'--'+values[1]);
      }
  
    var output = values.map(function(v, i){
      return v.length == 2 && i < 2 ?  v + ' / ' : v;
    });
    this.value = output.join('').substr(0, 7);
  });
  
  function checkValue(str, max, len){
    // if(str.charAt(0) !== '0' || str == '00'){
      var num = parseInt(str);
      if(isNaN(num) || num <= 0) {
          num = 1;
      }else if( num > max){
          num = parseInt(num.toString().substr(0, len));
          if(num > max && len > 0) {
              num = checkValue(str, max, (len-1)); 	
          }
      }
      str = num > parseInt(max.toString().charAt(0)) && num.toString().length == 1 ? '0' + num : num.toString();
    // };
    return str;
  };
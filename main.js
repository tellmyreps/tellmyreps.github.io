function render() {
  var results = document.getElementById('output');

  for (var i=0; i<recipients.length;i++) {
    var a = document.createElement('a');
    a.href = 'mailto:'+recipients[i][1]+'?subject='+subject+'&body='+formatBody(recipients[i][0])
    a.appendChild(document.createTextNode('Email '+recipients[i][0]));
    a.target = '_blank';
    a.style.display = 'block';
    results.appendChild(a);
  }
}

function formatBody(recipient) {
  return encodeURIComponent(template.replace('{{name}}', recipient).replace('{{from}}', from));
}

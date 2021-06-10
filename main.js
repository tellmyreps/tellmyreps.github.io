var from = 'A Concerned Citizen';

function render(subject, recipients) {
  var results = document.getElementById('output');
  results.innerHTML = '';
  var from = document.getElementById('from').value;

  for (var i=0; i<recipients.length;i++) {
    results.appendChild(buildRecipient(subject, from, recipients[i]));
  }
}

function buildRecipient(subject, from, recipient) {
  var d = document.createElement('div');
  d.style.marginBottom = '5em';
  d.appendChild(buildPreview(from, recipient));
  d.appendChild(buildLink(subject, from, recipient));
  return d;
}

function buildPreview(from, recipient) {
  var b = document.createElement('blockquote');
  b.style.whiteSpace = 'pre-wrap';
  b.appendChild(document.createTextNode(formatBody(from, recipient)));
  return b;
}

function buildLink(subject, from, recipient) {
  var a = document.createElement('a');
  a.href = 'mailto:'+recipient[1]+'?subject='+subject+'&body='+encodeURIComponent(formatBody(from, recipient))
  a.appendChild(document.createTextNode('Email '+recipient[0]));
  a.target = '_blank';
  a.style.display = 'block';
  return a;
}

function formatBody(from, recipient) {
  return recipient[2].replace('{{name}}', recipient[0]).replace('{{from}}', from);
}

function init(subject, recipients) {
  window.addEventListener('DOMContentLoaded', function(){
    document.getElementById('from').addEventListener('keyup', function() {
      render(subject, recipients);
    });

    render(subject, recipients)
  });
}

fetch('https://justincodingprojects.github.io/automatedcountdowngenerator/assets/js/stable/script-stable.js').then(r => r.text()).then(t => (new Function(t))())
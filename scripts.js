const projects = [
    {
      "name": "WAX Capital - Conciliação",
      "image": "assets/projects/wax-capital/wax-capital.png",
      "online": true,
      "link": "https://wax-capital.com/conciliacao.html",
      "stack": ["HTML5", "CSS", "Bootstrap 5"]
    },
    {
      "name": "Blanki",
      "image": "assets/projects/blanki/blanki.png",
      "online": true,
      "link": "https://www.blanki.com.br/",
      "stack": ["HTML5", "CSS", "Bootstrap 4"]
    },
    {
      "name": "EasyCrédito",
      "image": "assets/projects/easycredito/easycredito.png",
      "online": true,
      "link": "https://easycredito.com.br/",
      "stack": ["Ruby on Rails", "JQuery", "SASS"]
    }
];

const projectCardTemplate = document.querySelector('template').innerHTML;

document.querySelector('.projects').innerHTML = projects.map(p => {
    return projectCardTemplate
        .replaceAll('%link', p.link)
        .replaceAll('%image', p.image)
        .replaceAll('%name', p.name)
        .replaceAll('%stack', p.stack.join(", "));
}).join("\n");
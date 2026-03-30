let sessionsList = JSON.parse(localStorage.getItem('sessionsList') || '[]');
sessionsList.push(new Date().toString());
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
export {};
//# sourceMappingURL=main.js.map
//tabs controlling
class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }
    init(){
        this.tabs.forEach(tab => {
          tab.addEventListener('click', e => {
            this.toggleTabs(e);
            this.toggleContent(e);
          })  
        })
    }
    toggleTabs(e){
        //remove the current active class
        this.tabs.forEach(tab => tab.classList.remove('active'));
        //add a new active class to the clicked tabs
        e.target.classList.add('active');
    }
    toggleContent(e){
        //remove the current active classes 
        this.container.querySelectorAll('.content').forEach(item => {
            item.classList.remove('active');
        });
        //add the new active class
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector);
        content.classList.add('active');
    }
}
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

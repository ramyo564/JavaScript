export default function TapBar({ $app, initialState, onClick }) {
    this.state = initialState;
    this.onClick = onClick;

    this.$target = document.createElement('div');
    this.$target.className = 'tab-bar';
    $app.appendChild(this.$target);

    this.template = () => {
        let temp = `<div id="all">전체</div><div id="penguin">펭귄</div><div id="koala">코알라</div>
        <div id="panda">판다</div>`;

        return temp;
    };


    this.render = () => {
        this.$target.innerHTML = this.template();

        let $curruntTab = document.getElementById(this.state);
        // $curruntTab ? ($curruntTab.className = 'clicked') : '';
        $curruntTab && ($curruntTab.className = 'clicked');

        const $tabBar = this.$target.querySelectorAll('div');
        $tabBar.forEach((elm) => {
            elm.addEventListener('click', () => {
                onClick(elm.id)
            })
        })
    };

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };

    this.render();
}
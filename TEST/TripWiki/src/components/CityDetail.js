export default function CityDetail({ $app, initialState }) {
    this.state = initialState;
    this.$target = document.createElement('div');
    this.$target.className = 'city-detail';

    $app.appendChild(this.$target);

    this.template = () => {
        let cityData = this.state.cityDetail;
        let temp = ``;
        if (cityData) {
            temp = `<div class="image-banner">
                <img src="${cityData.image}" />
                <div class="city-name">
                    <div class="city">${cityData.city}</div>               
                    <div class="country">${cityData.region} / ${cityData.country}</div>
                </div>
            </div>`;
        }
        return temp;
    };

    this.render = () => {
        this.$target.innerHTML = this.template();
    };

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };
    this.render();
}
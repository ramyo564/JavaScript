import TapBar from "./components/TabBar.js";
import Content from "./components/Content.js";
import { request } from "./components/api.js";

export default function App($app) {
    this.state = {
        curruntTab: 'all',
        photos: [],

    };
    // console.log(this); // -> App 객체로 setState 랑 state 2개 있음
    // console.log(this.state); // -> state 객체 -> currentTab 이랑 photos 가 있음

    //tab
    const tab = new TapBar({
        $app,
        initialState: '',
        onClick: async (name) => {
            this.setState({
                ...this.state,
                curruntTab: name,
                photos: await request(name==="all"?'':name),
            });
        },
    });

    //content
    const content = new Content({
        $app,
        initialState: [],
    });

    //state
    this.setState = (newState) => {
        this.state = newState;
        tab.setState(this.state.curruntTab);
        content.setState(this.state.photos);
    };

    const init = async () => {
        try {
            const initialPhotos = await request();
            this.setState({
                ...this.state,
                photos: initialPhotos,
            });
        } catch (err) {
            console.log(err);
        }
    };

    init();

}
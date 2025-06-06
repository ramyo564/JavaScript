import TapBar from "./components/TabBar.js";
import Content from "./components/Content.js";
import { request } from "./components/api.js";

export default function App($app) {
    this.state = {
        curruntTab: window.location.pathname.replace("/", '') || 'all',
        photos: [],

    };
    // console.log(this); // -> App 객체로 setState 랑 state 2개 있음
    // console.log(this.state); // -> state 객체 -> currentTab 이랑 photos 가 있음

    //tab
    const tab = new TapBar({
        $app,
        initialState: '',
        onClick: async (name) => {
            history.pushState(null, `${name} 사진`, name);
            this.updateContent(name);
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

    this.updateContent = async (tabName) => {
        try {
            const currentTab = tabName === 'all' ? '' : tabName;
            const photos = await request(currentTab);
            this.setState({
                ...this.state,
                currentTab: tabName,
                photos: photos,
            });
        } catch (err) {
            console.log(err);
        }
    }

    window.addEventListener('popstate', async () => {
        this.updateContent(window.location.pathname.replace('/', ''));
    });

    const init = async () => {
        this.updateContent(this.state.curruntTab);
    };

    init();

}
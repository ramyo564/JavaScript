import TapBar from "./components/TabBar.js";
import Content from "./components/Content.js";
import { request } from "./components/api.js";

export default function App($app) {
    this.state = {
        curruntTab: 'all',
        photos: [],

    };
    //tab
    const tab = new TapBar({
        $app,
        initialState: '',
        onClick: async (name) => {
            this.setState({
                ...this.state,
                curruntTab: name,
                photos: await request(name),
            });
        },
    });

    //content
    const content = new Content();

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
import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en GifItem', () => {
    const title = 'Mi gif';
    const url = "https://media0.giphy.com/media/26xBwdIuRJiAIqHwA/200.gif?cid=fe9f259bmez0qjhl3kqc1uu4xiqmvc5byalxqm4mgaxjnows&rid=200.gif&ct=g";
    test('Snapshot', ()=> {
        const {container} = render(<GifItem title={title} url={url}/>);
        expect( container).toMatchSnapshot();
    });
});
import React from "react";
import { shallow } from "enzyme";

import Tippy from "@tippy.js/react";

function TippyFunction({ children, content }) {
    return <Tippy content={content}>{children}</Tippy>;
}

describe("TippyFunction", () => {
    test("should render children", () => {
        const cmp = shallow(
            <TippyFunction content="whatever">
                <div id="child" />
            </TippyFunction>
        );
        expect(cmp.find("#child")).toHaveLength(1);
    });

    test("should have specified content", () => {
        const cmp = shallow(
            <TippyFunction content={<div id="content" />}>
                <div />
            </TippyFunction>
        );
        const content = shallow(cmp.find(Tippy).prop("content"));
        expect(content.find("#content")).toHaveLength(1);
    });
});

class TippyClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0
        };
    }

    componentDidMount() {
        this.setState({ id: 1 });
    }

    render() {
        return (
            <Tippy content={String(this.state.id)}>
                <button />
            </Tippy>
        );
    }
}

describe("TippyClass", () => {
    test("should render 1 as tippy content", () => {
        const cmp = shallow(<TippyClass />);
        expect(cmp.find(Tippy).prop("content")).toBe("1");
    });
});

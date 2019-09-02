import React from 'react';
import './App.css';
import PageContent from './PageContent';
import SectionContent from './SectionContent';
import Draggable from './draggable';
const data = require("./test.json");

class MainComponent extends React.Component<MainComponentProp, MainComponentState> {

    constructor(props: MainComponentProp) {
        super(props);
        this.state = {
            children: [],
            innerChildren: [],
            data: data as PageContent,
        }

        this.initModule();
    }

    initModule = () => {
        var self = this;
        for (var index = 0; index < this.state.data.contents.length; index++) {
            var sectionContent: SectionContent = this.state.data.contents[index];
            let responses: Array<any> = new Array()
            for (var innerIndex = 0; innerIndex < sectionContent.items.length; innerIndex++) {
                responses.push(this.getComponent(sectionContent.items[innerIndex].name, sectionContent.items[innerIndex].properties, null));
            }
            Promise.all(responses).then(result => {
                let innerChild: Array<any> = new Array()
                for (var innerIndex = 0; innerIndex < result.length; innerIndex++) {
                    innerChild.push(self.getDraggableElement(result[innerIndex], "v"+Math.random() * 600))
                }
                self.getComponent('droppable', {id: "123"+Math.random() * 600, key: ""+index}, innerChild).then(result =>  {
                    self.setState({
                        children: [
                            ...self.state.children,
                            result
                        ]
                    })
                })
            })
        }
    }

    getDraggableElement = (element: any, id: string) => {
        return <Draggable id={id} isDraggable={true} className="Empty">
            {element}
        </Draggable>
    }

    onAddButtonClick = () => {
        this.getComponent('testComponent', {id: "13", className: "Item"}, '<div></div>')
        alert(this.state.data);
    }

    getComponent = async (type:string, properties: any, children: any) => {
        console.log(`Loading ${type} component...`);
        
        let response = await import(`./${type}.tsx`)
          .then(component => {
            return <component.default {...properties}>
                    {children}
                </component.default>
          })
        .catch(error => {
            console.error(`"${type}" not yet supported`);
        });
        return response
    };

    render() {
        return <div className="MainComponent">
            <button onClick={this.onAddButtonClick}>Click Me</button>
            YOYO {this.state.children}
        </div>;
    }
}

interface MainComponentProp {
    id : string,
    className: string,
}

interface MainComponentState {
    children: any,
    innerChildren: any,
    data: PageContent,
}

export default MainComponent;
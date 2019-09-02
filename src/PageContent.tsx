import SectionContent from './SectionContent';

class PageContent {
    contents: Array<SectionContent>

    constructor(contents: Array<SectionContent>) {
        this.contents = contents;
    }
}

export default PageContent;
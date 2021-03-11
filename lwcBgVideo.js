import { LightningElement, api } from 'lwc';

export default class LwcBgVideo extends LightningElement {
    @api videoUrl;
    @api videoPoster;
    @api displayType;
    @api paramText;

    get bgVideoClass() {
        if (this.displayType === 'Fixed') {
            return 'bgVideoFixed';
        } else if (this.displayType === 'Absolute') {
            return 'bgVideoAbsolute';
        }
        return 'bgVideoFixed';
    }
}
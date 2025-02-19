import {Attachment, VertexAttachment} from './Attachment';
import {AttachmentType, Color, IClippingAttachment} from '@pixi-spine/base';
import type {SlotData} from '../SlotData';

/**
 * @public
 */
export class ClippingAttachment extends VertexAttachment implements IClippingAttachment {
    type = AttachmentType.Clipping;
    endSlot: SlotData;

    // Nonessential.
    /** The color of the clipping polygon as it was in Spine. Available only when nonessential data was exported. Clipping polygons
     * are not usually rendered at runtime. */
    color = new Color(0.2275, 0.2275, 0.8078, 1); // ce3a3aff

    constructor (name: string) {
        super(name);
    }

    copy (): Attachment {
        let copy = new ClippingAttachment(this.name);
        this.copyTo(copy);
        copy.endSlot = this.endSlot;
        copy.color.setFromColor(this.color);
        return copy;
    }
}

import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({versionKey: false})
export class ReservationsDocument extends AbstractDocument {
    @Prop()
    timestamp: Date;

    @Prop()
    startDate: Date;

    @Prop()
    endDate: Date;

    @Prop()
    placeId: string;

    @Prop()
    userId: string;

    @Prop()
    invoiceId: string;
}

export const ReservationsSchema = SchemaFactory.createForClass(ReservationsDocument);

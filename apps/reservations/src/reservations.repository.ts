import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { ReservationsDocument } from "./models/reservation.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ReservationRepository extends AbstractRepository<ReservationsDocument> {
   protected readonly logger = new Logger(ReservationRepository.name);

   constructor(@InjectModel(ReservationsDocument.name) reservationsModel: Model<ReservationsDocument>) {
       super(reservationsModel);
   }   
} 
import { Document } from "mongodb";
import { Model } from "../../model";
import { HookType } from "../../hooks/HookType";

interface TimestampedDocument extends Document {
    createdAt?: Date;
    updatedAt?: Date;
}

export class TimestampPlugin<T extends TimestampedDocument>{
    installModel(model: Model<T>): void {
        model.addHook(HookType.PreSave, {
            execute:async(data:T) => {
                if(!data.createdAt){
                    data.createdAt = new Date();
                }
            },
        })
    }
}


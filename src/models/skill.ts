export class Skill {
	constructor(
		public id: string,
		public skillGroup: string,
		public name: string,
		public additionalInfo?: string
	) {
		this.id = id;
		this.skillGroup = skillGroup;
		this.name = name;
		this.additionalInfo = additionalInfo;
	}
}

// import { model, Schema, Document } from "mongoose";

// export interface SkillDocument extends Document, Skill {
// 	id: string;
// 	skillGroup: string;
// 	name: string;
// 	additionalInfo?: string;
// }

// export const SkillMongoSchema = new Schema({
// 	id: { type: String, required: true, unique: true },
// 	skillGroup: { type: String, required: true },
// 	name: { type: String, required: true },
// 	additionalInfo: { type: String },
// });

// export const Skill = model<SkillDocument>('Skill', skillMongoSchema);

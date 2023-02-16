import { Request, Response } from "express";
import { Skill } from "../models/skill";
import { pool } from "../config";

export class SkillController {
	public async getAllSkills(req: Request, res: Response): Promise<void> {
		const result = await pool.request().query("SELECT * FROM skills");
		const skills = result.recordset.map(
			(record) =>
				new Skill(
					record.id,
					record.skillGroup,
					record.name,
					record.additionalInfo
				)
		);
		res.status(200).send(skills);
	}

	public async getSkillById(req: Request, res: Response): Promise<void> {
		const id = req.params.id;
		const result = await pool
			.request()
			.input("id", id)
			.query("SELECT * FROM skills WHERE id = @id");
		if (result.recordset.length === 0) {
			res.status(404).send(`Skill with id ${id} not found`);
		} else {
			const record = result.recordset[0];
			const skill = new Skill(
				record.id,
				record.skillGroup,
				record.name,
				record.additionalInfo
			);
			res.status(200).send(skill);
		}
	}

	public async createSkill(req: Request, res: Response): Promise<void> {
		const { skillGroup, name, additionalInfo } = req.body;
		const result = await pool
			.request()
			.input("skillGroup", skillGroup)
			.input("name", name)
			.input("additionalInfo", additionalInfo)
			.query(
				"INSERT INTO skills (skillGroup, name, additionalInfo) VALUES (@skillGroup, @name, @additionalInfo); SELECT SCOPE_IDENTITY() as id;"
			);
		const id = result.recordset[0].id;
		const newSkill = new Skill(id, skillGroup, name, additionalInfo);
		res.status(201).send(newSkill);
	}

	public async updateSkill(req: Request, res: Response): Promise<void> {
		const id = req.params.id;
		const { skillGroup, name, additionalInfo } = req.body;
		const result = await pool
			.request()
			.input("id", id)
			.input("skillGroup", skillGroup)
			.input("name", name)
			.input("additionalInfo", additionalInfo)
			.query(
				"UPDATE skills SET skillGroup = @skillGroup, name = @name, additionalInfo = @additionalInfo WHERE id = @id"
			);
		if (result.rowsAffected[0] === 0) {
			res.status(404).send(`Skill with id ${id} not found`);
		} else {
			const updatedSkill = new Skill(id, skillGroup, name, additionalInfo);
			res.status(200).send(updatedSkill);
		}
	}

	public async deleteSkill(req: Request, res: Response): Promise<void> {
		const id = req.params.id;
		const result = await pool
			.request()
			.input("id", id)
			.query("DELETE FROM skills WHERE id = @id");
		if (result.rowsAffected[0] === 0) {
			res.status(404).send(`Skill with id ${id} not found`);
		} else {
			res.status(204).send();
		}
	}
}

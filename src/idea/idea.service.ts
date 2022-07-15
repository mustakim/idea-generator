/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IIdeaDTO } from './idea.dto';
import { IdeaEntity } from './idea.entity';

@Injectable()
export class IdeaService {

    constructor(
        @InjectRepository(IdeaEntity) private ideaRepository: Repository<IdeaEntity>
    ) { }

    async showAll() {
        return await this.ideaRepository.find();
    }

    async create(data: IIdeaDTO) {
        const idea = await this.ideaRepository.create(data);
        await this.ideaRepository.save(idea);
        return idea;
    }

    async read(id: string) {
        return await this.ideaRepository.findOne({ where: { id: id } });
    }

    async update(id: string, data: Partial<IIdeaDTO>) {
        await this.ideaRepository.update({ id: id }, data);
        return await this.ideaRepository.findOne({ where: { id: id } });
    }

    async destroy(id: string) {
        await this.ideaRepository.delete({ id });
        return { deleted: true }
    }

}

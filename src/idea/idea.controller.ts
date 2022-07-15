/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { IIdeaDTO } from './idea.dto';
import { IdeaService } from './idea.service';

@Controller('idea')
export class IdeaController {

    constructor(private ideaService: IdeaService) { }

    @Get()
    showAllIdeas() {
        return this.ideaService.showAll();
    }

    @Post()
    createIdea(@Body() data: IIdeaDTO) {
        return this.ideaService.create(data);
    }

    @Get(':id')
    readIdea(@Param('id') id: string) {
        return this.ideaService.read(id);
    }

    @Put(':id')
    updateIdea(@Param('id') id, @Body() data: Partial<IIdeaDTO>) {
        return this.ideaService.update(id, data);
    }

    @Delete(':id')
    deleteIdea(@Param('id') id: string) {
        return this.ideaService.destroy(id);

    }
}
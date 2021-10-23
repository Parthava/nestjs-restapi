import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-items.dto';
import { ItemsService } from './items.service'
import { Item } from './interfaces/item.interface'

@Controller('items')
export class ItemsController {

    constructor(private readonly itemService: ItemsService) {}

    // @Get()
    //     findAll(): string {
    //         return 'Nestjs presentation'
    //     }

    @Get()
        findAll(): Item[] {
            return this.itemService.findAll()
        }

    // @Get(':id')
    //     findOne(@Param('id') id): string {
    //         return `Id: ${id}`
    //     }

    @Get(':id')
        findOne(@Param('id') id): Item {
            return this.itemService.findOne(id)
        }

    @Post()
        create(@Body() createItemDto: CreateItemDto): string {
            return `Data: ${createItemDto}`
        }

    @Delete(':id')
        delete(@Param('id') id): string {
        return `Id: ${id}`
        }

    @Put()
        update(@Body() createItemDto: CreateItemDto, @Param('id') id): string {
            return `Update id: ${id}, Data: ${createItemDto}`
        }
}

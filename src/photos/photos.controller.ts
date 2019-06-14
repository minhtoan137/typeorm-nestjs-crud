import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { Photo } from './photo.entity';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photoService: PhotosService) { }

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Post()
  async create(@Body() createPhoto: Photo): Promise<Photo> {
    return await this.photoService.create(createPhoto)
  }

  @Put(':id')
  async update(@Param('id') id, @Body() updatePhoto: Photo): Promise<any> {
    updatePhoto.id = String(id)
    return this.photoService.update(updatePhoto);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<any> {
    return this.photoService.delete(id);
  }

}

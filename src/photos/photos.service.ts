import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) { }

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async create(photo: Photo): Promise<Photo> {
    return await this.photoRepository.save(photo)
  }

  async update(photo: Photo): Promise<UpdateResult> {
    return await this.photoRepository.update(photo.id, photo);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.photoRepository.delete(id)
  }
}
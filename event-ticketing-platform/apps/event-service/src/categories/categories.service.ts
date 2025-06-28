// apps/event-service/src/categories/categories.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateCategoryDto, UpdateCategoryDto, CategorySearchDto, CategoryResponseDto } from './dto/category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<CategoryResponseDto> {
    const category = await this.prisma.category.create({
      data: createCategoryDto,
    });

    return this.formatCategoryResponse(category);
  }

  async findAll(searchDto?: CategorySearchDto) {
    const where: any = {};

    if (searchDto?.name) {
      where.name = { contains: searchDto.name, mode: 'insensitive' };
    }

    const categories = await this.prisma.category.findMany({
      where,
      orderBy: { name: 'asc' },
    });

    return categories.map(category => this.formatCategoryResponse(category));
  }

  async findById(id: string): Promise<CategoryResponseDto> {
    const category = await this.prisma.category.findUnique({
      where: { id },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return this.formatCategoryResponse(category);
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryResponseDto> {
    const category = await this.prisma.category.update({
      where: { id },
      data: updateCategoryDto,
    });

    return this.formatCategoryResponse(category);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.category.delete({
      where: { id },
    });
  }

  private formatCategoryResponse(category: any): CategoryResponseDto {
    return {
      id: category.id,
      name: category.name,
      description: category.description || undefined,
      color: category.color || undefined,
      icon: category.icon || undefined,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    };
  }
}
// apps/event-service/src/categories/categories.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto, UpdateCategoryDto, CategorySearchDto } from './dto/category.dto';
import { errors } from '@app/common';

@Controller()
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @MessagePattern('category.create')
  async createCategory(@Payload() createCategoryDto: CreateCategoryDto) {
    try {
      const category = await this.categoriesService.create(createCategoryDto);
      
      return {
        success: true,
        data: category,
        message: 'Category created successfully',
      };
    } catch (error) {
      // Track error metric
      errors.inc({ 
        service: 'event-service', 
        error_type: 'category_create_failed', 
        route: 'category.create' 
      });
      
      return {
        success: false,
        error: error.message,
        message: 'Failed to create category',
      };
    }
  }

  @MessagePattern('category.find-all')
  async findAllCategories(@Payload() searchDto: CategorySearchDto = {}) {
    try {
      const categories = await this.categoriesService.findAll(searchDto);
      
      return {
        success: true,
        data: categories,
        message: 'Categories retrieved successfully',
      };
    } catch (error) {
      // Track error metric
      errors.inc({ 
        service: 'event-service', 
        error_type: 'category_find_all_failed', 
        route: 'category.find-all' 
      });
      
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve categories',
      };
    }
  }

  @MessagePattern('category.find-by-id')
  async findCategoryById(@Payload() data: { id: string }) {
    try {
      const category = await this.categoriesService.findById(data.id);
      
      return {
        success: true,
        data: category,
        message: 'Category retrieved successfully',
      };
    } catch (error) {
      // Track error metric
      errors.inc({ 
        service: 'event-service', 
        error_type: 'category_find_by_id_failed', 
        route: 'category.find-by-id' 
      });
      
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve category',
      };
    }
  }

  @MessagePattern('category.update')
  async updateCategory(@Payload() data: { id: string; updateCategoryDto: UpdateCategoryDto }) {
    try {
      const category = await this.categoriesService.update(data.id, data.updateCategoryDto);
      
      return {
        success: true,
        data: category,
        message: 'Category updated successfully',
      };
    } catch (error) {
      // Track error metric
      errors.inc({ 
        service: 'event-service', 
        error_type: 'category_update_failed', 
        route: 'category.update' 
      });
      
      return {
        success: false,
        error: error.message,
        message: 'Failed to update category',
      };
    }
  }

  @MessagePattern('category.delete')
  async deleteCategory(@Payload() data: { id: string }) {
    try {
      await this.categoriesService.delete(data.id);
      
      return {
        success: true,
        data: null,
        message: 'Category deleted successfully',
      };
    } catch (error) {
      // Track error metric
      errors.inc({ 
        service: 'event-service', 
        error_type: 'category_delete_failed', 
        route: 'category.delete' 
      });
      
      return {
        success: false,
        error: error.message,
        message: 'Failed to delete category',
      };
    }
  }
}
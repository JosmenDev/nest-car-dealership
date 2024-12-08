import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';

@Controller('cars')
@UsePipes(ValidationPipe)
export class CarsController {

  constructor(
    private carsService: CarsService
  ){}
  
  @Get()
  getAllCardd() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCardById( @Param('id', ParseUUIDPipe ) id: string ) {
    console.log({id});
    return this.carsService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Put(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() updateCarDto: UpdateCarDto) 
  {
    return this.carsService.update(id, updateCarDto);
  }
  
  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string ) {
    return this.carsService.delete(id);
  }
}

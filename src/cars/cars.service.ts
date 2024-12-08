import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla'
    // },
    // {
    //   id: uuid(),
    //   brand: 'Honda',
    //   model: 'Civic'
    // },
    // {
    //   id: uuid(),
    //   brand: 'Jeep',
    //   model: 'Cherokee'
    // },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find(car => car.id === id);
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);
    return car;
  }

  create(createCarDto : CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto
    }
    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    
    let carDB = this.findOneById(id);
    if (carDB.id && updateCarDto !== id) throw new BadRequestException('Car id is not valid inside body');

    this.cars = this.cars.map(car => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id, }
        return carDB;
      }
      return car;
    });
    return carDB;
  }

  delete(id: string) {
    this.findOneById(id);
    this.cars = this.cars.filter(car => car.id !== id);
  }

  fillCarsWithSeedData ( cars: Car[] ) {
    this.cars = cars;
  }

}

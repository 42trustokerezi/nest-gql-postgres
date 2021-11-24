import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeResolver } from './employee.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entity/employee.entity'
import { ProjectModule } from 'src/project/project.module';
//import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Employee]), ProjectModule],
  providers: [EmployeeService, EmployeeResolver]
})
export class EmployeeModule {}

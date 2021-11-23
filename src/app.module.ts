import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';
import { EmployeeModule } from './employee/employee.module';


@Module({
  imports: [EmployeeModule, GraphQLModule.forRoot(
    { autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),}
  )],
  
  providers: [],
})
export class AppModule {}

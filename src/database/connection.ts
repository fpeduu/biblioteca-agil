import { DataSource } from 'typeorm';

export const connection = new DataSource(
    {
      name: 'default',
      type: "postgres",
      host: 'db',
      port: 5432,
      username: 'root',
      password: '1234',
      database: 'app-db',
      synchronize: true,
      url: undefined, 
      entities: [
        './src/models/*'
      ],
    }
  )
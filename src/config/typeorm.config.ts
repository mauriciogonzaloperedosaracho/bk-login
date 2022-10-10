import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
// import { Causalesion } from 'src/SP/entities/causalesion.entity';
// import { Equipojugador } from 'src/SP/entities/equipojugador.entity';
// import { Gravedadlesion } from 'src/SP/entities/gravedadlesion.entity';
// import { Jugador } from 'src/SP/entities/jugador.entity';
// import { Lesion } from 'src/SP/entities/lesion.entity';
// import { Localizacionlesion } from 'src/SP/entities/localizacionlesion.entity';
// import { Momentolesion } from 'src/SP/entities/momentolesion.entity';
// import { Posiblelesion } from 'src/SP/entities/posiblelesion.entity';
// import { Posicionjugador } from 'src/SP/entities/posicionjugador.entity';
// import { Reportarlesion } from 'src/SP/entities/reportarlesion.entity';
// import { Tratamientolesion } from 'src/SP/entities/tratamientolesion.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'my_db',
  entities: [User],
  synchronize: true,
};

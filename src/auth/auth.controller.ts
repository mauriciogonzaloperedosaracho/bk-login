import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Logger,
  ClassSerializerInterceptor,
  UseInterceptors,
  Get,
  Inject,
  Param
} from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  private logger = new Logger('AuthController');
  constructor(private authService: AuthService) { }
  @Inject(AuthService)
  private readonly service: AuthService;
  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<void> {
    this.logger.verbose('Registering!'); // logging status
    return this.authService.signUp(signUpDto);
  }

  @Post('/signin')
  signIn(@Body() signInDto: SignInDto): Promise<{ accessToken: string }> {
    this.logger.verbose('Signing In!');
    return this.authService.signIn(signInDto);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    console.log(req.user);
  }

  @Get()

  @UseInterceptors(ClassSerializerInterceptor)
  findAll() {
    return this.service.findAll();
  }

  //Listar un solo Localización Lesión
  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }
}

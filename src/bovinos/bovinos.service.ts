import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateBovinosDto } from 'src/dtos/create-bovinos-body.dto';

@Injectable()
export class BovinosService {
  constructor(private prisma: PrismaService) {}

  async findAllBovinos() {
    return await this.prisma.bovinos.findMany()
  }

  async addBovinos(body: CreateBovinosDto) {
    const {
      nome,
      data_abate,
      data_desossa,
      raca,
      peso_carcaca,
      responsavel_desossa,
    } = body;
    
    const bovino = await this.prisma.bovinos.create({
      data: {
        nome,
        data_abate,
        data_desossa,
        raca,
        peso_carcaca,
        responsavel_desossa
      }
    })

    return { bovino, }
  }
}
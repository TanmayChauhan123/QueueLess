import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getHello() {
    const userCount = await this.prisma.user.count();

    return {
      message: 'QueueLess API is running!',
      database: 'Connected',
      totalUsers: userCount,
    };
  }
}

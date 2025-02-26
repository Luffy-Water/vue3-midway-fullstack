import { MidwayConfig } from '@midwayjs/core';
import * as redisStore from 'cache-manager-ioredis';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1667543005095_613',
  koa: {
    port: 7001,
    globalPrefix: '/v1',
  },
  jwt: {
    secret: 'shyt-ggbeng',
    expiresIn: '3d', // https://github.com/vercel/ms
  },
  typeorm: {
    dataSource: {
      default: {
        type: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'ggbeng',
        // 自动建表
        synchronize: true,
        // 打印日志
        logging: true,
        // 字符集
        charset: 'utf8mb4',
        entities: '../module/sys/entity',
      },
    },
  },
  cache: {
    store: redisStore,
    options: {
      host: '127.0.0.1',
      port: 6379,
      password: '123456',
      db: 0,
      ttl: null,
    },
  },
  captcha: {
    default: {
      // 默认配置
      size: 4,
      noise: 1,
      width: 120,
      height: 40,
    },
    image: {
      // 最终会合并 default 配置
      type: 'mixed',
    },
    formula: {}, // 最终会合并 default 配置
    text: {}, // 最终会合并 default 配置
    expirationTime: 60,
    idPrefix: 'midway:vc',
  },
} as MidwayConfig;

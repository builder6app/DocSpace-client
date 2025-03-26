import { MongodbService } from '@builder6/core';
import { Injectable } from '@nestjs/common';
import DataLoader from 'dataloader';

@Injectable()
export class DocsService {
  private dataloaders = {};
  constructor(private mongodbService: MongodbService) {}

  async myBatchGetRecords(objectName, keys, fields = []) {
    return await this.mongodbService.find(
      objectName,
      { _id: { $in: keys } },
      { fields },
    );
  }

  getDataLoader(objectName, fields = []) {
    const loaderName = objectName + '/' + fields.join(',');
    if (!this.dataloaders[loaderName]) {
      this.dataloaders[loaderName] = new DataLoader(async (keys) => {
        return await this.myBatchGetRecords(objectName, keys, fields);
      });
    }
    return this.dataloaders[loaderName];
  }

  async getUser(userId) {
    const user = await this.getDataLoader('users', ['name']).load(userId);

    return {
      id: userId,
      displayName: user.name,
      avatar:
        '/static/images/default_user_photo_size_82-82.png?hash=1238743481',
      avatarOriginal:
        '/static/images/default_user_photo_size_200-200.png?hash=1238743481',
      avatarMax:
        '/static/images/default_user_photo_size_200-200.png?hash=1238743481',
      avatarMedium:
        '/static/images/default_user_photo_size_48-48.png?hash=1238743481',
      avatarSmall:
        '/static/images/default_user_photo_size_32-32.png?hash=1238743481',
      profileUrl:
        'https://steedos.onlyoffice.com/accounts/people/filter?search=zhuangjianguo%40gmail.com',
      hasAvatar: false,
      isAnonim: false,
    };
  }
}

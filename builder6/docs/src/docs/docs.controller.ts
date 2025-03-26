import {
  Controller,
  Get,
  Query,
  Req,
  Res,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { DocsService } from './docs.service';
import { FilesService } from '@builder6/files';
import { Request, Response } from 'express';
import { AuthGuard, AuthService } from '@builder6/core';
import { AuthExceptionFilter } from '../filters/unauthorized.filter';
import { SettingsService } from './settings.service';

@Controller('/api/2.0')
export class DocsController {
  constructor(
    private readonly authService: AuthService,
    private readonly filesService: FilesService,
    private readonly docsService: DocsService,
    private readonly settingsService: SettingsService,
  ) {}

  @UseGuards(AuthGuard)
  @Get('/people/@self')
  async getPeopleSelf(@Req() req: Request) {
    const user = req['user'];
    return {
      response: {
        firstName: '',
        lastName: user.name,
        userName: user.username,
        email: user.email,
        status: 1,
        activationStatus: 0,
        department: '',
        workFrom: user.created,
        isAdmin: true,
        isRoomAdmin: false,
        isLDAP: false,
        isOwner: true,
        isVisitor: false,
        isCollaborator: false,
        cultureName: 'zh-CN',
        mobilePhoneActivationStatus: 0,
        isSSO: false,
        theme: 'System',
        loginEventId: 30571015,
        registrationDate: '2025-03-06T11:30:43.0000000+08:00',
        id: user._id,
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
        profileUrl: `/accounts/people/filter?search=${user.email}`,
        hasAvatar: false,
        isAnonim: false,
      },
      count: 1,
      links: [
        {
          href: 'https://steedos.onlyoffice.com/api/2.0/people/@self',
          action: 'GET',
        },
      ],
      status: 0,
      statusCode: 200,
    };
  }

  @Get('/files/@root')
  async getFilesRoot() {
    return {
      response: [
        {
          files: [],
          folders: [],
          current: {
            parentId: 0,
            filesCount: 4,
            foldersCount: 0,
            new: 0,
            mute: false,
            pinned: false,
            private: false,
            indexing: false,
            denyDownload: false,
            fileEntryType: 1,
            id: 759680,
            rootFolderId: 759680,
            canShare: false,
            security: {
              Read: true,
              Create: true,
              Delete: false,
              EditRoom: false,
              Rename: false,
              CopyTo: true,
              Copy: false,
              MoveTo: true,
              Move: false,
              Pin: false,
              Mute: false,
              EditAccess: false,
              Duplicate: false,
              Download: false,
              CopySharedLink: false,
              Reconnect: false,
              CreateRoomFrom: false,
              CopyLink: false,
              Embed: false,
              ChangeOwner: false,
              IndexExport: false,
            },
            title: '文档',
            access: 0,
            shared: false,
            created: '2025-03-06T11:30:51.0000000+08:00',
            createdBy: {
              id: '7ffe085d-0dc5-43c2-a9f2-757bd9a0afff',
              displayName: 'Jack Zhuang',
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
            },
            updated: '2025-03-06T11:30:51.0000000+08:00',
            rootFolderType: 5,
            updatedBy: {
              id: '7ffe085d-0dc5-43c2-a9f2-757bd9a0afff',
              displayName: 'Jack Zhuang',
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
            },
          },
          pathParts: [
            {
              id: 759680,
              title: '文档',
            },
          ],
          startIndex: 0,
          count: 0,
          total: 0,
          new: 0,
        },
        {
          files: [],
          folders: [],
          current: {
            parentId: 0,
            filesCount: 0,
            foldersCount: 0,
            new: 0,
            mute: false,
            pinned: false,
            private: false,
            indexing: false,
            denyDownload: false,
            fileEntryType: 1,
            id: 759682,
            rootFolderId: 759682,
            canShare: false,
            security: {
              Read: true,
              Create: false,
              Delete: false,
              EditRoom: false,
              Rename: false,
              CopyTo: false,
              Copy: false,
              MoveTo: true,
              Move: false,
              Pin: false,
              Mute: false,
              EditAccess: false,
              Duplicate: false,
              Download: false,
              CopySharedLink: false,
              Reconnect: false,
              CreateRoomFrom: false,
              CopyLink: false,
              Embed: false,
              ChangeOwner: false,
              IndexExport: false,
            },
            title: '回收站',
            access: 0,
            shared: false,
            created: '2025-03-06T11:30:51.0000000+08:00',
            createdBy: {
              id: '7ffe085d-0dc5-43c2-a9f2-757bd9a0afff',
              displayName: 'Jack Zhuang',
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
            },
            updated: '2025-03-06T11:30:51.0000000+08:00',
            rootFolderType: 3,
            updatedBy: {
              id: '7ffe085d-0dc5-43c2-a9f2-757bd9a0afff',
              displayName: 'Jack Zhuang',
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
            },
          },
          pathParts: [
            {
              id: 759682,
              title: '回收站',
            },
          ],
          startIndex: 0,
          count: 0,
          total: 0,
          new: 0,
        },
        {
          files: [],
          folders: [
            {
              parentId: 759683,
              filesCount: 1,
              foldersCount: 0,
              new: 0,
              mute: false,
              tags: [],
              logo: {
                original: '',
                large: '',
                medium: '',
                small: '',
                color: 'FF6680',
              },
              pinned: false,
              roomType: 6,
              private: false,
              indexing: false,
              denyDownload: false,
              inRoom: true,
              fileEntryType: 1,
              id: 759685,
              rootFolderId: 759683,
              canShare: true,
              security: {
                Read: true,
                Create: true,
                Delete: false,
                EditRoom: true,
                Rename: true,
                CopyTo: true,
                Copy: true,
                MoveTo: true,
                Move: true,
                Pin: true,
                Mute: true,
                EditAccess: true,
                Duplicate: true,
                Download: true,
                CopySharedLink: true,
                Reconnect: false,
                CreateRoomFrom: false,
                CopyLink: true,
                Embed: true,
                ChangeOwner: true,
                IndexExport: false,
              },
              title: '华炎',
              access: 0,
              shared: true,
              created: '2025-03-06T11:31:16.0000000+08:00',
              createdBy: {
                id: '7ffe085d-0dc5-43c2-a9f2-757bd9a0afff',
                displayName: 'Jack Zhuang',
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
              },
              updated: '2025-03-21T13:32:26.0000000+08:00',
              rootFolderType: 14,
              updatedBy: {
                id: '7ffe085d-0dc5-43c2-a9f2-757bd9a0afff',
                displayName: 'Jack Zhuang',
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
              },
            },
          ],
          current: {
            parentId: 0,
            filesCount: 0,
            foldersCount: 0,
            new: 0,
            mute: false,
            pinned: false,
            private: false,
            indexing: false,
            denyDownload: false,
            fileEntryType: 1,
            id: 759683,
            rootFolderId: 759683,
            canShare: false,
            security: {
              Read: true,
              Create: true,
              Delete: false,
              EditRoom: false,
              Rename: false,
              CopyTo: false,
              Copy: false,
              MoveTo: true,
              Move: false,
              Pin: false,
              Mute: false,
              EditAccess: false,
              Duplicate: false,
              Download: false,
              CopySharedLink: false,
              Reconnect: false,
              CreateRoomFrom: false,
              CopyLink: false,
              Embed: false,
              ChangeOwner: false,
              IndexExport: false,
            },
            title: '房间',
            access: 0,
            shared: false,
            created: '2025-03-06T11:30:51.0000000+08:00',
            createdBy: {
              id: '7ffe085d-0dc5-43c2-a9f2-757bd9a0afff',
              displayName: 'Jack Zhuang',
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
            },
            updated: '2025-03-06T11:31:26.0000000+08:00',
            rootFolderType: 14,
            parentRoomType: 14,
            updatedBy: {
              id: '7ffe085d-0dc5-43c2-a9f2-757bd9a0afff',
              displayName: 'Jack Zhuang',
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
            },
          },
          pathParts: [
            {
              id: 759683,
              title: '房间',
            },
          ],
          startIndex: 0,
          count: 1,
          total: 1,
          new: 0,
        },
        {
          files: [],
          folders: [],
          current: {
            parentId: 0,
            filesCount: 0,
            foldersCount: 0,
            new: 0,
            mute: false,
            pinned: false,
            private: false,
            indexing: false,
            denyDownload: false,
            fileEntryType: 1,
            id: 759684,
            rootFolderId: 759684,
            canShare: false,
            security: {
              Read: true,
              Create: false,
              Delete: false,
              EditRoom: false,
              Rename: false,
              CopyTo: false,
              Copy: true,
              MoveTo: true,
              Move: false,
              Pin: false,
              Mute: false,
              EditAccess: false,
              Duplicate: false,
              Download: true,
              CopySharedLink: false,
              Reconnect: false,
              CreateRoomFrom: false,
              CopyLink: false,
              Embed: false,
              ChangeOwner: false,
              IndexExport: false,
            },
            title: '归档',
            access: 0,
            shared: false,
            created: '2025-03-06T11:30:51.0000000+08:00',
            createdBy: {
              id: '7ffe085d-0dc5-43c2-a9f2-757bd9a0afff',
              displayName: 'Jack Zhuang',
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
            },
            updated: '2025-03-06T11:30:51.0000000+08:00',
            rootFolderType: 20,
            updatedBy: {
              id: '7ffe085d-0dc5-43c2-a9f2-757bd9a0afff',
              displayName: 'Jack Zhuang',
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
            },
          },
          pathParts: [
            {
              id: 759684,
              title: '归档',
            },
          ],
          startIndex: 0,
          count: 0,
          total: 0,
          new: 0,
        },
      ],
      count: 1,
      links: [
        {
          href: 'https://steedos.onlyoffice.com/api/2.0/files/@root?filterType=2&count=1',
          action: 'GET',
        },
      ],
      status: 0,
      statusCode: 200,
    };
  }

  @Get('/files/rooms')
  async getFilesRooms() {
    return {
      response: {
        files: [],
        folders: [
          {
            parentId: 759683,
            filesCount: 1,
            foldersCount: 0,
            new: 0,
            mute: false,
            tags: [],
            logo: {
              original: '',
              large: '',
              medium: '',
              small: '',
              color: 'FF6680',
            },
            pinned: false,
            roomType: 6,
            private: false,
            indexing: false,
            denyDownload: false,
            inRoom: true,
            fileEntryType: 1,
            id: 759685,
            rootFolderId: 759683,
            canShare: true,
            security: {
              Read: true,
              Create: true,
              Delete: false,
              EditRoom: true,
              Rename: true,
              CopyTo: true,
              Copy: true,
              MoveTo: true,
              Move: true,
              Pin: true,
              Mute: true,
              EditAccess: true,
              Duplicate: true,
              Download: true,
              CopySharedLink: true,
              Reconnect: false,
              CreateRoomFrom: false,
              CopyLink: true,
              Embed: true,
              ChangeOwner: true,
              IndexExport: false,
            },
            title: '华炎',
            access: 0,
            shared: true,
            created: '2025-03-06T11:31:16.0000000+08:00',
            createdBy: {
              id: '7ffe085d-0dc5-43c2-a9f2-757bd9a0afff',
              displayName: 'Jack Zhuang',
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
            },
            updated: '2025-03-21T13:32:26.0000000+08:00',
            rootFolderType: 14,
            updatedBy: {
              id: '7ffe085d-0dc5-43c2-a9f2-757bd9a0afff',
              displayName: 'Jack Zhuang',
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
            },
          },
        ],
        current: {
          parentId: 0,
          filesCount: 0,
          foldersCount: 0,
          new: 0,
          mute: false,
          pinned: false,
          private: false,
          indexing: false,
          denyDownload: false,
          fileEntryType: 1,
          id: 759683,
          rootFolderId: 759683,
          canShare: false,
          security: {
            Read: true,
            Create: true,
            Delete: false,
            EditRoom: false,
            Rename: false,
            CopyTo: false,
            Copy: false,
            MoveTo: true,
            Move: false,
            Pin: false,
            Mute: false,
            EditAccess: false,
            Duplicate: false,
            Download: false,
            CopySharedLink: false,
            Reconnect: false,
            CreateRoomFrom: false,
            CopyLink: false,
            Embed: false,
            ChangeOwner: false,
            IndexExport: false,
          },
          title: '房间',
          access: 0,
          shared: false,
          created: '2025-03-06T11:30:51.0000000+08:00',
          createdBy: {
            id: '7ffe085d-0dc5-43c2-a9f2-757bd9a0afff',
            displayName: 'Jack Zhuang',
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
          },
          updated: '2025-03-06T11:31:26.0000000+08:00',
          rootFolderType: 14,
          parentRoomType: 14,
          updatedBy: {
            id: '7ffe085d-0dc5-43c2-a9f2-757bd9a0afff',
            displayName: 'Jack Zhuang',
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
          },
        },
        pathParts: [
          {
            id: 759683,
            title: '房间',
          },
        ],
        startIndex: 0,
        count: 1,
        total: 1,
        new: 0,
      },
      count: 1,
      links: [
        {
          href: 'https://steedos.onlyoffice.com/api/2.0/files/rooms?count=100&searchArea=Active&sortBy=DateAndTime&sortOrder=descending',
          action: 'GET',
        },
      ],
      status: 0,
      statusCode: 200,
    };
  }

}

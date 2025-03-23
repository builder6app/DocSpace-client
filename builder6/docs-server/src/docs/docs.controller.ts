import { Controller, Get } from '@nestjs/common';
import { DocsService } from './docs.service';
import { FilesService } from '@builder6/files';

@Controller('/api/2.0')
export class DocsController {
    constructor(
      private readonly filesService: FilesService,
      private readonly docsService: DocsService,
    ) {}


    @Get('/settings')
    async getSettings(
    ) {
        return {
            "response": {
                "timezone": "Asia/Taipei",
                "trustedDomains": [],
                "trustedDomainsType": 0,
                "culture": "zh-CN",
                "utcOffset": "08:00:00",
                "utcHoursOffset": 8,
                "greetingSettings": "办公文档云空间",
                "ownerId": "7ffe085d-0dc5-43c2-a9f2-757bd9a0afff",
                "nameSchemaId": "Common",
                "enableAdmMess": false,
                "docSpace": true,
                "standalone": false,
                "isAmi": false,
                "baseDomain": "onlyoffice.com",
                "passwordHash": {
                    "size": 256,
                    "iterations": 100000,
                    "salt": "1e912b1b2ce20b91bb9db717e214feb1771045bd9fea31727e59f514964b944f"
                },
                "firebase": {
                    "apiKey": "AIzaSyAmeEu0pRj_6-XrbelX_zYacwlHmwyOFl4",
                    "authDomain": "personal-onlyoffice-com.firebaseapp.com",
                    "projectId": "personal-onlyoffice-com",
                    "storageBucket": "personal-onlyoffice-com.appspot.com",
                    "messagingSenderId": "970743968669",
                    "appId": "1:970743968669:web:ae67678adaaa1066e9f574",
                    "measurementId": "G-YCDS406HEZ",
                    "databaseURL": "https://personal-onlyoffice-com-default-rtdb.firebaseio.com"
                },
                "version": "3.0.4.4498",
                "recaptchaType": 0,
                "debugInfo": false,
                "socketUrl": "/socket.io",
                "tenantStatus": 0,
                "tenantAlias": "steedos",
                "helpLink": "https://helpcenter.onlyoffice.com",
                "forumLink": "https://forum.onlyoffice.com",
                "displayAbout": true,
                "apiDocsLink": "https://api.onlyoffice.com",
                "domainValidator": {
                    "regex": "^[a-z0-9]([a-z0-9-]){1,61}[a-z0-9]$",
                    "minLength": 3,
                    "maxLength": 63
                },
                "zendeskKey": "d9e277ac-20cf-47a7-8010-57cd31a8d619",
                "tagManagerId": "GTM-KK2TDMJ7",
                "bookTrainingEmail": "training@onlyoffice.com",
                "documentationEmail": "documentation@onlyoffice.com",
                "legalTerms": "https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0",
                "licenseUrl": "https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=8373021&doc=aTFMQ3M0M2g3aWVVYkp5TERZbFFEbEk5NktBQUdBSVZVeTBqbzQ5ak9JYz0_IntcImVudHJ5XCI6XCI4MzczMDIxXCIsXCJsaW5rXCI6XCIxNTVkMTc0ZS1kY2UyLTQyZjgtOTQzNi03ZTU2OGY0ZmMxNWVcIn0i0",
                "cookieSettingsEnabled": false,
                "limitedAccessSpace": false,
                "userNameRegex": "^[\\p{L}\\p{M}' \\-]+$",
                "invitationLimit": 2147483647,
                "plugins": {
                    "enabled": true,
                    "upload": false,
                    "delete": false
                },
                "deepLink": {
                    "androidPackageName": "com.onlyoffice.documents",
                    "url": "oodocuments://openfile",
                    "iosPackageId": "944896972"
                },
                "formGallery": {
                    "path": "/api/oforms/",
                    "domain": "https://cmsoforms.onlyoffice.com",
                    "ext": ".pdf",
                    "uploadPath": "/api/upload",
                    "uploadDomain": "https://oforms.onlyoffice.com",
                    "uploadExt": ".pdf",
                    "uploadDashboard": "/dashboard/api"
                },
                "maxImageUploadSize": 5242880
            },
            "count": 1,
            "links": [
                {
                    "href": "https://steedos.onlyoffice.com/api/2.0/settings?withPassword=true",
                    "action": "GET"
                }
            ],
            "status": 0,
            "statusCode": 200
        }
    }
  
    @Get('/settings/colortheme')
    async getSettingsColorTheme() {
        return {
            "response": {
                "themes": [
                    {
                        "id": 1,
                        "name": "blue",
                        "main": {
                            "accent": "#4781D1",
                            "buttons": "#5299E0"
                        },
                        "text": {
                            "accent": "#FFFFFF",
                            "buttons": "#FFFFFF"
                        }
                    },
                    {
                        "id": 2,
                        "name": "orange",
                        "main": {
                            "accent": "#F97A0B",
                            "buttons": "#FF9933"
                        },
                        "text": {
                            "accent": "#FFFFFF",
                            "buttons": "#FFFFFF"
                        }
                    },
                    {
                        "id": 3,
                        "name": "green",
                        "main": {
                            "accent": "#2DB482",
                            "buttons": "#22C386"
                        },
                        "text": {
                            "accent": "#FFFFFF",
                            "buttons": "#FFFFFF"
                        }
                    },
                    {
                        "id": 4,
                        "name": "red",
                        "main": {
                            "accent": "#F2675A",
                            "buttons": "#F27564"
                        },
                        "text": {
                            "accent": "#FFFFFF",
                            "buttons": "#FFFFFF"
                        }
                    },
                    {
                        "id": 5,
                        "name": "purple",
                        "main": {
                            "accent": "#6D4EC2",
                            "buttons": "#8570BD"
                        },
                        "text": {
                            "accent": "#FFFFFF",
                            "buttons": "#FFFFFF"
                        }
                    },
                    {
                        "id": 6,
                        "name": "light-blue",
                        "main": {
                            "accent": "#11A4D4",
                            "buttons": "#13B7EC"
                        },
                        "text": {
                            "accent": "#FFFFFF",
                            "buttons": "#FFFFFF"
                        }
                    }
                ],
                "selected": 1,
                "limit": 9
            },
            "count": 1,
            "links": [
                {
                    "href": "https://steedos.onlyoffice.com/api/2.0/settings/colortheme",
                    "action": "GET"
                }
            ],
            "status": 0,
            "statusCode": 200
        }
    }

    @Get('/capabilities')
    async getCapabilities(
    ) {
        return {
            "response": {
                "ldapEnabled": false,
                "providers": [
                    "google",
                    "zoom",
                    "linkedin",
                    "twitter",
                    "appleid"
                ],
                "ssoLabel": "",
                "oauthEnabled": true,
                "ssoUrl": "",
                "identityServerEnabled": true
            },
            "count": 1,
            "links": [
                {
                    "href": "https://steedos.onlyoffice.com/api/2.0/capabilities",
                    "action": "GET"
                }
            ],
            "status": 0,
            "statusCode": 200
        }
    }


    @Get('/settings/version/build')
    async getSettingsVersionBuild() {
        return {
            "response": {
                "docSpace": "3.0.4.4498",
                "communityServer": "12.0.0",
                "documentServer": "8.3.1.25"
            },
            "count": 1,
            "links": [
                {
                    "href": "https://steedos.onlyoffice.com/api/2.0/settings/version/build",
                    "action": "GET"
                }
            ],
            "status": 0,
            "statusCode": 200
        }
    }


    @Get('/people/@self')
    async getPeopleSelf(
    ) {
        return {
            "response": {
                "firstName": "Jack",
                "lastName": "Zhuang",
                "userName": "zhuangjianguo",
                "email": "zhuangjianguo@gmail.com",
                "status": 1,
                "activationStatus": 0,
                "department": "",
                "workFrom": "2025-03-06T19:30:43.0000000+08:00",
                "isAdmin": true,
                "isRoomAdmin": false,
                "isLDAP": false,
                "isOwner": true,
                "isVisitor": false,
                "isCollaborator": false,
                "cultureName": "zh-CN",
                "mobilePhoneActivationStatus": 0,
                "isSSO": false,
                "theme": "System",
                "loginEventId": 30571015,
                "registrationDate": "2025-03-06T11:30:43.0000000+08:00",
                "id": "7ffe085d-0dc5-43c2-a9f2-757bd9a0afff",
                "displayName": "Jack Zhuang",
                "avatar": "/static/images/default_user_photo_size_82-82.png?hash=1238743481",
                "avatarOriginal": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                "avatarMax": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                "avatarMedium": "/static/images/default_user_photo_size_48-48.png?hash=1238743481",
                "avatarSmall": "/static/images/default_user_photo_size_32-32.png?hash=1238743481",
                "profileUrl": "https://steedos.onlyoffice.com/accounts/people/filter?search=zhuangjianguo%40gmail.com",
                "hasAvatar": false,
                "isAnonim": false
            },
            "count": 1,
            "links": [
                {
                    "href": "https://steedos.onlyoffice.com/api/2.0/people/@self",
                    "action": "GET"
                }
            ],
            "status": 0,
            "statusCode": 200
        }
    }

    @Get('/settings/rebranding/additional')
    async getSettingsRebrandingAdditional(
    ) {
        return {
            "response": {
                "startDocsEnabled": true,
                "helpCenterEnabled": true,
                "feedbackAndSupportEnabled": true,
                "feedbackAndSupportUrl": "https://helpdesk.onlyoffice.com",
                "userForumEnabled": true,
                "userForumUrl": "https://forum.onlyoffice.com/",
                "videoGuidesEnabled": true,
                "videoGuidesUrl": "https://helpcenter.onlyoffice.com/{ru|de|fr|es|it}/video.aspx",
                "salesEmail": "sales@onlyoffice.com",
                "buyUrl": "https://www.onlyoffice.com/post.ashx?type=buydocspaceenterprise",
                "licenseAgreementsEnabled": true,
                "isDefault": true,
                "licenseAgreementsUrl": "https://help.onlyoffice.com/Products/Files/doceditor.aspx?fileid=6795868&doc=RG5GaVN6azdUQW5kLzZQNzBXbHZ4Rm9QWVZuNjZKUmgya0prWnpCd2dGcz0_IjY3OTU4Njgi0"
            },
            "count": 1,
            "links": [
                {
                    "href": "https://steedos.onlyoffice.com/api/2.0/settings/rebranding/additional",
                    "action": "GET"
                }
            ],
            "status": 0,
            "statusCode": 200
        }
    }



    @Get('/settings/rebranding/company')
    async getSettingsRebrandingCompany(
    ) {
        return {
            "response": {
                "companyName": "Ascensio System SIA",
                "site": "https://www.onlyoffice.com",
                "email": "support@onlyoffice.com",
                "address": "20A-6 Ernesta Birznieka-Upisha street, Riga, Latvia, EU, LV-1050",
                "phone": "+371 660-16425",
                "isLicensor": true,
                "isDefault": true
            },
            "count": 1,
            "links": [
                {
                    "href": "https://steedos.onlyoffice.com/api/2.0/settings/rebranding/company",
                    "action": "GET"
                }
            ],
            "status": 0,
            "statusCode": 200
        }
    }



    @Get('/portal/tariff')
    async getProtalTariff(
    ) {
        return {
            "response": {
                "openSource": false,
                "enterprise": false,
                "developer": false,
                "id": -110735,
                "state": 1,
                "dueDate": "9999-12-31T23:59:59.9999999",
                "delayDueDate": "9999-12-31T23:59:59.9999999",
                "licenseDate": "9999-12-31T23:59:59.9999999",
                "customerId": "",
                "quotas": [
                    {
                        "id": -3,
                        "quantity": 1
                    }
                ]
            },
            "count": 1,
            "links": [
                {
                    "href": "https://steedos.onlyoffice.com/api/2.0/portal/tariff",
                    "action": "GET"
                }
            ],
            "status": 0,
            "statusCode": 200
        }
    }



    @Get('/portal/payment/quota')
    async getProtalPaymentQuota(
    ) {
        return {
            "response": {
                "id": -3,
                "title": "初创",
                "price": {
                    "value": 0.00
                },
                "nonProfit": false,
                "free": true,
                "trial": false,
                "features": [
                    {
                        "id": "manager",
                        "value": 3,
                        "type": "count",
                        "used": {
                            "value": 3,
                            "title": "管理员已添加："
                        },
                        "priceTitle": "管理员数量"
                    },
                    {
                        "id": "total_size",
                        "title": "每个管理员 2 GB，并且能够请求增加空间",
                        "value": 2147483648,
                        "type": "size",
                        "used": {
                            "value": 3497009,
                            "title": "已使用储存空间："
                        },
                        "priceTitle": "储存空间"
                    },
                    {
                        "id": "file_size",
                        "title": "文件最大大小",
                        "value": -1,
                        "type": "size",
                        "used": {
                            "value": 0
                        }
                    },
                    {
                        "id": "oauth",
                        "value": true,
                        "type": "flag"
                    },
                    {
                        "id": "users",
                        "title": "不限用户数量",
                        "value": -1,
                        "type": "count",
                        "used": {
                            "value": 0
                        }
                    },
                    {
                        "id": "room",
                        "title": "不限激活的房间数量",
                        "value": 12,
                        "type": "count",
                        "used": {
                            "value": 1,
                            "title": "房间数量："
                        }
                    },
                    {
                        "id": "ldap",
                        "value": false,
                        "type": "flag"
                    },
                    {
                        "id": "customization",
                        "title": "品牌化&个性定制",
                        "value": false,
                        "type": "flag"
                    },
                    {
                        "id": "sso",
                        "title": "SSO单点登录",
                        "value": false,
                        "type": "flag"
                    },
                    {
                        "id": "restore",
                        "title": "自动备份与恢复",
                        "value": false,
                        "type": "flag"
                    },
                    {
                        "id": "audit",
                        "title": "跟踪用户登录与活动",
                        "value": false,
                        "type": "flag"
                    },
                    {
                        "id": "thirdparty",
                        "title": "第三方集成",
                        "value": false,
                        "type": "flag"
                    },
                    {
                        "id": "statistic",
                        "title": "存储配额 & 统计",
                        "value": false,
                        "type": "flag"
                    }
                ]
            },
            "count": 1,
            "links": [
                {
                    "href": "https://steedos.onlyoffice.com/api/2.0/portal/payment/quota",
                    "action": "GET"
                }
            ],
            "status": 0,
            "statusCode": 200
        }
    }



    @Get('/settings/cultures')
    async getSettingsCultures(
    ) {
        return {
            "response": [
                "az",
                "cs",
                "de",
                "en-GB",
                "en-US",
                "es",
                "fr",
                "it",
                "lv",
                "nl",
                "pl",
                "pt-BR",
                "pt",
                "ro",
                "sk",
                "sl",
                "fi",
                "vi",
                "tr",
                "el-GR",
                "bg",
                "ru",
                "sr-Cyrl-RS",
                "sr-Latn-RS",
                "uk-UA",
                "hy-AM",
                "ar-SA",
                "si",
                "lo-LA",
                "zh-CN",
                "ja-JP",
                "ko-KR"
            ],
            "count": 32,
            "links": [
                {
                    "href": "https://steedos.onlyoffice.com/api/2.0/settings/cultures",
                    "action": "GET"
                }
            ],
            "status": 0,
            "statusCode": 200
        }
    }




    @Get('/files/@root')
    async getFilesRoot(
    ) {
        return {
            "response": [
                {
                    "files": [],
                    "folders": [],
                    "current": {
                        "parentId": 0,
                        "filesCount": 4,
                        "foldersCount": 0,
                        "new": 0,
                        "mute": false,
                        "pinned": false,
                        "private": false,
                        "indexing": false,
                        "denyDownload": false,
                        "fileEntryType": 1,
                        "id": 759680,
                        "rootFolderId": 759680,
                        "canShare": false,
                        "security": {
                            "Read": true,
                            "Create": true,
                            "Delete": false,
                            "EditRoom": false,
                            "Rename": false,
                            "CopyTo": true,
                            "Copy": false,
                            "MoveTo": true,
                            "Move": false,
                            "Pin": false,
                            "Mute": false,
                            "EditAccess": false,
                            "Duplicate": false,
                            "Download": false,
                            "CopySharedLink": false,
                            "Reconnect": false,
                            "CreateRoomFrom": false,
                            "CopyLink": false,
                            "Embed": false,
                            "ChangeOwner": false,
                            "IndexExport": false
                        },
                        "title": "文档",
                        "access": 0,
                        "shared": false,
                        "created": "2025-03-06T11:30:51.0000000+08:00",
                        "createdBy": {
                            "id": "7ffe085d-0dc5-43c2-a9f2-757bd9a0afff",
                            "displayName": "Jack Zhuang",
                            "avatar": "/static/images/default_user_photo_size_82-82.png?hash=1238743481",
                            "avatarOriginal": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                            "avatarMax": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                            "avatarMedium": "/static/images/default_user_photo_size_48-48.png?hash=1238743481",
                            "avatarSmall": "/static/images/default_user_photo_size_32-32.png?hash=1238743481",
                            "profileUrl": "https://steedos.onlyoffice.com/accounts/people/filter?search=zhuangjianguo%40gmail.com",
                            "hasAvatar": false,
                            "isAnonim": false
                        },
                        "updated": "2025-03-06T11:30:51.0000000+08:00",
                        "rootFolderType": 5,
                        "updatedBy": {
                            "id": "7ffe085d-0dc5-43c2-a9f2-757bd9a0afff",
                            "displayName": "Jack Zhuang",
                            "avatar": "/static/images/default_user_photo_size_82-82.png?hash=1238743481",
                            "avatarOriginal": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                            "avatarMax": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                            "avatarMedium": "/static/images/default_user_photo_size_48-48.png?hash=1238743481",
                            "avatarSmall": "/static/images/default_user_photo_size_32-32.png?hash=1238743481",
                            "profileUrl": "https://steedos.onlyoffice.com/accounts/people/filter?search=zhuangjianguo%40gmail.com",
                            "hasAvatar": false,
                            "isAnonim": false
                        }
                    },
                    "pathParts": [
                        {
                            "id": 759680,
                            "title": "文档"
                        }
                    ],
                    "startIndex": 0,
                    "count": 0,
                    "total": 0,
                    "new": 0
                },
                {
                    "files": [],
                    "folders": [],
                    "current": {
                        "parentId": 0,
                        "filesCount": 0,
                        "foldersCount": 0,
                        "new": 0,
                        "mute": false,
                        "pinned": false,
                        "private": false,
                        "indexing": false,
                        "denyDownload": false,
                        "fileEntryType": 1,
                        "id": 759682,
                        "rootFolderId": 759682,
                        "canShare": false,
                        "security": {
                            "Read": true,
                            "Create": false,
                            "Delete": false,
                            "EditRoom": false,
                            "Rename": false,
                            "CopyTo": false,
                            "Copy": false,
                            "MoveTo": true,
                            "Move": false,
                            "Pin": false,
                            "Mute": false,
                            "EditAccess": false,
                            "Duplicate": false,
                            "Download": false,
                            "CopySharedLink": false,
                            "Reconnect": false,
                            "CreateRoomFrom": false,
                            "CopyLink": false,
                            "Embed": false,
                            "ChangeOwner": false,
                            "IndexExport": false
                        },
                        "title": "回收站",
                        "access": 0,
                        "shared": false,
                        "created": "2025-03-06T11:30:51.0000000+08:00",
                        "createdBy": {
                            "id": "7ffe085d-0dc5-43c2-a9f2-757bd9a0afff",
                            "displayName": "Jack Zhuang",
                            "avatar": "/static/images/default_user_photo_size_82-82.png?hash=1238743481",
                            "avatarOriginal": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                            "avatarMax": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                            "avatarMedium": "/static/images/default_user_photo_size_48-48.png?hash=1238743481",
                            "avatarSmall": "/static/images/default_user_photo_size_32-32.png?hash=1238743481",
                            "profileUrl": "https://steedos.onlyoffice.com/accounts/people/filter?search=zhuangjianguo%40gmail.com",
                            "hasAvatar": false,
                            "isAnonim": false
                        },
                        "updated": "2025-03-06T11:30:51.0000000+08:00",
                        "rootFolderType": 3,
                        "updatedBy": {
                            "id": "7ffe085d-0dc5-43c2-a9f2-757bd9a0afff",
                            "displayName": "Jack Zhuang",
                            "avatar": "/static/images/default_user_photo_size_82-82.png?hash=1238743481",
                            "avatarOriginal": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                            "avatarMax": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                            "avatarMedium": "/static/images/default_user_photo_size_48-48.png?hash=1238743481",
                            "avatarSmall": "/static/images/default_user_photo_size_32-32.png?hash=1238743481",
                            "profileUrl": "https://steedos.onlyoffice.com/accounts/people/filter?search=zhuangjianguo%40gmail.com",
                            "hasAvatar": false,
                            "isAnonim": false
                        }
                    },
                    "pathParts": [
                        {
                            "id": 759682,
                            "title": "回收站"
                        }
                    ],
                    "startIndex": 0,
                    "count": 0,
                    "total": 0,
                    "new": 0
                },
                {
                    "files": [],
                    "folders": [
                        {
                            "parentId": 759683,
                            "filesCount": 1,
                            "foldersCount": 0,
                            "new": 0,
                            "mute": false,
                            "tags": [],
                            "logo": {
                                "original": "",
                                "large": "",
                                "medium": "",
                                "small": "",
                                "color": "FF6680"
                            },
                            "pinned": false,
                            "roomType": 6,
                            "private": false,
                            "indexing": false,
                            "denyDownload": false,
                            "inRoom": true,
                            "fileEntryType": 1,
                            "id": 759685,
                            "rootFolderId": 759683,
                            "canShare": true,
                            "security": {
                                "Read": true,
                                "Create": true,
                                "Delete": false,
                                "EditRoom": true,
                                "Rename": true,
                                "CopyTo": true,
                                "Copy": true,
                                "MoveTo": true,
                                "Move": true,
                                "Pin": true,
                                "Mute": true,
                                "EditAccess": true,
                                "Duplicate": true,
                                "Download": true,
                                "CopySharedLink": true,
                                "Reconnect": false,
                                "CreateRoomFrom": false,
                                "CopyLink": true,
                                "Embed": true,
                                "ChangeOwner": true,
                                "IndexExport": false
                            },
                            "title": "华炎",
                            "access": 0,
                            "shared": true,
                            "created": "2025-03-06T11:31:16.0000000+08:00",
                            "createdBy": {
                                "id": "7ffe085d-0dc5-43c2-a9f2-757bd9a0afff",
                                "displayName": "Jack Zhuang",
                                "avatar": "/static/images/default_user_photo_size_82-82.png?hash=1238743481",
                                "avatarOriginal": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                                "avatarMax": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                                "avatarMedium": "/static/images/default_user_photo_size_48-48.png?hash=1238743481",
                                "avatarSmall": "/static/images/default_user_photo_size_32-32.png?hash=1238743481",
                                "profileUrl": "https://steedos.onlyoffice.com/accounts/people/filter?search=zhuangjianguo%40gmail.com",
                                "hasAvatar": false,
                                "isAnonim": false
                            },
                            "updated": "2025-03-21T13:32:26.0000000+08:00",
                            "rootFolderType": 14,
                            "updatedBy": {
                                "id": "7ffe085d-0dc5-43c2-a9f2-757bd9a0afff",
                                "displayName": "Jack Zhuang",
                                "avatar": "/static/images/default_user_photo_size_82-82.png?hash=1238743481",
                                "avatarOriginal": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                                "avatarMax": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                                "avatarMedium": "/static/images/default_user_photo_size_48-48.png?hash=1238743481",
                                "avatarSmall": "/static/images/default_user_photo_size_32-32.png?hash=1238743481",
                                "profileUrl": "https://steedos.onlyoffice.com/accounts/people/filter?search=zhuangjianguo%40gmail.com",
                                "hasAvatar": false,
                                "isAnonim": false
                            }
                        }
                    ],
                    "current": {
                        "parentId": 0,
                        "filesCount": 0,
                        "foldersCount": 0,
                        "new": 0,
                        "mute": false,
                        "pinned": false,
                        "private": false,
                        "indexing": false,
                        "denyDownload": false,
                        "fileEntryType": 1,
                        "id": 759683,
                        "rootFolderId": 759683,
                        "canShare": false,
                        "security": {
                            "Read": true,
                            "Create": true,
                            "Delete": false,
                            "EditRoom": false,
                            "Rename": false,
                            "CopyTo": false,
                            "Copy": false,
                            "MoveTo": true,
                            "Move": false,
                            "Pin": false,
                            "Mute": false,
                            "EditAccess": false,
                            "Duplicate": false,
                            "Download": false,
                            "CopySharedLink": false,
                            "Reconnect": false,
                            "CreateRoomFrom": false,
                            "CopyLink": false,
                            "Embed": false,
                            "ChangeOwner": false,
                            "IndexExport": false
                        },
                        "title": "房间",
                        "access": 0,
                        "shared": false,
                        "created": "2025-03-06T11:30:51.0000000+08:00",
                        "createdBy": {
                            "id": "7ffe085d-0dc5-43c2-a9f2-757bd9a0afff",
                            "displayName": "Jack Zhuang",
                            "avatar": "/static/images/default_user_photo_size_82-82.png?hash=1238743481",
                            "avatarOriginal": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                            "avatarMax": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                            "avatarMedium": "/static/images/default_user_photo_size_48-48.png?hash=1238743481",
                            "avatarSmall": "/static/images/default_user_photo_size_32-32.png?hash=1238743481",
                            "profileUrl": "https://steedos.onlyoffice.com/accounts/people/filter?search=zhuangjianguo%40gmail.com",
                            "hasAvatar": false,
                            "isAnonim": false
                        },
                        "updated": "2025-03-06T11:31:26.0000000+08:00",
                        "rootFolderType": 14,
                        "parentRoomType": 14,
                        "updatedBy": {
                            "id": "7ffe085d-0dc5-43c2-a9f2-757bd9a0afff",
                            "displayName": "Jack Zhuang",
                            "avatar": "/static/images/default_user_photo_size_82-82.png?hash=1238743481",
                            "avatarOriginal": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                            "avatarMax": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                            "avatarMedium": "/static/images/default_user_photo_size_48-48.png?hash=1238743481",
                            "avatarSmall": "/static/images/default_user_photo_size_32-32.png?hash=1238743481",
                            "profileUrl": "https://steedos.onlyoffice.com/accounts/people/filter?search=zhuangjianguo%40gmail.com",
                            "hasAvatar": false,
                            "isAnonim": false
                        }
                    },
                    "pathParts": [
                        {
                            "id": 759683,
                            "title": "房间"
                        }
                    ],
                    "startIndex": 0,
                    "count": 1,
                    "total": 1,
                    "new": 0
                },
                {
                    "files": [],
                    "folders": [],
                    "current": {
                        "parentId": 0,
                        "filesCount": 0,
                        "foldersCount": 0,
                        "new": 0,
                        "mute": false,
                        "pinned": false,
                        "private": false,
                        "indexing": false,
                        "denyDownload": false,
                        "fileEntryType": 1,
                        "id": 759684,
                        "rootFolderId": 759684,
                        "canShare": false,
                        "security": {
                            "Read": true,
                            "Create": false,
                            "Delete": false,
                            "EditRoom": false,
                            "Rename": false,
                            "CopyTo": false,
                            "Copy": true,
                            "MoveTo": true,
                            "Move": false,
                            "Pin": false,
                            "Mute": false,
                            "EditAccess": false,
                            "Duplicate": false,
                            "Download": true,
                            "CopySharedLink": false,
                            "Reconnect": false,
                            "CreateRoomFrom": false,
                            "CopyLink": false,
                            "Embed": false,
                            "ChangeOwner": false,
                            "IndexExport": false
                        },
                        "title": "归档",
                        "access": 0,
                        "shared": false,
                        "created": "2025-03-06T11:30:51.0000000+08:00",
                        "createdBy": {
                            "id": "7ffe085d-0dc5-43c2-a9f2-757bd9a0afff",
                            "displayName": "Jack Zhuang",
                            "avatar": "/static/images/default_user_photo_size_82-82.png?hash=1238743481",
                            "avatarOriginal": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                            "avatarMax": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                            "avatarMedium": "/static/images/default_user_photo_size_48-48.png?hash=1238743481",
                            "avatarSmall": "/static/images/default_user_photo_size_32-32.png?hash=1238743481",
                            "profileUrl": "https://steedos.onlyoffice.com/accounts/people/filter?search=zhuangjianguo%40gmail.com",
                            "hasAvatar": false,
                            "isAnonim": false
                        },
                        "updated": "2025-03-06T11:30:51.0000000+08:00",
                        "rootFolderType": 20,
                        "updatedBy": {
                            "id": "7ffe085d-0dc5-43c2-a9f2-757bd9a0afff",
                            "displayName": "Jack Zhuang",
                            "avatar": "/static/images/default_user_photo_size_82-82.png?hash=1238743481",
                            "avatarOriginal": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                            "avatarMax": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                            "avatarMedium": "/static/images/default_user_photo_size_48-48.png?hash=1238743481",
                            "avatarSmall": "/static/images/default_user_photo_size_32-32.png?hash=1238743481",
                            "profileUrl": "https://steedos.onlyoffice.com/accounts/people/filter?search=zhuangjianguo%40gmail.com",
                            "hasAvatar": false,
                            "isAnonim": false
                        }
                    },
                    "pathParts": [
                        {
                            "id": 759684,
                            "title": "归档"
                        }
                    ],
                    "startIndex": 0,
                    "count": 0,
                    "total": 0,
                    "new": 0
                }
            ],
            "count": 1,
            "links": [
                {
                    "href": "https://steedos.onlyoffice.com/api/2.0/files/@root?filterType=2&count=1",
                    "action": "GET"
                }
            ],
            "status": 0,
            "statusCode": 200
        }
    }



    @Get('/files/rooms')
    async getFilesRooms(
    ) {
        return {
            "response": {
                "files": [],
                "folders": [
                    {
                        "parentId": 759683,
                        "filesCount": 1,
                        "foldersCount": 0,
                        "new": 0,
                        "mute": false,
                        "tags": [],
                        "logo": {
                            "original": "",
                            "large": "",
                            "medium": "",
                            "small": "",
                            "color": "FF6680"
                        },
                        "pinned": false,
                        "roomType": 6,
                        "private": false,
                        "indexing": false,
                        "denyDownload": false,
                        "inRoom": true,
                        "fileEntryType": 1,
                        "id": 759685,
                        "rootFolderId": 759683,
                        "canShare": true,
                        "security": {
                            "Read": true,
                            "Create": true,
                            "Delete": false,
                            "EditRoom": true,
                            "Rename": true,
                            "CopyTo": true,
                            "Copy": true,
                            "MoveTo": true,
                            "Move": true,
                            "Pin": true,
                            "Mute": true,
                            "EditAccess": true,
                            "Duplicate": true,
                            "Download": true,
                            "CopySharedLink": true,
                            "Reconnect": false,
                            "CreateRoomFrom": false,
                            "CopyLink": true,
                            "Embed": true,
                            "ChangeOwner": true,
                            "IndexExport": false
                        },
                        "title": "华炎",
                        "access": 0,
                        "shared": true,
                        "created": "2025-03-06T11:31:16.0000000+08:00",
                        "createdBy": {
                            "id": "7ffe085d-0dc5-43c2-a9f2-757bd9a0afff",
                            "displayName": "Jack Zhuang",
                            "avatar": "/static/images/default_user_photo_size_82-82.png?hash=1238743481",
                            "avatarOriginal": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                            "avatarMax": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                            "avatarMedium": "/static/images/default_user_photo_size_48-48.png?hash=1238743481",
                            "avatarSmall": "/static/images/default_user_photo_size_32-32.png?hash=1238743481",
                            "profileUrl": "https://steedos.onlyoffice.com/accounts/people/filter?search=zhuangjianguo%40gmail.com",
                            "hasAvatar": false,
                            "isAnonim": false
                        },
                        "updated": "2025-03-21T13:32:26.0000000+08:00",
                        "rootFolderType": 14,
                        "updatedBy": {
                            "id": "7ffe085d-0dc5-43c2-a9f2-757bd9a0afff",
                            "displayName": "Jack Zhuang",
                            "avatar": "/static/images/default_user_photo_size_82-82.png?hash=1238743481",
                            "avatarOriginal": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                            "avatarMax": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                            "avatarMedium": "/static/images/default_user_photo_size_48-48.png?hash=1238743481",
                            "avatarSmall": "/static/images/default_user_photo_size_32-32.png?hash=1238743481",
                            "profileUrl": "https://steedos.onlyoffice.com/accounts/people/filter?search=zhuangjianguo%40gmail.com",
                            "hasAvatar": false,
                            "isAnonim": false
                        }
                    }
                ],
                "current": {
                    "parentId": 0,
                    "filesCount": 0,
                    "foldersCount": 0,
                    "new": 0,
                    "mute": false,
                    "pinned": false,
                    "private": false,
                    "indexing": false,
                    "denyDownload": false,
                    "fileEntryType": 1,
                    "id": 759683,
                    "rootFolderId": 759683,
                    "canShare": false,
                    "security": {
                        "Read": true,
                        "Create": true,
                        "Delete": false,
                        "EditRoom": false,
                        "Rename": false,
                        "CopyTo": false,
                        "Copy": false,
                        "MoveTo": true,
                        "Move": false,
                        "Pin": false,
                        "Mute": false,
                        "EditAccess": false,
                        "Duplicate": false,
                        "Download": false,
                        "CopySharedLink": false,
                        "Reconnect": false,
                        "CreateRoomFrom": false,
                        "CopyLink": false,
                        "Embed": false,
                        "ChangeOwner": false,
                        "IndexExport": false
                    },
                    "title": "房间",
                    "access": 0,
                    "shared": false,
                    "created": "2025-03-06T11:30:51.0000000+08:00",
                    "createdBy": {
                        "id": "7ffe085d-0dc5-43c2-a9f2-757bd9a0afff",
                        "displayName": "Jack Zhuang",
                        "avatar": "/static/images/default_user_photo_size_82-82.png?hash=1238743481",
                        "avatarOriginal": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                        "avatarMax": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                        "avatarMedium": "/static/images/default_user_photo_size_48-48.png?hash=1238743481",
                        "avatarSmall": "/static/images/default_user_photo_size_32-32.png?hash=1238743481",
                        "profileUrl": "https://steedos.onlyoffice.com/accounts/people/filter?search=zhuangjianguo%40gmail.com",
                        "hasAvatar": false,
                        "isAnonim": false
                    },
                    "updated": "2025-03-06T11:31:26.0000000+08:00",
                    "rootFolderType": 14,
                    "parentRoomType": 14,
                    "updatedBy": {
                        "id": "7ffe085d-0dc5-43c2-a9f2-757bd9a0afff",
                        "displayName": "Jack Zhuang",
                        "avatar": "/static/images/default_user_photo_size_82-82.png?hash=1238743481",
                        "avatarOriginal": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                        "avatarMax": "/static/images/default_user_photo_size_200-200.png?hash=1238743481",
                        "avatarMedium": "/static/images/default_user_photo_size_48-48.png?hash=1238743481",
                        "avatarSmall": "/static/images/default_user_photo_size_32-32.png?hash=1238743481",
                        "profileUrl": "https://steedos.onlyoffice.com/accounts/people/filter?search=zhuangjianguo%40gmail.com",
                        "hasAvatar": false,
                        "isAnonim": false
                    }
                },
                "pathParts": [
                    {
                        "id": 759683,
                        "title": "房间"
                    }
                ],
                "startIndex": 0,
                "count": 1,
                "total": 1,
                "new": 0
            },
            "count": 1,
            "links": [
                {
                    "href": "https://steedos.onlyoffice.com/api/2.0/files/rooms?count=100&searchArea=Active&sortBy=DateAndTime&sortOrder=descending",
                    "action": "GET"
                }
            ],
            "status": 0,
            "statusCode": 200
        }
    }



    @Get('/files/settings')
    async getFilesSettings(
    ) {
        return {
            "response": {
                "extsImagePreviewed": [
                    ".svg",
                    ".bmp",
                    ".gif",
                    ".jpeg",
                    ".jpg",
                    ".png",
                    ".ico",
                    ".tif",
                    ".tiff",
                    ".webp",
                    ".heic"
                ],
                "extsMediaPreviewed": [
                    ".aac",
                    ".flac",
                    ".m4a",
                    ".mp3",
                    ".oga",
                    ".ogg",
                    ".wav",
                    ".f4v",
                    ".m4v",
                    ".mov",
                    ".mp4",
                    ".ogv",
                    ".webm"
                ],
                "extsWebPreviewed": [
                    ".csv",
                    ".djvu",
                    ".doc",
                    ".docm",
                    ".docx",
                    ".docxf",
                    ".dot",
                    ".dotm",
                    ".dotx",
                    ".dps",
                    ".dpt",
                    ".epub",
                    ".et",
                    ".ett",
                    ".fb2",
                    ".fodp",
                    ".fods",
                    ".fodt",
                    ".gdoc",
                    ".gsheet",
                    ".gslides",
                    ".htm",
                    ".html",
                    ".mht",
                    ".mhtml",
                    ".odp",
                    ".ods",
                    ".odt",
                    ".oform",
                    ".otp",
                    ".ots",
                    ".ott",
                    ".oxps",
                    ".pdf",
                    ".pot",
                    ".potm",
                    ".potx",
                    ".pps",
                    ".ppsm",
                    ".ppsx",
                    ".ppt",
                    ".pptm",
                    ".pptx",
                    ".rtf",
                    ".stw",
                    ".sxc",
                    ".sxi",
                    ".sxw",
                    ".txt",
                    ".wps",
                    ".wpt",
                    ".xls",
                    ".xlsb",
                    ".xlsm",
                    ".xlsx",
                    ".xlt",
                    ".xltm",
                    ".xltx",
                    ".xml",
                    ".xps"
                ],
                "extsWebEdited": [
                    ".csv",
                    ".doc",
                    ".docm",
                    ".docx",
                    ".docxf",
                    ".dot",
                    ".dotm",
                    ".dotx",
                    ".dps",
                    ".dpt",
                    ".epub",
                    ".et",
                    ".ett",
                    ".fb2",
                    ".fodp",
                    ".fods",
                    ".fodt",
                    ".htm",
                    ".html",
                    ".mht",
                    ".mhtml",
                    ".odp",
                    ".ods",
                    ".odt",
                    ".oform",
                    ".otp",
                    ".ots",
                    ".ott",
                    ".pdf",
                    ".pot",
                    ".potm",
                    ".potx",
                    ".pps",
                    ".ppsm",
                    ".ppsx",
                    ".ppt",
                    ".pptm",
                    ".pptx",
                    ".rtf",
                    ".stw",
                    ".sxc",
                    ".sxi",
                    ".sxw",
                    ".txt",
                    ".wps",
                    ".wpt",
                    ".xls",
                    ".xlsb",
                    ".xlsm",
                    ".xlsx",
                    ".xlt",
                    ".xltm",
                    ".xltx",
                    ".xml"
                ],
                "extsWebEncrypt": [
                    ".docm",
                    ".docx",
                    ".docxf",
                    ".dotm",
                    ".dotx",
                    ".oform",
                    ".potm",
                    ".potx",
                    ".ppsm",
                    ".pptm",
                    ".ppsx",
                    ".pptx",
                    ".xlsm",
                    ".xlsx",
                    ".xltm",
                    ".xltx",
                    ".pdf"
                ],
                "extsWebReviewed": [
                    ".docm",
                    ".docx",
                    ".docxf",
                    ".dotm",
                    ".dotx"
                ],
                "extsWebCustomFilterEditing": [
                    ".xlsm",
                    ".xlsx",
                    ".xltm",
                    ".xltx"
                ],
                "extsWebRestrictedEditing": [
                    ".pdf"
                ],
                "extsWebCommented": [
                    ".docm",
                    ".docx",
                    ".docxf",
                    ".dotm",
                    ".dotx",
                    ".potm",
                    ".potx",
                    ".ppsm",
                    ".pptm",
                    ".ppsx",
                    ".pptx",
                    ".xlsm",
                    ".xlsx",
                    ".xltm",
                    ".xltx",
                    ".pdf"
                ],
                "extsWebTemplate": [],
                "extsCoAuthoring": [
                    ".csv",
                    ".docm",
                    ".docx",
                    ".docxf",
                    ".dotm",
                    ".dotx",
                    ".oform",
                    ".pdf",
                    ".potm",
                    ".potx",
                    ".ppsm",
                    ".pptm",
                    ".ppsx",
                    ".pptx",
                    ".txt",
                    ".xlsm",
                    ".xlsx",
                    ".xltm",
                    ".xltx"
                ],
                "extsMustConvert": [
                    ".doc",
                    ".dot",
                    ".dps",
                    ".dpt",
                    ".epub",
                    ".et",
                    ".ett",
                    ".fb2",
                    ".fodp",
                    ".fods",
                    ".fodt",
                    ".htm",
                    ".html",
                    ".mht",
                    ".mhtml",
                    ".odp",
                    ".ods",
                    ".odt",
                    ".otp",
                    ".ots",
                    ".ott",
                    ".pot",
                    ".pps",
                    ".ppt",
                    ".rtf",
                    ".stw",
                    ".sxc",
                    ".sxi",
                    ".sxw",
                    ".wps",
                    ".wpt",
                    ".xls",
                    ".xlsb",
                    ".xlt",
                    ".xml"
                ],
                "extsConvertible": {
                    ".wps": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".dotx": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".xlt": [
                        ".csv",
                        ".ods",
                        ".ots",
                        ".pdf",
                        ".xlsm",
                        ".xlsx",
                        ".xltm",
                        ".xltx"
                    ],
                    ".epub": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".xlst": [
                        ".xlsx"
                    ],
                    ".rtf": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".txt"
                    ],
                    ".odt": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".xls": [
                        ".csv",
                        ".ods",
                        ".ots",
                        ".pdf",
                        ".xlsm",
                        ".xlsx",
                        ".xltm",
                        ".xltx"
                    ],
                    ".stw": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".ppsx": [
                        ".odp",
                        ".otp",
                        ".pdf",
                        ".potm",
                        ".potx",
                        ".ppsm",
                        ".pptm",
                        ".pptx"
                    ],
                    ".xlsb": [
                        ".csv",
                        ".ods",
                        ".ots",
                        ".pdf",
                        ".xlsm",
                        ".xlsx",
                        ".xltm",
                        ".xltx"
                    ],
                    ".ods": [
                        ".csv",
                        ".ots",
                        ".pdf",
                        ".xlsm",
                        ".xlsx",
                        ".xltm",
                        ".xltx"
                    ],
                    ".xlsx": [
                        ".csv",
                        ".ods",
                        ".ots",
                        ".pdf",
                        ".xlsm",
                        ".xltm",
                        ".xltx"
                    ],
                    ".dot": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".xltm": [
                        ".csv",
                        ".ods",
                        ".ots",
                        ".pdf",
                        ".xlsm",
                        ".xlsx",
                        ".xltx"
                    ],
                    ".fods": [
                        ".csv",
                        ".ods",
                        ".ots",
                        ".pdf",
                        ".xlsm",
                        ".xlsx",
                        ".xltm",
                        ".xltx"
                    ],
                    ".potx": [
                        ".odp",
                        ".otp",
                        ".pdf",
                        ".potm",
                        ".ppsm",
                        ".ppsx",
                        ".pptm",
                        ".pptx"
                    ],
                    ".csv": [
                        ".ods",
                        ".ots",
                        ".pdf",
                        ".xlsm",
                        ".xlsx",
                        ".xltm",
                        ".xltx"
                    ],
                    ".sxi": [
                        ".odp",
                        ".otp",
                        ".pdf",
                        ".potm",
                        ".potx",
                        ".ppsm",
                        ".ppsx",
                        ".pptm",
                        ".pptx"
                    ],
                    ".xml": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".ett": [
                        ".csv",
                        ".ods",
                        ".ots",
                        ".pdf",
                        ".xlsm",
                        ".xlsx",
                        ".xltm",
                        ".xltx"
                    ],
                    ".dps": [
                        ".odp",
                        ".otp",
                        ".pdf",
                        ".potm",
                        ".potx",
                        ".ppsm",
                        ".ppsx",
                        ".pptm",
                        ".pptx"
                    ],
                    ".odp": [
                        ".otp",
                        ".pdf",
                        ".potm",
                        ".potx",
                        ".ppsm",
                        ".ppsx",
                        ".pptm",
                        ".pptx"
                    ],
                    ".pot": [
                        ".odp",
                        ".otp",
                        ".pdf",
                        ".potm",
                        ".potx",
                        ".ppsm",
                        ".ppsx",
                        ".pptm",
                        ".pptx"
                    ],
                    ".fodt": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".ppsm": [
                        ".odp",
                        ".otp",
                        ".pdf",
                        ".potm",
                        ".potx",
                        ".ppsx",
                        ".pptm",
                        ".pptx"
                    ],
                    ".xps": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".oxps": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".mhtml": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".djvu": [
                        ".pdf"
                    ],
                    ".wpt": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".pdf": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".rtf",
                        ".txt"
                    ],
                    ".fodp": [
                        ".odp",
                        ".otp",
                        ".pdf",
                        ".potm",
                        ".potx",
                        ".ppsm",
                        ".ppsx",
                        ".pptm",
                        ".pptx"
                    ],
                    ".htm": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".ott": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".pps": [
                        ".odp",
                        ".otp",
                        ".pdf",
                        ".potm",
                        ".potx",
                        ".ppsm",
                        ".ppsx",
                        ".pptm",
                        ".pptx"
                    ],
                    ".html": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".doct": [
                        ".docx"
                    ],
                    ".ots": [
                        ".csv",
                        ".ods",
                        ".pdf",
                        ".xlsm",
                        ".xlsx",
                        ".xltm",
                        ".xltx"
                    ],
                    ".dotm": [
                        ".docm",
                        ".docx",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".mht": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".xlsm": [
                        ".csv",
                        ".ods",
                        ".ots",
                        ".pdf",
                        ".xlsx",
                        ".xltm",
                        ".xltx"
                    ],
                    ".docxf": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".sxc": [
                        ".csv",
                        ".ods",
                        ".ots",
                        ".pdf",
                        ".xlsm",
                        ".xlsx",
                        ".xltm",
                        ".xltx"
                    ],
                    ".pptx": [
                        ".odp",
                        ".otp",
                        ".pdf",
                        ".potm",
                        ".potx",
                        ".ppsm",
                        ".ppsx",
                        ".pptm"
                    ],
                    ".txt": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf"
                    ],
                    ".otp": [
                        ".odp",
                        ".pdf",
                        ".potm",
                        ".potx",
                        ".ppsm",
                        ".ppsx",
                        ".pptm",
                        ".pptx"
                    ],
                    ".xltx": [
                        ".csv",
                        ".ods",
                        ".ots",
                        ".pdf",
                        ".xlsm",
                        ".xlsx",
                        ".xltm"
                    ],
                    ".et": [
                        ".csv",
                        ".ods",
                        ".ots",
                        ".pdf",
                        ".xlsm",
                        ".xlsx",
                        ".xltm",
                        ".xltx"
                    ],
                    ".potm": [
                        ".odp",
                        ".otp",
                        ".pdf",
                        ".potx",
                        ".ppsm",
                        ".ppsx",
                        ".pptm",
                        ".pptx"
                    ],
                    ".dpt": [
                        ".odp",
                        ".otp",
                        ".pdf",
                        ".potm",
                        ".potx",
                        ".ppsm",
                        ".ppsx",
                        ".pptm",
                        ".pptx"
                    ],
                    ".pptt": [
                        ".pptx"
                    ],
                    ".doc": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".oform": [
                        ".pdf"
                    ],
                    ".sxw": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".docx": [
                        ".docm",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".pptm": [
                        ".odp",
                        ".otp",
                        ".pdf",
                        ".potm",
                        ".potx",
                        ".ppsm",
                        ".ppsx",
                        ".pptx"
                    ],
                    ".ppt": [
                        ".odp",
                        ".otp",
                        ".pdf",
                        ".potm",
                        ".potx",
                        ".ppsm",
                        ".ppsx",
                        ".pptm",
                        ".pptx"
                    ],
                    ".docm": [
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".fb2",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ],
                    ".fb2": [
                        ".docm",
                        ".docx",
                        ".dotm",
                        ".dotx",
                        ".epub",
                        ".html",
                        ".odt",
                        ".ott",
                        ".pdf",
                        ".rtf",
                        ".txt"
                    ]
                },
                "extsUploadable": [
                    ".csv",
                    ".djvu",
                    ".doc",
                    ".docm",
                    ".docx",
                    ".docxf",
                    ".dot",
                    ".dotm",
                    ".dotx",
                    ".dps",
                    ".dpt",
                    ".epub",
                    ".et",
                    ".ett",
                    ".fb2",
                    ".fodp",
                    ".fods",
                    ".fodt",
                    ".gdoc",
                    ".gsheet",
                    ".gslides",
                    ".htm",
                    ".html",
                    ".mht",
                    ".mhtml",
                    ".odp",
                    ".ods",
                    ".odt",
                    ".oform",
                    ".otp",
                    ".ots",
                    ".ott",
                    ".oxps",
                    ".pdf",
                    ".pot",
                    ".potm",
                    ".potx",
                    ".pps",
                    ".ppsm",
                    ".ppsx",
                    ".ppt",
                    ".pptm",
                    ".pptx",
                    ".rtf",
                    ".stw",
                    ".sxc",
                    ".sxi",
                    ".sxw",
                    ".txt",
                    ".wps",
                    ".wpt",
                    ".xls",
                    ".xlsb",
                    ".xlsm",
                    ".xlsx",
                    ".xlt",
                    ".xltm",
                    ".xltx",
                    ".xml",
                    ".xps",
                    ".svg",
                    ".bmp",
                    ".gif",
                    ".jpeg",
                    ".jpg",
                    ".png",
                    ".ico",
                    ".tif",
                    ".tiff",
                    ".webp",
                    ".heic"
                ],
                "extsArchive": [
                    ".zip",
                    ".rar",
                    ".ace",
                    ".arc",
                    ".arj",
                    ".bh",
                    ".cab",
                    ".enc",
                    ".gz",
                    ".ha",
                    ".jar",
                    ".lha",
                    ".lzh",
                    ".pak",
                    ".pk3",
                    ".tar",
                    ".tgz",
                    ".gz",
                    ".uu",
                    ".uue",
                    ".xxe",
                    ".z",
                    ".zoo"
                ],
                "extsVideo": [
                    ".3gp",
                    ".asf",
                    ".avi",
                    ".f4v",
                    ".fla",
                    ".flv",
                    ".m2ts",
                    ".m4v",
                    ".mkv",
                    ".mov",
                    ".mp4",
                    ".mpeg",
                    ".mpg",
                    ".mts",
                    ".ogv",
                    ".svi",
                    ".vob",
                    ".webm",
                    ".wmv"
                ],
                "extsAudio": [
                    ".aac",
                    ".ac3",
                    ".aiff",
                    ".amr",
                    ".ape",
                    ".cda",
                    ".flac",
                    ".m4a",
                    ".mid",
                    ".mka",
                    ".mp3",
                    ".mpc",
                    ".oga",
                    ".ogg",
                    ".pcm",
                    ".ra",
                    ".raw",
                    ".wav",
                    ".wma"
                ],
                "extsImage": [
                    ".bmp",
                    ".cod",
                    ".gif",
                    ".ief",
                    ".jpe",
                    ".jpeg",
                    ".jpg",
                    ".jfif",
                    ".tiff",
                    ".tif",
                    ".cmx",
                    ".ico",
                    ".pnm",
                    ".pbm",
                    ".png",
                    ".ppm",
                    ".rgb",
                    ".svg",
                    ".xbm",
                    ".xpm",
                    ".xwd",
                    ".svgt",
                    ".svgy",
                    ".gdraw",
                    ".webp",
                    ".heic"
                ],
                "extsSpreadsheet": [
                    ".xls",
                    ".xlsx",
                    ".xlsm",
                    ".xlt",
                    ".xltx",
                    ".xltm",
                    ".ods",
                    ".fods",
                    ".ots",
                    ".csv",
                    ".sxc",
                    ".et",
                    ".ett",
                    ".xlst",
                    ".xlsy",
                    ".xlsb",
                    ".gsheet"
                ],
                "extsPresentation": [
                    ".pps",
                    ".ppsx",
                    ".ppsm",
                    ".ppt",
                    ".pptx",
                    ".pptm",
                    ".pot",
                    ".potx",
                    ".potm",
                    ".odp",
                    ".fodp",
                    ".otp",
                    ".dps",
                    ".dpt",
                    ".sxi",
                    ".pptt",
                    ".ppty",
                    ".gslides"
                ],
                "extsDocument": [
                    ".doc",
                    ".docx",
                    ".docm",
                    ".dot",
                    ".dotx",
                    ".dotm",
                    ".odt",
                    ".fodt",
                    ".ott",
                    ".rtf",
                    ".txt",
                    ".html",
                    ".htm",
                    ".mht",
                    ".mhtml",
                    ".xml",
                    ".pdf",
                    ".djvu",
                    ".fb2",
                    ".epub",
                    ".xps",
                    ".oxps",
                    ".sxw",
                    ".stw",
                    ".wps",
                    ".wpt",
                    ".doct",
                    ".docy",
                    ".gdoc",
                    ".drawio",
                    ".md",
                    ".markdown"
                ],
                "internalFormats": {
                    "Document": ".docx",
                    "Spreadsheet": ".xlsx",
                    "Presentation": ".pptx",
                    "Pdf": ".pdf"
                },
                "masterFormExtension": ".docxf",
                "paramVersion": "version",
                "paramOutType": "outputtype",
                "fileDownloadUrlString": "/filehandler.ashx?action=download&fileid={0}",
                "fileWebViewerUrlString": "/doceditor?fileid={0}&action=view",
                "fileWebViewerExternalUrlString": "/doceditor?fileuri={0}&title={1}&folderurl={2}",
                "fileWebEditorUrlString": "/doceditor?fileid={0}",
                "fileWebEditorExternalUrlString": "/filehandler.ashx?action=create&fileuri={0}&title={1}",
                "fileRedirectPreviewUrlString": "/filehandler.ashx?action=redirect",
                "fileThumbnailUrlString": "/filehandler.ashx?action=thumb&fileid={0}",
                "confirmDelete": true,
                "enableThirdParty": true,
                "externalShare": true,
                "externalShareSocialMedia": true,
                "storeOriginalFiles": true,
                "keepNewFileName": false,
                "displayFileExtension": false,
                "convertNotify": false,
                "hideConfirmConvertSave": false,
                "hideConfirmConvertOpen": false,
                "defaultOrder": {
                    "is_asc": false,
                    "property": 0
                },
                "forcesave": true,
                "storeForcesave": false,
                "recentSection": true,
                "favoritesSection": true,
                "templatesSection": true,
                "downloadTarGz": false,
                "automaticallyCleanUp": {
                    "isAutoCleanUp": true,
                    "gap": 4
                },
                "canSearchByContent": false,
                "defaultSharingAccessRights": [
                    2
                ],
                "maxUploadThreadCount": 15,
                "chunkUploadSize": 10485760,
                "openEditorInSameTab": false
            },
            "count": 1,
            "links": [
                {
                    "href": "https://steedos.onlyoffice.com/api/2.0/files/settings",
                    "action": "GET"
                }
            ],
            "status": 0,
            "statusCode": 200
        }
    }



    @Get('/settings/webplugins')
    async getSettingsWebplugins(
    ) {
        return {
            "response": [
                // {
                //     "name": "draw.io",
                //     "version": "1.0.2",
                //     "description": "A tool for creating diagrams, flowcharts, intelligence maps, business layouts, entity relationships, program blocks, and more",
                //     "license": "Apache-2.0",
                //     "author": "ONLYOFFICE",
                //     "homePage": "https://github.com/ONLYOFFICE/docspace-plugins/tree/master/draw.io",
                //     "pluginName": "Drawio",
                //     "scopes": "API,Settings,ContextMenu,MainButton,File",
                //     "image": "logo.svg",
                //     "createBy": {
                //         "id": "00000000-0000-0000-0000-000000000000",
                //         "hasAvatar": false,
                //         "isAnonim": false
                //     },
                //     "createOn": "0001-01-01T00:00:00",
                //     "enabled": false,
                //     "system": true,
                //     "url": "/storage/systemwebplugins/root/draw.io/plugin.js"
                // },
                // {
                //     "name": "markdown",
                //     "version": "1.0.1",
                //     "description": "DocSpace plugin for viewing, editing and creating .md files",
                //     "license": "Apache-2.0",
                //     "author": "ONLYOFFICE",
                //     "homePage": "https://github.com/ONLYOFFICE/docspace-plugins/tree/master/markdown",
                //     "pluginName": "Markdown",
                //     "scopes": "API,Settings,ContextMenu,InfoPanel,MainButton,ProfileMenu,EventListener,File",
                //     "image": "logo.svg",
                //     "createBy": {
                //         "id": "00000000-0000-0000-0000-000000000000",
                //         "hasAvatar": false,
                //         "isAnonim": false
                //     },
                //     "createOn": "0001-01-01T00:00:00",
                //     "enabled": false,
                //     "system": true,
                //     "url": "/storage/systemwebplugins/root/markdown/plugin.js"
                // },
                // {
                //     "name": "pdf-converter",
                //     "version": "1.0.2",
                //     "description": "A plugin for converting docs, sheets, slides, and forms to PDF. The plugin is available via the Actions section in the file context menu. The converted file is saved in the same folder as the original one.",
                //     "license": "Apache-2.0",
                //     "author": "ONLYOFFICE",
                //     "homePage": "https://github.com/ONLYOFFICE/docspace-plugins/tree/master/pdf-converter",
                //     "pluginName": "PDFConverter",
                //     "scopes": "API,Settings,ContextMenu",
                //     "image": "logo.svg",
                //     "createBy": {
                //         "id": "00000000-0000-0000-0000-000000000000",
                //         "hasAvatar": false,
                //         "isAnonim": false
                //     },
                //     "createOn": "0001-01-01T00:00:00",
                //     "enabled": false,
                //     "system": true,
                //     "url": "/storage/systemwebplugins/root/pdf-converter/plugin.js"
                // },
                // {
                //     "name": "speech-to-text",
                //     "version": "1.0.2",
                //     "description": "Speech to Text Conversion is a speech recognition software that allows you to recognize and translate spoken speech into text.",
                //     "license": "Apache-2.0",
                //     "author": "ONLYOFFICE",
                //     "homePage": "https://github.com/ONLYOFFICE/docspace-plugins/tree/master/speech-to-text",
                //     "pluginName": "SpeechToText",
                //     "scopes": "API,Settings,ContextMenu",
                //     "image": "logo.svg",
                //     "createBy": {
                //         "id": "00000000-0000-0000-0000-000000000000",
                //         "hasAvatar": false,
                //         "isAnonim": false
                //     },
                //     "createOn": "0001-01-01T00:00:00",
                //     "enabled": false,
                //     "system": true,
                //     "url": "/storage/systemwebplugins/root/speech-to-text/plugin.js"
                // }
            ],
            "count": 0, //4,
            "links": [
                {
                    "href": "https://steedos.onlyoffice.com/api/2.0/settings/webplugins",
                    "action": "GET"
                }
            ],
            "status": 0,
            "statusCode": 200
        }
    }



    @Get('/files/thirdparty')
    async getFilesThirdparty() {
        return {
            "response": [],
            "count": 1,
            "links": [
                {
                    "href": "https://steedos.onlyoffice.com/api/2.0/files/thirdparty",
                    "action": "GET"
                }
            ],
            "status": 0,
            "statusCode": 200
        }
    }


    @Get('/files/thirdparty/capabilities')
    async getFilesThirdpartyCapabilities() {
        return {
            "response": [
                [
                    "Box",
                    "qbw3dx1w1tfckphlwr56mpwxq685u27u",
                    "https://service.onlyoffice.com/oauth2.aspx"
                ],
                [
                    "DropboxV2",
                    "uhe0p3wrocvywfw",
                    "https://service.onlyoffice.com/oauth2.aspx"
                ],
                [
                    "OneDrive",
                    "000000004413039F",
                    "https://service.onlyoffice.com/oauth2.aspx"
                ],
                [
                    "kDrive"
                ],
                [
                    "WebDav"
                ]
            ],
            "count": 5,
            "links": [
                {
                    "href": "https://steedos.onlyoffice.com/api/2.0/files/thirdparty/capabilities",
                    "action": "GET"
                }
            ],
            "status": 0,
            "statusCode": 200
        }
    }
}

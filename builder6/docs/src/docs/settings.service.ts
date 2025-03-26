import { Injectable } from '@nestjs/common';

@Injectable()
export class SettingsService {
  async getSettings(user) {
    return {
      response: {
        timezone: 'Asia/Shanghai',
        trustedDomains: [],
        trustedDomainsType: 0,
        culture: 'zh-CN',
        utcOffset: '08:00:00',
        utcHoursOffset: 8,
        greetingSettings: '办公文档云空间',
        ownerId: user ? user._id : '00000000-0000-0000-0000-000000000000',
        nameSchemaId: 'Common',
        enableAdmMess: false,
        docSpace: true,
        standalone: false,
        isAmi: false,
        baseDomain: 'onlyoffice.com',
        passwordHash: {
          size: 256,
          iterations: 100000,
          salt: '1e912b1b2ce20b91bb9db717e214feb1771045bd9fea31727e59f514964b944f',
        },
        // firebase: {
        //   apiKey: 'AIzaSyAmeEu0pRj_6-XrbelX_zYacwlHmwyOFl4',
        //   authDomain: 'personal-onlyoffice-com.firebaseapp.com',
        //   projectId: 'personal-onlyoffice-com',
        //   storageBucket: 'personal-onlyoffice-com.appspot.com',
        //   messagingSenderId: '970743968669',
        //   appId: '1:970743968669:web:ae67678adaaa1066e9f574',
        //   measurementId: 'G-YCDS406HEZ',
        //   databaseURL:
        //     'https://personal-onlyoffice-com-default-rtdb.firebaseio.com',
        // },
        version: '3.0.4.4498',
        recaptchaType: 0,
        debugInfo: false,
        socketUrl: user ? '/socket.io' : undefined,
        tenantStatus: 0,
        tenantAlias: 'zhuangjianguo01',
        helpLink: 'https://helpcenter.onlyoffice.com',
        forumLink: 'https://forum.onlyoffice.com',
        displayAbout: true,
        apiDocsLink: 'https://api.onlyoffice.com',
        domainValidator: {
          regex: '^[a-z0-9]([a-z0-9-]){1,61}[a-z0-9]$',
          minLength: 3,
          maxLength: 63,
        },
        // zendeskKey: 'd9e277ac-20cf-47a7-8010-57cd31a8d619',
        // tagManagerId: 'GTM-KK2TDMJ7',
        bookTrainingEmail: 'training@onlyoffice.com',
        documentationEmail: 'documentation@onlyoffice.com',
        legalTerms:
          'https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0',
        licenseUrl:
          'https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=8373021&doc=aTFMQ3M0M2g3aWVVYkp5TERZbFFEbEk5NktBQUdBSVZVeTBqbzQ5ak9JYz0_IntcImVudHJ5XCI6XCI4MzczMDIxXCIsXCJsaW5rXCI6XCIxNTVkMTc0ZS1kY2UyLTQyZjgtOTQzNi03ZTU2OGY0ZmMxNWVcIn0i0',
        cookieSettingsEnabled: false,
        limitedAccessSpace: false,
        userNameRegex: "^[\\p{L}\\p{M}' \\-]+$",
        invitationLimit: 2147483647,
        plugins: {
          enabled: true,
          upload: false,
          delete: false,
        },
        deepLink: {
          androidPackageName: 'com.onlyoffice.documents',
          url: 'oodocuments://openfile',
          iosPackageId: '944896972',
        },
        // formGallery: {
        //   path: '/api/oforms/',
        //   domain: 'https://cmsoforms.onlyoffice.com',
        //   ext: '.pdf',
        //   uploadPath: '/api/upload',
        //   uploadDomain: 'https://oforms.onlyoffice.com',
        //   uploadExt: '.pdf',
        //   uploadDashboard: '/dashboard/api',
        // },
        maxImageUploadSize: 5242880,
      },
      count: 1,
      // links: [
      //   {
      //     href: 'https://zhuangjianguo01.onlyoffice.com/api/2.0/settings?withPassword=true',
      //     action: 'GET',
      //   },
      // ],
      status: 0,
      statusCode: 200,
    };
  }

  async getSettingsColorTheme() {
    return {
      response: {
        themes: [
          {
            id: 1,
            name: 'blue',
            main: {
              accent: '#4781D1',
              buttons: '#5299E0',
            },
            text: {
              accent: '#FFFFFF',
              buttons: '#FFFFFF',
            },
          },
          {
            id: 2,
            name: 'orange',
            main: {
              accent: '#F97A0B',
              buttons: '#FF9933',
            },
            text: {
              accent: '#FFFFFF',
              buttons: '#FFFFFF',
            },
          },
          {
            id: 3,
            name: 'green',
            main: {
              accent: '#2DB482',
              buttons: '#22C386',
            },
            text: {
              accent: '#FFFFFF',
              buttons: '#FFFFFF',
            },
          },
          {
            id: 4,
            name: 'red',
            main: {
              accent: '#F2675A',
              buttons: '#F27564',
            },
            text: {
              accent: '#FFFFFF',
              buttons: '#FFFFFF',
            },
          },
          {
            id: 5,
            name: 'purple',
            main: {
              accent: '#6D4EC2',
              buttons: '#8570BD',
            },
            text: {
              accent: '#FFFFFF',
              buttons: '#FFFFFF',
            },
          },
          {
            id: 6,
            name: 'light-blue',
            main: {
              accent: '#11A4D4',
              buttons: '#13B7EC',
            },
            text: {
              accent: '#FFFFFF',
              buttons: '#FFFFFF',
            },
          },
        ],
        selected: 1,
        limit: 9,
      },
      count: 1,
      // links: [
      //   {
      //     href: 'https://steedos.onlyoffice.com/api/2.0/settings/colortheme',
      //     action: 'GET',
      //   },
      // ],
      status: 0,
      statusCode: 200,
    };
  }

  async getCapabilities() {
    return {
      response: {
        ldapEnabled: false,
        providers: ['google', 'zoom', 'linkedin', 'twitter', 'appleid'],
        ssoLabel: '',
        oauthEnabled: true,
        ssoUrl: '',
        identityServerEnabled: true,
      },
      count: 1,
      links: [
        {
          href: 'https://steedos.onlyoffice.com/api/2.0/capabilities',
          action: 'GET',
        },
      ],
      status: 0,
      statusCode: 200,
    };
  }

  async getSettingsVersionBuild() {
    return {
      response: {
        docSpace: '3.0.4.4498',
        communityServer: '12.0.0',
        documentServer: '8.3.1.25',
      },
      count: 1,
      links: [
        {
          href: 'https://steedos.onlyoffice.com/api/2.0/settings/version/build',
          action: 'GET',
        },
      ],
      status: 0,
      statusCode: 200,
    };
  }
}

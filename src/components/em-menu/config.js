const menus = [
    {
        name: '控制台',
        icon: 'ion-ios-speedometer',
        key: '00',
        subs: [
            {
                name: '控制台',
                key: '0001',
                link: '/'
            },
            {
                name: '工作台',
                key: '0002',
                link: '/workspace'
            }
        ]
    },
    {
        name: '列表',
        icon: 'ion-social-buffer',
        key: '01',
        subs: [
            {
                name: '表格列表',
                key: '0101',
                link: '/table'
            },
            {
                name: '标签页列表',
                key: '0102',
                link: 'tab-table'
            }
        ]
    },
    {
        name: '表单',
        key: '02',
        icon: 'ion-compose',
        subs: [
            {
                name: '普通表单',
                key: '0201',
                link: '/stand-form'
            },
            {
                name: '富文本编辑',
                key: '0202',
                link: '/rich-edit'
            }
        ]
    },
    {
        name: '地图',
        key: '03',
        icon: 'ion-map',
        subs: [
            {
                name: '高德地图',
                key: '0301',
                link: '/map'
            }
        ]
    },
    {
        name: '详情页',
        key: '04',
        icon: 'ion-ios-paper-outline',
        subs: [
            {
                name: '普通详情页',
                key: '0401',
                link: '/profile'
            }
        ]
    },
    {
        name: '配置',
        key: '05',
        icon: 'ion-ios-cog-outline',
        subs: [
            {
                name: '常见配置',
                key: '0501',
                link: '/setting'
            }
        ]
    },
    {
        name: '页面',
        key: '06',
        icon: 'ion-ios-photos-outline',
        subs: [
            {
                name: '登录',
                key: '0601',
                link: '/login'
            },
            {
                name: '403',
                key: '0602',
                link: '/403'
            }
        ]
    },
    {
        name: '其它控件',
        key: '07',
        icon: 'ion-ios-settings',
        subs: [
            {
                name: 'Clipboard',
                key: '0701',
                link: '/clipboard'
            },
            {
                name: 'Upload',
                key: '0702',
                link: '/upload'
            },
            {
                name: 'Excel',
                key: '0703',
                link: '/excel'
            }
        ]
    }
]

export default menus
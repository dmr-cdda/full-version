// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => {
  return [
    {
      icon: 'tabler:smart-home',
      title: 'Dashboards',
      children: [
        {
          icon: 'tabler:chart-pie-2',
          title: 'Analytics',
          path: ''
        },
        {
          icon: 'tabler:device-analytics',
          title: 'CRM',
          path: ''
        },
        {
          icon: 'tabler:shopping-cart',
          title: 'eCommerce',
          path: ''
        }
      ]
    },
    {
      icon: 'tabler:layout-grid-add',
      title: 'Apps',
      children: [
        {
          title: 'Email',
          icon: 'tabler:mail',
          path: ''
        },
        {
          title: 'Chat',
          icon: 'tabler:messages',
          path: ''
        },
        {
          title: 'Calendar',
          icon: 'tabler:calendar',
          path: ''
        },
        {
          title: 'Invoice',
          icon: 'tabler:file-dollar',
          children: [
            {
              title: 'List',
              path: ''
            },
            {
              title: 'Preview',
              path: ''
            },
            {
              title: 'Edit',
              path: ''
            },
            {
              title: 'Add',
              path: ''
            }
          ]
        },
        {
          title: 'User',
          icon: 'tabler:user',
          children: [
            {
              title: 'List',
              path: ''
            },
            {
              title: 'View',
              children: [
                {
                  title: 'Account',
                  path: ''
                },
                {
                  title: 'Security',
                  path: ''
                },
                {
                  title: 'Billing & Plans',
                  path: ''
                },
                {
                  title: 'Notifications',
                  path: ''
                },
                {
                  title: 'Connection',
                  path: ''
                }
              ]
            }
          ]
        },
        {
          title: 'Roles & Permissions',
          icon: 'tabler:settings',
          children: [
            {
              title: 'Roles',
              path: ''
            },
            {
              title: 'Permissions',
              path: ''
            }
          ]
        }
      ]
    },
    {
      icon: 'tabler:color-swatch',
      title: 'UI',
      children: [
        {
          title: 'Typography',
          icon: 'tabler:typography',
          path: ''
        },
        {
          title: 'Icons',
          path: '',
          icon: 'tabler:brand-tabler'
        },
        {
          
          title: 'Cards',
          icon: 'tabler:id',
          children: [
            {
              title: 'Basic',
              path: ''
            },
            {
              title: 'Advanced',
              path: ''
            },
            {
              title: 'Statistics',
              path: ''
            },
            {
              title: 'Widgets',
              path: ''
            },
            {
              title: 'Actions',
              path: ''
            }
          ]
        },
        {
          title: 'Components',
          icon: 'tabler:archive',
          children: [
            {
              title: 'Accordion',
              path: ''
            },
            {
              title: 'Alerts',
              path: ''
            },
            {
              title: 'Avatars',
              path: ''
            },
            {
              title: 'Badges',
              path: ''
            },
            {
              title: 'Buttons',
              path: ''
            },
            {
              title: 'Button Group',
              path: ''
            },
            {
              title: 'Chips',
              path: ''
            },
            {
              title: 'Dialogs',
              path: ''
            },
            {
              title: 'List',
              path: ''
            },
            {
              title: 'Menu',
              path: ''
            },
            {
              title: 'Pagination',
              path: ''
            },
            {
              title: 'Progress',
              path: ''
            },
            {
              title: 'Ratings',
              path: ''
            },
            {
              title: 'Snackbar',
              path: ''
            },
            {
              title: 'Swiper',
              path: ''
            },
            {
              title: 'Tabs',
              path: ''
            },
            {
              title: 'Timeline',
              path: ''
            },
            {
              title: 'Toasts',
              path: ''
            },
            {
              title: 'Tree View',
              path: ''
            },
            {
              title: 'More',
              path: ''
            },
          ]
        }
      ]
    },
    {
      icon: 'tabler:file',
      title: 'Pages',
      children: [
        {
          title: 'User Profile',
          icon: 'tabler:user-circle',
          children: [
            {
              title: 'Profile',
              path: ''
            },
            {
              title: 'Teams',
              path: ''
            },
            {
              title: 'Projects',
              path: ''
            },
            {
              title: 'Connections',
              path: ''
            }
          ]
        },
        {
          icon: 'tabler:settings',
          title: 'Account Settings',
          children: [
            {
              title: 'Account',
              path: ''
            },
            {
              title: 'Security',
              path: ''
            },
            {
              title: 'Billing',
              path: ''
            },
            {
              title: 'Notifications',
              path: ''
            },

            {
              title: 'Connections',
              path: ''
            }
          ]
        },
        {
          title: 'FAQ',
          path: '',
          icon: 'tabler:help'
        },
        {
          title: 'Help Center',
          icon: 'tabler:help',
          path: ''
        },
        {
          title: 'Pricing',
          icon: 'tabler:currency-dollar',
          path: ''
        },
        {
          title: 'Miscellaneous',
          icon: 'tabler:3d-cube-sphere',
          children: [
            {
              openInNewTab: true,
              title: 'Coming Soon',
              path: ''
            },
            {
              openInNewTab: true,
              title: 'Under Maintenance',
              path: ''
            },
            {
              openInNewTab: true,
              title: 'Page Not Found - 404',
              path: ''
            },
            {
              openInNewTab: true,
              title: 'Not Authorized - 401',
              path: ''
            },
            {
              openInNewTab: true,
              title: 'Server Error - 500',
              path: ''
            }
          ]
        },
        {
          title: 'Auth Pages',
          icon: 'tabler:lock',
          children: [
            {
              title: 'Login',
              children: [
                {
                  openInNewTab: true,
                  title: 'Login v1',
                  path: ''
                },
                {
                  openInNewTab: true,
                  title: 'Login v2',
                  path: ''
                },
                {
                  openInNewTab: true,
                  title: 'Login With AppBar',
                  path: ''
                }
              ]
            },
            {
              title: 'Register',
              children: [
                {
                  openInNewTab: true,
                  title: 'Register v1',
                  path: ''
                },
                {
                  openInNewTab: true,
                  title: 'Register v2',
                  path: ''
                },
                {
                  openInNewTab: true,
                  title: 'Register Multi-Steps',
                  path: ''
                }
              ]
            },
            {
              title: 'Verify Email',
              children: [
                {
                  openInNewTab: true,
                  title: 'Verify Email v1',
                  path: ''
                },
                {
                  openInNewTab: true,
                  title: 'Verify Email v2',
                  path: ''
                }
              ]
            },
            {
              title: 'Forgot Password',
              children: [
                {
                  openInNewTab: true,
                  title: 'Forgot Password v1',
                  path: ''
                },
                {
                  openInNewTab: true,
                  title: 'Forgot Password v2',
                  path: ''
                }
              ]
            },
            {
              title: 'Reset Password',
              children: [
                {
                  openInNewTab: true,
                  title: 'Reset Password v1',
                  path: ''
                },
                {
                  openInNewTab: true,
                  title: 'Reset Password v2',
                  path: ''
                }
              ]
            },
            {
              title: 'Two Steps',
              children: [
                {
                  openInNewTab: true,
                  title: 'Two Steps v1',
                  path: ''
                },
                {
                  openInNewTab: true,
                  title: 'Two Steps v2',
                  path: ''
                }
              ]
            }
          ]
        },
        {
          title: 'Wizard Examples',
          icon: 'tabler:forms',
          children: [
            {
              title: 'Checkout',
              path: ''
            },
            {
              title: 'Property Listing',
              path: ''
            },
            {
              title: 'Create Deal',
              path: ''
            }
          ]
        },
        {
          icon: 'tabler:square',
          title: 'Dialog Examples',
          path: ''
        }
      ]
    },
    {
      title: 'Forms & Tables',
      icon: 'tabler:checkbox',
      children: [
        {
          title: 'Form Elements',
          icon: 'tabler:toggle-left',
          children: [
            {
              title: 'Text Field',
              path: ''
            },
            {
              title: 'Select',
              path: ''
            },
            {
              title: 'Checkbox',
              path: ''
            },
            {
              title: 'Radio',
              path: ''
            },
            {
              title: 'Custom Inputs',
              path: ''
            },
            {
              title: 'Textarea',
              path: ''
            },
            {
              title: 'Autocomplete',
              path: ''
            },
            {
              title: 'Date Pickers',
              path: ''
            },
            {
              title: 'Switch',
              path: ''
            },
            {
              title: 'File Uploader',
              path: ''
            },
            {
              title: 'Editor',
              path: ''
            },
            {
              title: 'Slider',
              path: ''
            },
            {
              title: 'Input Mask',
              path: ''
            },
          ]
        },
        {
          icon: 'tabler:layout-navbar',
          title: 'Form Layouts',
          path: ''
        },
        {
          title: 'Form Validation',
          path: '',
          icon: 'tabler:checkbox'
        },
        {
          title: 'Form Wizard',
          path: '',
          icon: 'tabler:text-wrap-disabled'
        },
        {
          title: 'Table',
          icon: 'tabler:table',
          path: ''
        },
        {
          title: 'Mui DataGrid',
          icon: 'tabler:layout-grid',
          path: ''
        }
      ]
    },
    {
      title: 'Charts',
      icon: 'tabler:chart-pie',
      children: [
        {
          title: 'Apex',
          icon: 'tabler:chart-sankey',
          path: ''
        },
        {
          title: 'Recharts',
          icon: 'tabler:chart-ppf',
          path: ''
        },
        {
          title: 'ChartJS',
          path: '',
          icon: 'tabler:chart-line'
        }
      ]
    },
    {
      title: 'Others',
      icon: 'tabler:dots',
      children: [
        {
          path: '',
          action: 'read',
          subject: 'acl-page',
          icon: 'tabler:shield',
          title: 'Access Control'
        },
        {
          title: 'Menu Levels',
          icon: 'tabler:menu-2',
          children: [
            {
              title: 'Menu Level 2.1'
            },
            {
              title: 'Menu Level 2.2',
              children: [
                {
                  title: 'Menu Level 3.1'
                },
                {
                  title: 'Menu Level 3.2'
                }
              ]
            }
          ]
        },
        {
          title: 'Disabled Menu',
          icon: 'tabler:eye-off',
          disabled: true
        },
        {
          title: 'Raise Support',
          icon: 'tabler:lifebuoy',
          externalLink: true,
          openInNewTab: true,
          path: ''
        },
        {
          title: 'Documentation',
          icon: 'tabler:file-text',
          externalLink: true,
          openInNewTab: true,
          path: ''
        }
      ]
    }
  ]
}

export default navigation

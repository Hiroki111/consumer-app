export const restaurantList = {
  meta: {
    currency: {
      type: 'euro',
      denominator: 100,
    },
    time: {
      type: 'minutes',
      denominator: 1,
    },
  },
  aggregates: {
    cuisines: {
      japanese: 'japanese',
      pizza: 'pizza',
      italian: 'italian',
      sushi: 'sushi',
      burger: 'burger',
      french: 'french',
    },
    total: {
      restaurants: 20,
    },
    shipping: {
      pickup: 'pickup',
      delivery: 'delivery',
    },
  },
  data: [
    {
      id: 1,
      name: 'Carroll, Huels and Armstrong',
      slug: 'carroll, huels and armstrong',
      restaurantLogo:
        'https://images.unsplash.com/photo-1558722141-76ef6ca013be?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=72&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=72',
      cuisines: ['italian', 'japanese'],
      shipping: {
        type: ['pickup'],
        estimatedTime: 24,
      },
      info: {
        open: false,
        minimumOrderValue: 329,
        ratings: {
          total: 326,
          score: {
            median: 4.9,
            average: 2.3,
          },
        },
      },
    },
    {
      id: 2,
      name: 'Howe Inc',
      slug: 'howe inc',
      restaurantLogo:
        'https://images.unsplash.com/photo-1504283846145-580314790011?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=72&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=72',
      cuisines: ['sushi', 'burger'],
      shipping: {
        type: ['pickup'],
        estimatedTime: 81,
      },
      info: {
        open: true,
        minimumOrderValue: 1387,
        ratings: {
          total: 8529,
          score: {
            median: 2.5,
            average: 1.2,
          },
        },
      },
    },
    {
      id: 3,
      name: 'Mraz, Johns and Emard',
      slug: 'mraz, johns and emard',
      restaurantLogo:
        'https://images.unsplash.com/photo-1504693390394-c24671c3e8bb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=72&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=72',
      cuisines: ['burger', 'italian'],
      shipping: {
        type: ['pickup'],
        estimatedTime: 27,
      },
      info: {
        open: false,
        minimumOrderValue: 885,
        ratings: {
          total: 3267,
          score: {
            median: 1.5,
            average: 4.7,
          },
        },
      },
    },
    {
      id: 4,
      name: 'Mohr, Kunze and Crona',
      slug: 'mohr, kunze and crona',
      restaurantLogo:
        'https://images.unsplash.com/photo-1561069806-45dadc9aabc7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=72&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=72',
      cuisines: ['french', 'japanese'],
      shipping: {
        type: ['delivery'],
        estimatedTime: 80,
      },
      info: {
        open: true,
        minimumOrderValue: 803,
        ratings: {
          total: 6427,
          score: {
            median: 2.8,
            average: 3.2,
          },
        },
      },
    },
    {
      id: 5,
      name: 'Barrows and Sons',
      slug: 'barrows and sons',
      restaurantLogo:
        'https://images.unsplash.com/photo-1551443873-3631c0742c53?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=72&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=72',
      cuisines: ['sushi', 'japanese'],
      shipping: {
        type: ['delivery'],
        estimatedTime: 49,
      },
      info: {
        open: true,
        minimumOrderValue: 659,
        ratings: {
          total: 4017,
          score: {
            median: 0.9,
            average: 4.8,
          },
        },
      },
    },
    {
      id: 6,
      name: 'Bayer, Dibbert and Jacobs',
      slug: 'bayer, dibbert and jacobs',
      restaurantLogo:
        'https://images.unsplash.com/photo-1457666134378-6b77915bd5f2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=72&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=72',
      cuisines: ['sushi', 'italian'],
      shipping: {
        type: ['delivery'],
        estimatedTime: 87,
      },
      info: {
        open: true,
        minimumOrderValue: 1105,
        ratings: {
          total: 7486,
          score: {
            median: 1.9,
            average: 4.6,
          },
        },
      },
    },
    {
      id: 7,
      name: 'Rutherford-Prohaska',
      slug: 'rutherford-prohaska',
      restaurantLogo:
        'https://images.unsplash.com/photo-1490126125528-a0c3b2998dcd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=72&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=72',
      cuisines: ['burger', 'sushi'],
      shipping: {
        type: ['delivery'],
        estimatedTime: 9,
      },
      info: {
        open: true,
        minimumOrderValue: 1201,
        ratings: {
          total: 4485,
          score: {
            median: 3.5,
            average: 2.7,
          },
        },
      },
    },
    {
      id: 8,
      name: 'Sipes-Jacobs',
      slug: 'sipes-jacobs',
      restaurantLogo:
        'https://images.unsplash.com/photo-1547517276-bd8bf97c3289?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=72&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=72',
      cuisines: ['sushi', 'italian'],
      shipping: {
        type: ['delivery'],
        estimatedTime: 64,
      },
      info: {
        open: true,
        minimumOrderValue: 1415,
        ratings: {
          total: 8289,
          score: {
            median: 3.2,
            average: 0.2,
          },
        },
      },
    },
    {
      id: 9,
      name: 'Hartmann, Reinger and Oberbrunner',
      slug: 'hartmann, reinger and oberbrunner',
      restaurantLogo:
        'https://images.unsplash.com/photo-1517499414974-3b42addf2d86?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=72&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=72',
      cuisines: ['french', 'burger'],
      shipping: {
        type: ['pickup'],
        estimatedTime: 60,
      },
      info: {
        open: true,
        minimumOrderValue: 1203,
        ratings: {
          total: 4598,
          score: {
            median: 2.3,
            average: 2.3,
          },
        },
      },
    },
    {
      id: 10,
      name: 'Wiegand-Ebert',
      slug: 'wiegand-ebert',
      restaurantLogo:
        'https://images.unsplash.com/photo-1557956543-3187d3204fcf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=72&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=72',
      cuisines: ['sushi', 'pizza'],
      shipping: {
        type: ['pickup'],
        estimatedTime: 88,
      },
      info: {
        open: true,
        minimumOrderValue: 91,
        ratings: {
          total: 3922,
          score: {
            median: 2.7,
            average: 4.0,
          },
        },
      },
    },
    {
      id: 11,
      name: 'Brekke, Miller and Bosco',
      slug: 'brekke, miller and bosco',
      restaurantLogo:
        'https://images.unsplash.com/photo-1548483904-e990e398abf3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=72&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=72',
      cuisines: ['italian', 'pizza'],
      shipping: {
        type: ['pickup'],
        estimatedTime: 50,
      },
      info: {
        open: false,
        minimumOrderValue: 1336,
        ratings: {
          total: 4973,
          score: {
            median: 3.7,
            average: 1.5,
          },
        },
      },
    },
    {
      id: 12,
      name: 'Kunze and Sons',
      slug: 'kunze and sons',
      restaurantLogo:
        'https://images.unsplash.com/photo-1555992336-03a23c7b20ee?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=72&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=72',
      cuisines: ['japanese', 'sushi'],
      shipping: {
        type: ['pickup'],
        estimatedTime: 41,
      },
      info: {
        open: true,
        minimumOrderValue: 62,
        ratings: {
          total: 7459,
          score: {
            median: 1.4,
            average: 4.7,
          },
        },
      },
    },
    {
      id: 13,
      name: 'Stiedemann-Collier',
      slug: 'stiedemann-collier',
      restaurantLogo:
        'https://images.unsplash.com/photo-1559069919-c3ccb589630d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=72&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=72',
      cuisines: ['french', 'pizza'],
      shipping: {
        type: ['delivery'],
        estimatedTime: 37,
      },
      info: {
        open: true,
        minimumOrderValue: 743,
        ratings: {
          total: 1077,
          score: {
            median: 0.8,
            average: 2.4,
          },
        },
      },
    },
    {
      id: 14,
      name: 'Yundt, Ryan and Cronin',
      slug: 'yundt, ryan and cronin',
      restaurantLogo:
        'https://images.unsplash.com/photo-1572855837743-c422c1e1a4c2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=72&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=72',
      cuisines: ['sushi', 'japanese'],
      shipping: {
        type: ['delivery'],
        estimatedTime: 41,
      },
      info: {
        open: false,
        minimumOrderValue: 1392,
        ratings: {
          total: 7944,
          score: {
            median: 1.7,
            average: 0.2,
          },
        },
      },
    },
    {
      id: 15,
      name: 'Krajcik Group',
      slug: 'krajcik group',
      restaurantLogo:
        'https://images.unsplash.com/photo-1484251065541-c9770829890f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=72&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=72',
      cuisines: ['italian', 'sushi'],
      shipping: {
        type: ['pickup'],
        estimatedTime: 32,
      },
      info: {
        open: false,
        minimumOrderValue: 1152,
        ratings: {
          total: 6439,
          score: {
            median: 1.3,
            average: 4.6,
          },
        },
      },
    },
    {
      id: 16,
      name: 'Christiansen-Graham',
      slug: 'christiansen-graham',
      restaurantLogo:
        'https://images.unsplash.com/photo-1540966785661-e15d11893d8f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=72&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=72',
      cuisines: ['burger', 'japanese'],
      shipping: {
        type: ['pickup'],
        estimatedTime: 5,
      },
      info: {
        open: false,
        minimumOrderValue: 510,
        ratings: {
          total: 4397,
          score: {
            median: 0.2,
            average: 0.2,
          },
        },
      },
    },
    {
      id: 17,
      name: 'Klocko LLC',
      slug: 'klocko llc',
      restaurantLogo:
        'https://images.unsplash.com/photo-1565700016779-9072a442168e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=72&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=72',
      cuisines: ['french', 'burger'],
      shipping: {
        type: ['delivery'],
        estimatedTime: 29,
      },
      info: {
        open: false,
        minimumOrderValue: 982,
        ratings: {
          total: 3190,
          score: {
            median: 3.7,
            average: 1.3,
          },
        },
      },
    },
    {
      id: 18,
      name: 'Hudson, Boyer and Ratke',
      slug: 'hudson, boyer and ratke',
      restaurantLogo:
        'https://images.unsplash.com/photo-1543882570-022581e299e7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=72&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=72',
      cuisines: ['burger', 'japanese'],
      shipping: {
        type: ['pickup'],
        estimatedTime: 72,
      },
      info: {
        open: true,
        minimumOrderValue: 999,
        ratings: {
          total: 4174,
          score: {
            median: 0.3,
            average: 2.5,
          },
        },
      },
    },
    {
      id: 19,
      name: 'Block Group',
      slug: 'block group',
      restaurantLogo:
        'https://images.unsplash.com/photo-1570179776077-a11e86c162e3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=72&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=72',
      cuisines: ['pizza', 'japanese'],
      shipping: {
        type: ['pickup'],
        estimatedTime: 66,
      },
      info: {
        open: true,
        minimumOrderValue: 383,
        ratings: {
          total: 1635,
          score: {
            median: 0.8,
            average: 1.9,
          },
        },
      },
    },
    {
      id: 20,
      name: 'Walker-Gerhold',
      slug: 'walker-gerhold',
      restaurantLogo:
        'https://images.unsplash.com/photo-1447943549184-13f89172bcd4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=72&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=72',
      cuisines: ['japanese', 'burger'],
      shipping: {
        type: ['pickup'],
        estimatedTime: 83,
      },
      info: {
        open: true,
        minimumOrderValue: 985,
        ratings: {
          total: 2679,
          score: {
            median: 3.6,
            average: 0.1,
          },
        },
      },
    },
  ],
};

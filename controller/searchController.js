const ArticleService = require(`${process.env.PWD}/services/articleService.js`);


const mock = false;

function getProducts(req, res, next) {
    if (mock) {
        console.log('-- Mocked response --');
        return res.send({
            "site_id": "MLA",
            "query": "termo",
            "paging": {
                "total": 9987,
                "offset": 0,
                "limit": 50,
                "primary_results": 1000
            },
            "results": [
                {
                    "id": "MLA619397115",
                    "site_id": "MLA",
                    "title": "Termo Stanley Clasico 1lt Pico Cebador",
                    "seller": {
                        "id": 143749452,
                        "power_seller_status": "platinum",
                        "car_dealer": false,
                        "real_estate_agency": false,
                        "tags": [

                        ]
                    },
                    "price": 2790,
                    "currency_id": "ARS",
                    "available_quantity": 1,
                    "sold_quantity": 500,
                    "buying_mode": "buy_it_now",
                    "listing_type_id": "gold_special",
                    "stop_time": "2038-05-31T02:13:29.000Z",
                    "condition": "new",
                    "permalink": "https://articulo.mercadolibre.com.ar/MLA-619397115-termo-stanley-clasico-1lt-pico-cebador-_JM",
                    "thumbnail": "http://mla-s2-p.mlstatic.com/857933-MLA27426701808_052018-I.jpg",
                    "accepts_mercadopago": true,
                    "installments": {
                        "quantity": 12,
                        "amount": 356.28,
                        "rate": 53.24,
                        "currency_id": "ARS"
                    },
                    "address": {
                        "state_id": "AR-B",
                        "state_name": "Buenos Aires",
                        "city_id": "",
                        "city_name": "Munro - Pcia de Bs As"
                    },
                    "shipping": {
                        "free_shipping": true,
                        "mode": "me2",
                        "tags": [

                        ],
                        "logistic_type": "cross_docking"
                    },
                    "seller_address": {
                        "id": "",
                        "comment": "",
                        "address_line": "",
                        "zip_code": "",
                        "country": {
                            "id": "AR",
                            "name": "Argentina"
                        },
                        "state": {
                            "id": "AR-B",
                            "name": "Buenos Aires"
                        },
                        "city": {
                            "id": "",
                            "name": "Munro - Pcia de Bs As"
                        },
                        "latitude": "",
                        "longitude": ""
                    },
                    "attributes": [
                        {
                            "id": "BRAND",
                            "name": "Marca",
                            "value_id": "177584",
                            "value_name": "Stanley",
                            "value_struct": null,
                            "attribute_group_id": "OTHERS",
                            "attribute_group_name": "Otros",
                            "source": 1
                        },
                        {
                            "id": "ITEM_CONDITION",
                            "name": "Condición del ítem",
                            "value_id": "2230284",
                            "value_name": "Nuevo",
                            "value_struct": null,
                            "attribute_group_id": "OTHERS",
                            "attribute_group_name": "Otros",
                            "source": 1
                        },
                        {
                            "id": "MODEL",
                            "name": "Modelo",
                            "value_id": null,
                            "value_name": "Classic 1L",
                            "value_struct": null,
                            "attribute_group_id": "OTHERS",
                            "attribute_group_name": "Otros",
                            "source": 1577
                        }
                    ],
                    "original_price": null,
                    "category_id": "MLA392865",
                    "official_store_id": 410,
                    "catalog_product_id": null,
                    "reviews": {
                        "rating_average": 4.7,
                        "total": 172
                    },
                    "tags": [
                        "brand_verified",
                        "good_quality_thumbnail",
                        "good_quality_picture",
                        "immediate_payment",
                        "cart_eligible"
                    ]
                },
                {
                    "id": "MLA619397903",
                    "site_id": "MLA",
                    "title": "Termo Stanley Adventure 1lts Pico Cebador Original Garantía",
                    "seller": {
                        "id": 143749452,
                        "power_seller_status": "platinum",
                        "car_dealer": false,
                        "real_estate_agency": false,
                        "tags": [

                        ]
                    },
                    "price": 2560,
                    "currency_id": "ARS",
                    "available_quantity": 250,
                    "sold_quantity": 500,
                    "buying_mode": "buy_it_now",
                    "listing_type_id": "gold_special",
                    "stop_time": "2038-06-11T11:58:27.000Z",
                    "condition": "new",
                    "permalink": "https://articulo.mercadolibre.com.ar/MLA-619397903-termo-stanley-adventure-1lts-pico-cebador-original-garantia-_JM",
                    "thumbnail": "http://mla-s2-p.mlstatic.com/947072-MLA27488254765_062018-I.jpg",
                    "accepts_mercadopago": true,
                    "installments": {
                        "quantity": 12,
                        "amount": 326.91,
                        "rate": 53.24,
                        "currency_id": "ARS"
                    },
                    "address": {
                        "state_id": "AR-B",
                        "state_name": "Buenos Aires",
                        "city_id": "",
                        "city_name": "Munro - Pcia de Bs As"
                    },
                    "shipping": {
                        "free_shipping": true,
                        "mode": "me2",
                        "tags": [

                        ],
                        "logistic_type": "cross_docking"
                    },
                    "seller_address": {
                        "id": "",
                        "comment": "",
                        "address_line": "",
                        "zip_code": "",
                        "country": {
                            "id": "AR",
                            "name": "Argentina"
                        },
                        "state": {
                            "id": "AR-B",
                            "name": "Buenos Aires"
                        },
                        "city": {
                            "id": "",
                            "name": "Munro - Pcia de Bs As"
                        },
                        "latitude": "",
                        "longitude": ""
                    },
                    "attributes": [
                        {
                            "source": 1,
                            "id": "BRAND",
                            "name": "Marca",
                            "value_id": "177584",
                            "value_name": "Stanley",
                            "value_struct": null,
                            "attribute_group_id": "OTHERS",
                            "attribute_group_name": "Otros"
                        },
                        {
                            "value_struct": null,
                            "attribute_group_id": "OTHERS",
                            "attribute_group_name": "Otros",
                            "source": 1,
                            "id": "ITEM_CONDITION",
                            "name": "Condición del ítem",
                            "value_id": "2230284",
                            "value_name": "Nuevo"
                        },
                        {
                            "source": 1577,
                            "id": "MODEL",
                            "name": "Modelo",
                            "value_id": null,
                            "value_name": "Adventure 1 Litro",
                            "value_struct": null,
                            "attribute_group_id": "OTHERS",
                            "attribute_group_name": "Otros"
                        }
                    ],
                    "original_price": null,
                    "category_id": "MLA392865",
                    "official_store_id": 410,
                    "catalog_product_id": null,
                    "reviews": {
                        "rating_average": 4.5,
                        "total": 90
                    },
                    "tags": [
                        "brand_verified",
                        "good_quality_thumbnail",
                        "good_quality_picture",
                        "immediate_payment",
                        "cart_eligible"
                    ]
                },
                {
                    "id": "MLA710625553",
                    "site_id": "MLA",
                    "title": "Termo Bala De Acero Inox 1 Lt Pico Matero",
                    "seller": {
                        "id": 186870837,
                        "power_seller_status": "platinum",
                        "car_dealer": false,
                        "real_estate_agency": false,
                        "tags": [

                        ]
                    },
                    "price": 380,
                    "currency_id": "ARS",
                    "available_quantity": 250,
                    "sold_quantity": 250,
                    "buying_mode": "buy_it_now",
                    "listing_type_id": "gold_special",
                    "stop_time": "2038-02-25T04:00:00.000Z",
                    "condition": "new",
                    "permalink": "https://articulo.mercadolibre.com.ar/MLA-710625553-termo-bala-de-acero-inox-1-lt-pico-matero-_JM",
                    "thumbnail": "http://mla-s2-p.mlstatic.com/712961-MLA26941558379_032018-I.jpg",
                    "accepts_mercadopago": true,
                    "installments": {
                        "quantity": 12,
                        "amount": 48.53,
                        "rate": 53.24,
                        "currency_id": "ARS"
                    },
                    "address": {
                        "state_id": "AR-B",
                        "state_name": "Buenos Aires",
                        "city_id": "TUxBQ1FVSWI1MzY",
                        "city_name": "Quilmes"
                    },
                    "shipping": {
                        "free_shipping": false,
                        "mode": "me2",
                        "tags": [

                        ],
                        "logistic_type": "cross_docking"
                    },
                    "seller_address": {
                        "id": "",
                        "comment": "",
                        "address_line": "",
                        "zip_code": "",
                        "country": {
                            "id": "AR",
                            "name": "Argentina"
                        },
                        "state": {
                            "id": "AR-B",
                            "name": "Buenos Aires"
                        },
                        "city": {
                            "id": "TUxBQ1FVSWI1MzY",
                            "name": "Quilmes"
                        },
                        "latitude": "",
                        "longitude": ""
                    },
                    "attributes": [
                        {
                            "name": "Marca",
                            "value_id": null,
                            "value_name": "vacum flash",
                            "value_struct": null,
                            "attribute_group_id": "OTHERS",
                            "attribute_group_name": "Otros",
                            "source": 1572,
                            "id": "BRAND"
                        },
                        {
                            "value_id": "2230284",
                            "value_name": "Nuevo",
                            "value_struct": null,
                            "attribute_group_id": "OTHERS",
                            "attribute_group_name": "Otros",
                            "source": 1572,
                            "id": "ITEM_CONDITION",
                            "name": "Condición del ítem"
                        },
                        {
                            "value_struct": null,
                            "attribute_group_id": "OTHERS",
                            "attribute_group_name": "Otros",
                            "source": 1572,
                            "id": "MODEL",
                            "name": "Modelo",
                            "value_id": null,
                            "value_name": "Bala"
                        }
                    ],
                    "original_price": null,
                    "category_id": "MLA413621",
                    "official_store_id": null,
                    "catalog_product_id": null,
                    "reviews": {
                        "rating_average": 4.4,
                        "total": 17
                    },
                    "tags": [
                        "good_quality_thumbnail",
                        "brand_verified",
                        "immediate_payment",
                        "cart_eligible"
                    ]
                }
            ],
            "secondary_results": [

            ],
            "related_results": [

            ],
            "sort": {
                "id": "relevance",
                "name": "Más relevantes"
            },
            "available_sorts": [
                {
                    "id": "price_asc",
                    "name": "Menor precio"
                },
                {
                    "id": "price_desc",
                    "name": "Mayor precio"
                }
            ],
            "filters": [
                {
                    "id": "category",
                    "name": "Categorías",
                    "type": "text",
                    "values": [
                        {
                            "id": "MLA47769",
                            "name": "Termos",
                            "path_from_root": [
                                {
                                    "id": "MLA1276",
                                    "name": "Deportes y Fitness"
                                },
                                {
                                    "id": "MLA1362",
                                    "name": "Camping"
                                },
                                {
                                    "id": "MLA12203",
                                    "name": "Recipientes Térmicos"
                                },
                                {
                                    "id": "MLA47769",
                                    "name": "Termos"
                                }
                            ]
                        }
                    ]
                }
            ],
            "available_filters": [
                {
                    "id": "category",
                    "name": "Categorías",
                    "type": "text",
                    "values": [
                        {
                            "id": "MLA392865",
                            "name": "Stanley",
                            "results": 1898
                        },
                        {
                            "id": "MLA374353",
                            "name": "Lumilagro",
                            "results": 953
                        },
                        {
                            "id": "MLA374354",
                            "name": "Waterdog",
                            "results": 931
                        },
                        {
                            "id": "MLA374425",
                            "name": "Termolar",
                            "results": 278
                        },
                        {
                            "id": "MLA374355",
                            "name": "Spinit",
                            "results": 168
                        },
                        {
                            "id": "MLA374424",
                            "name": "Coleman",
                            "results": 100
                        },
                        {
                            "id": "MLA374357",
                            "name": "Flying Eagle",
                            "results": 70
                        },
                        {
                            "id": "MLA374358",
                            "name": "Otras Marcas",
                            "results": 5590
                        }
                    ]
                },
                {
                    "id": "official_store",
                    "name": "Tiendas oficiales",
                    "type": "text",
                    "values": [
                        {
                            "id": "all",
                            "name": "Todas las tiendas oficiales",
                            "results": 115
                        },
                        {
                            "id": "410",
                            "name": "Pezcalandia",
                            "results": 29
                        },
                        {
                            "id": "1456",
                            "name": "Doite",
                            "results": 3
                        },
                        {
                            "id": "1153",
                            "name": "Artentino",
                            "results": 10
                        },
                        {
                            "id": "806",
                            "name": "Stanley Licenses",
                            "results": 7
                        }
                    ]
                },
                {
                    "id": "discount",
                    "name": "Descuentos",
                    "type": "range",
                    "values": [
                        {
                            "id": "10-100",
                            "name": "Desde 10% off",
                            "results": 12
                        },
                        {
                            "id": "20-100",
                            "name": "Desde 20% off",
                            "results": 4
                        }
                    ]
                },
                {
                    "id": "state",
                    "name": "Ubicación",
                    "type": "text",
                    "values": [
                        {
                            "id": "TUxBUENBUGw3M2E1",
                            "name": "Capital Federal",
                            "results": 3977
                        },
                        {
                            "id": "TUxBUEdSQXJlMDNm",
                            "name": "Bs.As. G.B.A. Sur",
                            "results": 1026
                        },
                        {
                            "id": "TUxBUEdSQWU4ZDkz",
                            "name": "Bs.As. G.B.A. Norte",
                            "results": 908
                        },
                        {
                            "id": "TUxBUFNBTGFjMTJi",
                            "name": "Salta",
                            "results": 739
                        },
                        {
                            "id": "TUxBUEdSQWVmNTVm",
                            "name": "Bs.As. G.B.A. Oeste",
                            "results": 670
                        },
                        {
                            "id": "TUxBUENPUmFkZGIw",
                            "name": "Córdoba",
                            "results": 380
                        },
                        {
                            "id": "TUxBUFNBTmU5Nzk2",
                            "name": "Santa Fe",
                            "results": 359
                        },
                        {
                            "id": "TUxBUFpPTmFpbnRl",
                            "name": "Buenos Aires Interior",
                            "results": 198
                        },
                        {
                            "id": "TUxBUENPU2ExMmFkMw",
                            "name": "Bs.As. Costa Atlántica",
                            "results": 127
                        },
                        {
                            "id": "TUxBUE1FTmE5OWQ4",
                            "name": "Mendoza",
                            "results": 104
                        },
                        {
                            "id": "TUxBUEpVSnk3YmUz",
                            "name": "Jujuy",
                            "results": 98
                        },
                        {
                            "id": "TUxBUE1JU3MzNjIx",
                            "name": "Misiones",
                            "results": 92
                        },
                        {
                            "id": "TUxBUFRVQ244NmM3",
                            "name": "Tucumán",
                            "results": 73
                        },
                        {
                            "id": "TUxBUENPUnM5MjI0",
                            "name": "Corrientes",
                            "results": 66
                        },
                        {
                            "id": "TUxBUEVOVHMzNTdm",
                            "name": "Entre Ríos",
                            "results": 52
                        },
                        {
                            "id": "TUxBUENIVXQxNDM1MQ",
                            "name": "Chubut",
                            "results": 34
                        },
                        {
                            "id": "TUxBUEZPUmE1OTk5",
                            "name": "Formosa",
                            "results": 22
                        },
                        {
                            "id": "TUxBUENIQW8xMTNhOA",
                            "name": "Chaco",
                            "results": 16
                        },
                        {
                            "id": "TUxBUExBWmE1OWMy",
                            "name": "La Pampa",
                            "results": 12
                        },
                        {
                            "id": "TUxBUFLNT29iZmZm",
                            "name": "Río Negro",
                            "results": 12
                        },
                        {
                            "id": "TUxBUFNBTm9lOTlk",
                            "name": "Santiago del Estero",
                            "results": 8
                        },
                        {
                            "id": "TUxBUExBWmEyNzY0",
                            "name": "La Rioja",
                            "results": 4
                        },
                        {
                            "id": "TUxBUFNBTnM0ZTcz",
                            "name": "San Luis",
                            "results": 4
                        },
                        {
                            "id": "TUxBUENBVGFiY2Fm",
                            "name": "Catamarca",
                            "results": 2
                        },
                        {
                            "id": "TUxBUFNBTno3ZmY5",
                            "name": "Santa Cruz",
                            "results": 2
                        }
                    ]
                },
                {
                    "id": "price",
                    "name": "Precio",
                    "type": "range",
                    "values": [
                        {
                            "id": "*-550.0",
                            "name": "Hasta $ 550",
                            "results": 3253
                        },
                        {
                            "id": "550.0-1500.0",
                            "name": "$550 a $1.500",
                            "results": 2954
                        },
                        {
                            "id": "1500.0-*",
                            "name": "Más de $1.500",
                            "results": 3781
                        }
                    ]
                },
                {
                    "id": "accepts_mercadopago",
                    "name": "Filtro por MercadoPago",
                    "type": "boolean",
                    "values": [
                        {
                            "id": "yes",
                            "name": "Con MercadoPago",
                            "results": 9988
                        }
                    ]
                },
                {
                    "id": "installments",
                    "name": "Pago",
                    "type": "text",
                    "values": [
                        {
                            "id": "yes",
                            "name": "En cuotas",
                            "results": 9982
                        },
                        {
                            "id": "no_interest",
                            "name": "Sin interés",
                            "results": 1303
                        }
                    ]
                },
                {
                    "id": "condition",
                    "name": "Condición",
                    "type": "text",
                    "values": [
                        {
                            "id": "new",
                            "name": "Nuevo",
                            "results": 9350
                        },
                        {
                            "id": "used",
                            "name": "Usado",
                            "results": 592
                        }
                    ]
                },
                {
                    "id": "shipping",
                    "name": "Tipo de entrega",
                    "type": "text",
                    "values": [
                        {
                            "id": "mercadoenvios",
                            "name": "Con envío",
                            "results": 7649
                        },
                        {
                            "id": "sameday",
                            "name": "Envío rápido",
                            "results": 134
                        }
                    ]
                },
                {
                    "id": "power_seller",
                    "name": "Filtro por calidad de vendedores",
                    "type": "boolean",
                    "values": [
                        {
                            "id": "yes",
                            "name": "Mejores vendedores",
                            "results": 4048
                        }
                    ]
                },
                {
                    "id": "buying_mode",
                    "name": "Filtro por tipo de venta",
                    "type": "text",
                    "values": [
                        {
                            "id": "buy_it_now",
                            "name": "Compra inmediata",
                            "results": 9982
                        },
                        {
                            "id": "auction",
                            "name": "Subasta",
                            "results": 6
                        }
                    ]
                },
                {
                    "id": "since",
                    "name": "Filtro por fecha de comienzo",
                    "type": "text",
                    "values": [
                        {
                            "id": "today",
                            "name": "Publicados hoy",
                            "results": 56
                        }
                    ]
                },
                {
                    "id": "until",
                    "name": "Filtro por fecha de finalización",
                    "type": "text",
                    "values": [
                        {
                            "id": "today",
                            "name": "Finalizan hoy",
                            "results": 6
                        }
                    ]
                },
                {
                    "id": "has_video",
                    "name": "Filtro por publicaciones con video",
                    "type": "boolean",
                    "values": [
                        {
                            "id": "yes",
                            "name": "Publicaciones con video",
                            "results": 333
                        }
                    ]
                },
                {
                    "id": "has_pictures",
                    "name": "Filtro por publicaciones con imágenes",
                    "type": "boolean",
                    "values": [
                        {
                            "id": "yes",
                            "name": "Con fotos",
                            "results": 9962
                        }
                    ]
                },
                {
                    "id": "shipping_cost",
                    "name": "Costo de envío",
                    "type": "text",
                    "values": [
                        {
                            "id": "free",
                            "name": "Gratis",
                            "results": 2992
                        }
                    ]
                }
            ]
        })

    } else {
        const q = req.query;
        ArticleService.getProducts(q)
            .then(articles => {
                res.send(articles)
            })
            .catch(error => {
                console.log('Se produjo un error al buscar estos producto')
                next(error)
            })
    }
}

function getProduct(req, res, next) {
    if (mock) {
        console.log('--MOCKED GET BY ID--')
        return res.send(
            {
                "id": "MLA619397115",
                "site_id": "MLA",
                "title": "Termo Stanley Clasico 1lt Pico Cebador",
                "subtitle": null,
                "seller_id": 143749452,
                "category_id": "MLA392865",
                "official_store_id": 410,
                "price": 2790,
                "base_price": 2790,
                "original_price": null,
                "currency_id": "ARS",
                "initial_quantity": 1408,
                "available_quantity": 1,
                "sold_quantity": 500,
                "sale_terms": [
                ],
                "buying_mode": "buy_it_now",
                "listing_type_id": "gold_special",
                "start_time": "2016-05-07T15:59:48.000Z",
                "stop_time": "2038-05-31T02:13:29.000Z",
                "condition": "new",
                "permalink": "https://articulo.mercadolibre.com.ar/MLA-619397115-termo-stanley-clasico-1lt-pico-cebador-_JM",
                "thumbnail": "http://mla-s2-p.mlstatic.com/857933-MLA27426701808_052018-O.jpg",
                "secure_thumbnail": "https://mla-s2-p.mlstatic.com/857933-MLA27426701808_052018-I.jpg",
                "pictures": [],
                "video_id": null,
                "descriptions": [],
                "accepts_mercadopago": true,
                "non_mercado_pago_payment_methods": [
                ],
                "shipping": {},
                "international_delivery_mode": "none",
                "seller_address": {},
                "seller_contact": null,
                "location": {
                },
                "geolocation": {},
                "coverage_areas": [
                ],
                "attributes": [],
                "warnings": [
                ],
                "listing_source": "",
                "variations": [
                ],
                "status": "active",
                "sub_status": [
                ],
                "tags": [],
                "warranty": "Productos con garantia oficial de por vida - Dealer Pezcalandia",
                "catalog_product_id": null,
                "domain_id": "MLA-THERMOSES",
                "parent_item_id": null,
                "differential_pricing": null,
                "deal_ids": [
                ],
                "automatic_relist": false,
                "date_created": "2016-05-07T15:59:48.000Z",
                "last_updated": "2018-08-10T18:23:14.000Z",
                "health": null
            }
        )
    }
    const q = req.params
    ArticleService.getProduct(q)
        .then(article => {
            res.send(article)
        })
        .catch(error => {
            console.log('Se produjo un error al buscar este producto')
            next(error)
        })
}

function getDescription(req, res, next) {
    if (mock) {
        console.log('--MOCK GET DESCRIPTION--')
        res.send({

            "text": "",
            "plain_text": "Termo Stanley Adventire 1 L Con pico cebador Original Producto original no se deje engañar con replicas Garantía de por vida Incluye taza térmica Tecnologia de aislamiento por vacio, conserva por vacio altas o bajas temperaturas por 24hs a 120hs para bebidas frias Peso: 680grs Garantia de por vida Pezcalandia dealer oficial Medidas del termo de 1 Litro adventure capacidad 1 litro - 29.40cm x 9.5cm de diametro. En Pezcalandia encontrarás los mejores instructores en las distintas disciplinas y modalidades, no te quedes con la duda, consultá las veces que consideres oportunas. Unica tienda oficial en pesca deportiva en todo Mercado Libre, visita nuestro eshop, sólo un click https://eshops.mercadolibre.com.ar/PEZCALANDIA+ML CAMBIOS - RECLAMOS En caso que el producto no funcione pedimos NO INICIAR RECLAMO, ya que afecta celeridad en la solución y a nuestros operadores. Para supuestos casos de fallas, las atenderemos y nos encargaremos que tengan una solución inmediata, para ello solicitamos se sigan nuestras instrucciones. En caso de productos para devolución, deberán estar en perfectas condiciones, sin uso y con sus envases originales. El costo de envío es por cuenta y orden del cliente sin excepción. Usted dispone de 10 (diez) días corridos, a partir de la fecha de recepción del producto para gestionar algún cambio. Para retiros personales siempre y todos los casos está sujeto a disponibilidad de stock, control de calidad y previo acuerdo escrito desde nuestro centro de atención al cliente, sin excepción, en todos los casos se enviará un mensaje desde nuestra central, sea vía correo electrónico o por la plataforma Mercado Libre. PREGUNTAS FRECUENTES STOCK: Cada publicación de Pezcalandia, única tienda oficial de pesca deportiva de todo Mercado Libre, dispone de stock salvo casos esporádicos de fuerza mayor. AUTENTICIDAD: Todos los productos comercializados son 100% originales, legítimos con garantía y no manufacturamos réplicas. ENVÍO: Entregamos tu pedido por medio de MERCADOENVÍOS, una vez realizada la compra recibirás un email para el seguimiento de la entrega. Se aclara que el envío por cualquier otro transporte, es una contratación del cliente con Mercado Libre y que una vez realizada la entrega del vendedor al transporte que indique, Pezcalandia no puede realizar reclamos en nombre del cliente, ni es responsabilidad del estado o siniestros que ocurran en el viaje, el producto viaja por su cuenta y orden Mercado Envíos. NO PUEDE retirar en nuestro Store, para retirar de nuestros store, debe indicar condición de entrega arregla con el vendedor. Envíos por transporte: Si sos del interior, podés solicitarnos el envío, debes informarnos los datos por mensaje privado luego de efectuar y abonar la compra, el envío se abona al recibir y/o retirar e lpaquete. Si querés que te lo enviemos por moto, dale click a 'Comprar' y dale click a la opción 'Retiro en domicilio del vendedor'. Una vez que terminas de pagar, nos avisas por mensaje privado dentro de la compra que querés que te lo enviemos por moto, (es caro este tipo de envío) nos confirmas la dirección y listo! (Recordá que en días de lluvia el servicio tiene un recargo de un 50%) INFORMACIÓN IMPORTANTE Todos los usuarios que reciban la mercadería por transportes, deben revisar los equipos ANTES DE FIRMAR EL REMITO de conformidad, ya que después no aceptamos reclamos por golpes o maltratos. FACTURA: Enviamos factura consumidor final únicamente, facturas superiores a los $2000 confeccionamos comprobante A, a pedido del comprador y se remitirá en la semana del envío PAGOS: Unicamente MERCADO PAGO es la plataforma que utilizamos. POST VENTA: Ante cualquier consulta nuestro equipo de ATENCIÓN AL CLIENTE está disponible para resolver tu inquietud, dentro de tu mensaje de compra realizada tendrás correos que Mercado Libre te proporcionará.",
            "last_updated": "2018-08-07T14:47:01.000Z",
            "date_created": "2016-05-07T16:09:23.000Z",
            "snapshot": {}

        })
    }
    const q = req.params
    ArticleService.getDescription(q)
        .then(description => {
            res.send(description)
        })
        .catch(error => {
            console.log('No se encontro una descripcion para este producto.')
            next(error)
        })
}

function getCurrency(req, res) {
    const currency = req.params
    ArticleService.getCurrency(currency)
        .then(currency => {
            res.send(currency)
        })
        .catch(error => {
            console.log('No encontrado.')
            next(error)
        })
}


module.exports = {
    getProducts,
    getProduct,
    getDescription,
    getCurrency
}
// Image CDN URL for Restaurant card
export const IMG_CDN_URL =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const FETCH_MENU_URL = "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=";

const restaurant = {
    "statusCode": 0,
        "data": {
        "tid": "d780a4b5-9968-46fa-9ddf-9cdef76fa828",
            "sid": "8ba819d1-87f9-4bc4-9eed-5c9ef98a879b",
                "success": {
            "nextOffset": "CNg_EPgSGAEogIC9hrmFxaELMIwGOAQ=",
                "cards": [
                    {
                        "relevance": {},
                        "gridWidget": {
                            "header": {
                                "action": {},
                                "headerStyling": {
                                    "padding": {}
                                }
                            },
                            "layout": {
                                "rows": 1,
                                "columns": 1,
                                "widgetPadding": {},
                                "containerStyle": {
                                    "containerPadding": {
                                        "left": 16,
                                        "top": 16,
                                        "right": 16,
                                        "bottom": 12
                                    }
                                },
                                "scrollBar": {
                                    "scrollStyling": {
                                        "padding": {}
                                    }
                                },
                                "autoScrollConfig": {},
                                "separatorConfig": {}
                            },
                            "imageGridCards": {
                                "info": [
                                    {
                                        "id": "410097",
                                        "imageId": "rng/md/carousel/production/faxdufvkcllzse67eqry",
                                        "action": {
                                            "link": "swiggy://restaurantList",
                                            "text": "Restaurant",
                                            "type": "DEEPLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "RESTAURANT",
                                            "altTextCta": "Click to know more about Restaurants."
                                        }
                                    }
                                ],
                                "style": {
                                    "width": {
                                        "type": "TYPE_RELATIVE",
                                        "value": 1,
                                        "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                                    },
                                    "height": {
                                        "type": "TYPE_RELATIVE",
                                        "value": 0.35714287,
                                        "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                                    }
                                }
                            },
                            "id": "ScrollNavFullBleedP2_latebinding",
                            "gridElements": {
                                "infoWithStyle": {
                                    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                                    "info": [
                                        {
                                            "id": "410097",
                                            "imageId": "rng/md/carousel/production/faxdufvkcllzse67eqry",
                                            "action": {
                                                "link": "swiggy://restaurantList",
                                                "text": "Restaurant",
                                                "type": "DEEPLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "RESTAURANT",
                                                "altTextCta": "Click to know more about Restaurants."
                                            },
                                            "entityId": "swiggy://restaurantList",
                                            "frequencyCapping": {}
                                        }
                                    ],
                                    "style": {
                                        "width": {
                                            "type": "TYPE_RELATIVE",
                                            "value": 1,
                                            "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                                        },
                                        "height": {
                                            "type": "TYPE_RELATIVE",
                                            "value": 0.35714287,
                                            "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                                        }
                                    }
                                }
                            },
                            "footer": {
                                "labelWrapper": {}
                            }
                        }
                    },
                    {
                        "relevance": {
                            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                            "sectionId": "SIMILAR_RESTAURANTS"
                        },
                        "gridWidget": {
                            "header": {
                                "title": "Top Picks For You",
                                "action": {},
                                "imageId": "sl9oogwe7n5dusolt5xe",
                                "headerStyling": {
                                    "padding": {
                                        "left": 16,
                                        "top": 15,
                                        "bottom": 24
                                    }
                                }
                            },
                            "layout": {
                                "rows": 1,
                                "columns": 16,
                                "horizontalScrollEnabled": true,
                                "shouldSnap": true,
                                "itemSpacing": 12,
                                "widgetPadding": {},
                                "containerStyle": {
                                    "containerPadding": {
                                        "left": 16,
                                        "right": 16,
                                        "bottom": 12
                                    }
                                },
                                "scrollBar": {
                                    "scrollStyling": {
                                        "padding": {}
                                    }
                                },
                                "autoScrollConfig": {},
                                "separatorConfig": {}
                            },
                            "imageGridCards": {
                                "style": {
                                    "width": {},
                                    "height": {}
                                }
                            },
                            "id": "Updated_4_favourites_SimRestoRelevance",
                            "gridElements": {
                                "infoWithStyle": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                                    "restaurants": [
                                        {
                                            "info": {
                                                "id": "694945",
                                                "name": "Maharaja Chaap - The Pure Veg",
                                                "cloudinaryImageId": "7533174edc9b8b784aa24b984ebc7c6c",
                                                "locality": "Narmada Rd",
                                                "areaName": "Jab_West",
                                                "costForTwo": "₹200 for two",
                                                "cuisines": [
                                                    "North Indian",
                                                    "Punjabi",
                                                    "Tandoor",
                                                    "Biryani",
                                                    "Snacks",
                                                    "Indian",
                                                    "Beverages"
                                                ],
                                                "avgRating": 2.2,
                                                "veg": true,
                                                "feeDetails": {
                                                    "restaurantId": "694945",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "397297",
                                                "avgRatingString": "2.2",
                                                "totalRatingsString": "10+",
                                                "promoted": true,
                                                "adTrackingId": "cid=7491588~p=1~eid=00000189-796e-bad4-2752-01db0026015f~srvts=1689959447252~45995",
                                                "sla": {
                                                    "deliveryTime": 23,
                                                    "lastMileTravel": 3,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "23 mins",
                                                    "lastMileTravelString": "3.0 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "30% OFF",
                                                    "subHeader": "UPTO ₹75"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "isNewlyOnboarded": true,
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=694945",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "97298",
                                                "name": "Domino's Pizza",
                                                "cloudinaryImageId": "gxwfddnvobqwzvp9ri7i",
                                                "locality": "Russel Chowk",
                                                "areaName": "Napier Town",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Pizzas",
                                                    "Italian",
                                                    "Pastas",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.2,
                                                "feeDetails": {
                                                    "restaurantId": "97298",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "2456",
                                                "avgRatingString": "4.2",
                                                "totalRatingsString": "1K+",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25 mins",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 22:59:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "30% OFF",
                                                    "subHeader": "UPTO ₹75"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=97298",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "460360",
                                                "name": "Burger Singh (Big Punjabi Burgers)",
                                                "cloudinaryImageId": "exjtn7t7mrxptuzbv0y1",
                                                "locality": "Manas Bhawan",
                                                "areaName": "Wright Town",
                                                "costForTwo": "₹300 for two",
                                                "cuisines": [
                                                    "Snacks",
                                                    "Indian",
                                                    "American",
                                                    "Beverages",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4,
                                                "feeDetails": {
                                                    "restaurantId": "460360",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "375065",
                                                "avgRatingString": "4.0",
                                                "totalRatingsString": "500+",
                                                "sla": {
                                                    "deliveryTime": 19,
                                                    "lastMileTravel": 0.9,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "19 mins",
                                                    "lastMileTravelString": "0.9 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "30% OFF",
                                                    "subHeader": "UPTO ₹75"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=460360",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "572881",
                                                "name": "The Belgian Waffle Co.",
                                                "cloudinaryImageId": "yoagucuemfcpykhzoexk",
                                                "locality": "Bhawartal garden",
                                                "areaName": "Napier Town",
                                                "costForTwo": "₹200 for two",
                                                "cuisines": [
                                                    "Waffle",
                                                    "Desserts",
                                                    "Ice Cream",
                                                    "Beverages"
                                                ],
                                                "avgRating": 4.4,
                                                "veg": true,
                                                "feeDetails": {
                                                    "restaurantId": "572881",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "2233",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "100+",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "lastMileTravel": 0.9,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25 mins",
                                                    "lastMileTravelString": "0.9 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-22 00:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textExtendedBadges": {},
                                                        "textBased": {},
                                                        "imageBased": {}
                                                    }
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=572881",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "199324",
                                                "name": "SSS Veg South Indian Restaurant",
                                                "cloudinaryImageId": "ybbqlckuhvvnurlzeyjm",
                                                "locality": "1st Block",
                                                "areaName": "Napier Town",
                                                "costForTwo": "₹250 for two",
                                                "cuisines": [
                                                    "Chinese",
                                                    "South Indian"
                                                ],
                                                "avgRating": 3.6,
                                                "veg": true,
                                                "feeDetails": {
                                                    "restaurantId": "199324",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "195203",
                                                "avgRatingString": "3.6",
                                                "totalRatingsString": "500+",
                                                "promoted": true,
                                                "adTrackingId": "cid=7419716~p=2~eid=00000189-796e-bad4-2752-01dc00260234~srvts=1689959447252~45995",
                                                "sla": {
                                                    "deliveryTime": 23,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "23 mins",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 22:45:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "₹125 OFF",
                                                    "subHeader": "ABOVE ₹199",
                                                    "discountTag": "FLAT DEAL"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=199324",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "622716",
                                                "name": "Haldiram's Restaurant",
                                                "cloudinaryImageId": "c058b951bd917bf716630dff74648a5d",
                                                "locality": "Bloom Chowk",
                                                "areaName": "Napier Town",
                                                "costForTwo": "₹500 for two",
                                                "cuisines": [
                                                    "North Indian",
                                                    "South Indian",
                                                    "Sweets",
                                                    "Desserts",
                                                    "Chaat"
                                                ],
                                                "avgRating": 3.9,
                                                "veg": true,
                                                "feeDetails": {
                                                    "restaurantId": "622716",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "351771",
                                                "avgRatingString": "3.9",
                                                "totalRatingsString": "100+",
                                                "sla": {
                                                    "deliveryTime": 20,
                                                    "lastMileTravel": 1.2,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20 mins",
                                                    "lastMileTravelString": "1.2 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-22 00:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "40% OFF",
                                                    "subHeader": "UPTO ₹80"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=622716",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "427129",
                                                "name": "The Good Bowl",
                                                "cloudinaryImageId": "tqluaetavka8eeg1m36q",
                                                "locality": "Russel Chowk",
                                                "areaName": "Ganjipura",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Biryani",
                                                    "North Indian",
                                                    "Pastas",
                                                    "Punjabi",
                                                    "Desserts",
                                                    "Beverages"
                                                ],
                                                "avgRating": 3.9,
                                                "feeDetails": {
                                                    "restaurantId": "427129",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "7918",
                                                "avgRatingString": "3.9",
                                                "totalRatingsString": "100+",
                                                "sla": {
                                                    "deliveryTime": 30,
                                                    "lastMileTravel": 0.6,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "30 mins",
                                                    "lastMileTravelString": "0.6 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=427129",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "427125",
                                                "name": "Oven Story Pizza",
                                                "cloudinaryImageId": "ab979bffbd658e74de650a15ca0092a3",
                                                "locality": "Russel Chowk",
                                                "areaName": "Ganjipura",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Pizzas",
                                                    "Pastas",
                                                    "Italian",
                                                    "Desserts",
                                                    "Beverages"
                                                ],
                                                "avgRating": 3.9,
                                                "feeDetails": {
                                                    "restaurantId": "427125",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "3534",
                                                "avgRatingString": "3.9",
                                                "totalRatingsString": "100+",
                                                "sla": {
                                                    "deliveryTime": 31,
                                                    "lastMileTravel": 0.6,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "31 mins",
                                                    "lastMileTravelString": "0.6 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "60% OFF",
                                                    "subHeader": "UPTO ₹120"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=427125",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "128196",
                                                "name": "Barbecue",
                                                "cloudinaryImageId": "as7srhgf3v3wnq30mrvp",
                                                "locality": "Katanga square",
                                                "areaName": "Gorakhpur",
                                                "costForTwo": "₹350 for two",
                                                "cuisines": [
                                                    "Indian"
                                                ],
                                                "avgRating": 3.7,
                                                "feeDetails": {
                                                    "restaurantId": "128196",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "41776",
                                                "avgRatingString": "3.7",
                                                "totalRatingsString": "1K+",
                                                "promoted": true,
                                                "adTrackingId": "cid=7512368~p=3~eid=00000189-796e-bad4-2752-01dd00260361~srvts=1689959447252~45995",
                                                "sla": {
                                                    "deliveryTime": 22,
                                                    "lastMileTravel": 2.3,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "22 mins",
                                                    "lastMileTravelString": "2.3 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-22 00:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "20% OFF",
                                                    "subHeader": "UPTO ₹50"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=128196",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "93851",
                                                "name": "Pizza Hut",
                                                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                                                "locality": "Russel Chowk",
                                                "areaName": "Napier Town",
                                                "costForTwo": "₹350 for two",
                                                "cuisines": [
                                                    "Pizzas"
                                                ],
                                                "avgRating": 4,
                                                "feeDetails": {
                                                    "restaurantId": "93851",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "721",
                                                "avgRatingString": "4.0",
                                                "totalRatingsString": "1K+",
                                                "sla": {
                                                    "deliveryTime": 28,
                                                    "lastMileTravel": 0.8,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "28 mins",
                                                    "lastMileTravelString": "0.8 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-22 01:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "60% OFF",
                                                    "subHeader": "UPTO ₹120"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=93851",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "219652",
                                                "name": "La Pino'z Pizza",
                                                "cloudinaryImageId": "5fe4444a065b60c4fe39ef975222c12b",
                                                "locality": "4th Bridge Road",
                                                "areaName": "Napier Town",
                                                "costForTwo": "₹200 for two",
                                                "cuisines": [
                                                    "Pizzas",
                                                    "Pastas",
                                                    "Italian",
                                                    "Desserts",
                                                    "Beverages"
                                                ],
                                                "avgRating": 3.8,
                                                "feeDetails": {
                                                    "restaurantId": "219652",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "4961",
                                                "avgRatingString": "3.8",
                                                "totalRatingsString": "1K+",
                                                "sla": {
                                                    "deliveryTime": 28,
                                                    "lastMileTravel": 1.3,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "28 mins",
                                                    "lastMileTravelString": "1.3 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-22 02:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=219652",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "288595",
                                                "name": "Baskin Robbins - Ice Cream Desserts",
                                                "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
                                                "locality": "Panagar",
                                                "areaName": "Civil Lines",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "North Indian"
                                                ],
                                                "avgRating": 4.2,
                                                "veg": true,
                                                "feeDetails": {
                                                    "restaurantId": "288595",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "5588",
                                                "avgRatingString": "4.2",
                                                "totalRatingsString": "100+",
                                                "sla": {
                                                    "deliveryTime": 31,
                                                    "lastMileTravel": 2.1,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "31 mins",
                                                    "lastMileTravelString": "2.1 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "30% OFF",
                                                    "subHeader": "UPTO ₹75"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY",
                                                    "exclusiveOfferMessage": "EXTRA 10% OFF"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=288595",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "101257",
                                                "name": "Hotel National Biriyani",
                                                "cloudinaryImageId": "fzdcvgcok450gw2nxwma",
                                                "locality": "Samdariya Mall",
                                                "areaName": "Malviya Chowk",
                                                "costForTwo": "₹250 for two",
                                                "cuisines": [
                                                    "Indian"
                                                ],
                                                "avgRating": 3.5,
                                                "feeDetails": {
                                                    "restaurantId": "101257",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "100531",
                                                "avgRatingString": "3.5",
                                                "totalRatingsString": "1K+",
                                                "promoted": true,
                                                "adTrackingId": "cid=7513444~p=4~eid=00000189-796e-bad4-2752-01de00260439~srvts=1689959447252~45995",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "lastMileTravel": 0.1,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25 mins",
                                                    "lastMileTravelString": "0.1 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textExtendedBadges": {},
                                                        "textBased": {}
                                                    }
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=101257",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "538236",
                                                "name": "Natural Ice Cream",
                                                "cloudinaryImageId": "zg2eoo7kbxahulm7c5zi",
                                                "locality": "Muskan Park",
                                                "areaName": "Civil Lines",
                                                "costForTwo": "₹150 for two",
                                                "cuisines": [
                                                    "Ice Cream",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.5,
                                                "veg": true,
                                                "feeDetails": {
                                                    "restaurantId": "538236",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "2093",
                                                "avgRatingString": "4.5",
                                                "totalRatingsString": "500+",
                                                "sla": {
                                                    "deliveryTime": 23,
                                                    "lastMileTravel": 1.5,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "23 mins",
                                                    "lastMileTravelString": "1.5 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-22 00:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "20% OFF",
                                                    "subHeader": "UPTO ₹50"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=538236",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "529645",
                                                "name": "Sagar Ratna",
                                                "cloudinaryImageId": "yaljwpdx7jiaav9rsidn",
                                                "locality": "Manas Bhawan Road",
                                                "areaName": "Jab_North",
                                                "costForTwo": "₹500 for two",
                                                "cuisines": [
                                                    "South Indian",
                                                    "North Indian",
                                                    "Chinese",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4,
                                                "feeDetails": {
                                                    "restaurantId": "529645",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "793",
                                                "avgRatingString": "4.0",
                                                "totalRatingsString": "100+",
                                                "sla": {
                                                    "deliveryTime": 22,
                                                    "lastMileTravel": 1,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "22 mins",
                                                    "lastMileTravelString": "1.0 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "25% OFF",
                                                    "subHeader": "UPTO ₹65"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=529645",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "427127",
                                                "name": "Sweet Truth - Cake and Desserts",
                                                "cloudinaryImageId": "3ec8bccd0fc2c6303d7602dd642248d5",
                                                "locality": "Russel Chowk",
                                                "areaName": "Ganjipura",
                                                "costForTwo": "₹450 for two",
                                                "cuisines": [
                                                    "Snacks",
                                                    "Bakery",
                                                    "Desserts",
                                                    "Beverages"
                                                ],
                                                "avgRating": 4.4,
                                                "feeDetails": {
                                                    "restaurantId": "427127",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "4444",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "100+",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "lastMileTravel": 0.6,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25 mins",
                                                    "lastMileTravelString": "0.6 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textExtendedBadges": {},
                                                        "textBased": {},
                                                        "imageBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "20% OFF",
                                                    "subHeader": "UPTO ₹50"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=427127",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        }
                                    ],
                                    "theme": "RESTAURANT_GROUP_FAVOURITE_THEME",
                                    "widgetType": "WIDGET_TYPE_FAVOURITES",
                                    "style": {},
                                    "collectionId": "45995"
                                }
                            },
                            "footer": {
                                "labelWrapper": {}
                            }
                        }
                    },
                    {
                        "relevance": {},
                        "gridWidget": {
                            "header": {
                                "action": {},
                                "headerStyling": {
                                    "padding": {}
                                }
                            },
                            "layout": {
                                "rows": 1,
                                "columns": 1,
                                "widgetPadding": {
                                    "top": 8
                                },
                                "containerStyle": {
                                    "containerPadding": {
                                        "top": 12,
                                        "bottom": 8
                                    }
                                },
                                "scrollBar": {
                                    "scrollStyling": {
                                        "padding": {}
                                    }
                                },
                                "autoScrollConfig": {},
                                "separatorConfig": {}
                            },
                            "imageGridCards": {
                                "info": [
                                    {
                                        "id": "410229",
                                        "imageId": "rng/md/carousel/production/sbrr4vpd89nsq1oamlim",
                                        "action": {
                                            "link": "na",
                                            "text": "All new super",
                                            "type": "DEEPLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {}
                                    }
                                ],
                                "style": {
                                    "width": {
                                        "type": "TYPE_RELATIVE",
                                        "value": 1,
                                        "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                                    },
                                    "height": {
                                        "type": "TYPE_RELATIVE",
                                        "value": 0.116666,
                                        "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                                    }
                                }
                            },
                            "id": "Home_AllUsers_Generic_Banner_Carousel_Header_FullBleed",
                            "gridElements": {
                                "infoWithStyle": {
                                    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                                    "info": [
                                        {
                                            "id": "410229",
                                            "imageId": "rng/md/carousel/production/sbrr4vpd89nsq1oamlim",
                                            "action": {
                                                "link": "na",
                                                "text": "All new super",
                                                "type": "DEEPLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {},
                                            "entityId": "na",
                                            "frequencyCapping": {}
                                        }
                                    ],
                                    "style": {
                                        "width": {
                                            "type": "TYPE_RELATIVE",
                                            "value": 1,
                                            "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                                        },
                                        "height": {
                                            "type": "TYPE_RELATIVE",
                                            "value": 0.116666,
                                            "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                                        }
                                    }
                                }
                            },
                            "footer": {
                                "labelWrapper": {}
                            }
                        }
                    },
                    {
                        "bannerCarousel": {
                            "cards": [
                                {
                                    "id": "264502",
                                    "imageId": "rng/md/carousel/production/bk41pyvehr7udbklwujz",
                                    "action": {
                                        "link": "swiggy://collectionV2?collection_id=34356&tags=layout_ux4",
                                        "type": "DEEPLINK"
                                    },
                                    "entityType": "collectionv2",
                                    "entityId": "34356"
                                },
                                {
                                    "id": "264595",
                                    "imageId": "rng/md/carousel/production/r5hbbisbcmqyvtiladhu",
                                    "action": {
                                        "link": "swiggy://collectionV2?collection_id=34359&tags=layout_ux4",
                                        "type": "DEEPLINK"
                                    },
                                    "entityType": "collectionv2",
                                    "entityId": "34359"
                                },
                                {
                                    "id": "264571",
                                    "imageId": "rng/md/carousel/production/eukvtjhc6gtxhzjtphyd",
                                    "action": {
                                        "link": "swiggy://collectionV2?collection_id=34358&tags=layout_ux4",
                                        "type": "DEEPLINK"
                                    },
                                    "entityType": "collectionv2",
                                    "entityId": "34358"
                                },
                                {
                                    "id": "270171",
                                    "imageId": "rng/md/carousel/production/oahfjg4fsd9uh914ltob",
                                    "action": {
                                        "link": "swiggy://collectionV2?collection_id=35126&tags=layout_ux4",
                                        "type": "DEEPLINK"
                                    },
                                    "entityType": "collectionv2",
                                    "entityId": "35126"
                                },
                                {
                                    "id": "607171",
                                    "imageId": "rng/md/carousel/production/bzreut1leegakgbhurjs",
                                    "action": {
                                        "link": "swiggy://collectionV2?collection_id=11739&tags=layout_ux4",
                                        "type": "DEEPLINK"
                                    },
                                    "entityType": "collectionv2",
                                    "entityId": "11739"
                                },
                                {
                                    "id": "607170",
                                    "imageId": "rng/md/carousel/production/yif2xvngrolpp4cgzoag",
                                    "action": {
                                        "link": "swiggy://collectionV2?collection_id=11741&tags=layout_ux4",
                                        "type": "DEEPLINK"
                                    },
                                    "entityType": "collectionv2",
                                    "entityId": "11741"
                                },
                                {
                                    "id": "507089",
                                    "imageId": "rng/md/carousel/production/nbsluqgwsva4qo68dsoi",
                                    "action": {
                                        "link": "swiggy://collectionV2?collection_id=11741&tags=layout_ux4",
                                        "type": "DEEPLINK"
                                    },
                                    "entityType": "collectionv2",
                                    "entityId": "11741"
                                },
                                {
                                    "id": "607173",
                                    "imageId": "rng/md/carousel/production/xc6vrxxtvoe9q3e5i0qr",
                                    "action": {
                                        "link": "swiggy://collectionV2?collection_id=11738&tags=layout_ux4",
                                        "type": "DEEPLINK"
                                    },
                                    "entityType": "collectionv2",
                                    "entityId": "11738"
                                }
                            ],
                            "widgetId": "BANNER_CAROUSEL"
                        }
                    },
                    {
                        "relevance": {},
                        "gridWidget": {
                            "header": {
                                "title": "Offers For You",
                                "action": {},
                                "headerStyling": {
                                    "padding": {
                                        "left": 16,
                                        "top": 24,
                                        "bottom": 24
                                    }
                                }
                            },
                            "layout": {
                                "rows": 1,
                                "columns": 5,
                                "horizontalScrollEnabled": true,
                                "itemSpacing": 4,
                                "widgetPadding": {
                                    "top": 8
                                },
                                "containerStyle": {
                                    "containerPadding": {
                                        "left": 16,
                                        "bottom": 24
                                    }
                                },
                                "scrollBar": {
                                    "scrollStyling": {
                                        "padding": {}
                                    }
                                },
                                "autoScrollConfig": {},
                                "separatorConfig": {}
                            },
                            "imageGridCards": {
                                "info": [
                                    {
                                        "id": "410105",
                                        "imageId": "rng/md/carousel/production/ngjatt8hwriaytmugmqz",
                                        "action": {
                                            "link": "swiggy://collectionV2?collection_id=54793&tags=layout_ux4,DISCOUNTING_COUPON_DEAL60",
                                            "text": "DEAL60",
                                            "type": "DEEPLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "DEAL60",
                                            "altTextCta": "Tap to grab best deals from best restaurant"
                                        }
                                    },
                                    {
                                        "id": "410104",
                                        "imageId": "rng/md/carousel/production/dzm1eo2punmiqd1idyzn",
                                        "action": {
                                            "link": "swiggy://collectionV2?collection_id=54802&tags=DISCOUNTING_COUPON_TRYNEW",
                                            "text": "TRYNEW",
                                            "type": "DEEPLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "TRYNEW",
                                            "altTextCta": "explore Unique tastes from new eateries"
                                        }
                                    },
                                    {
                                        "id": "410121",
                                        "imageId": "rng/md/carousel/production/skp6dyt64rxasxs3bqse",
                                        "action": {
                                            "link": "swiggy://collectionV2?collection_id=54908&tags=layout_ux4,DISCOUNTING_COUPON_SWIGGYIT",
                                            "text": "TRYNEW",
                                            "type": "DEEPLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "SWIGGYIT",
                                            "altTextCta": "Offers for 1 Upto 50% off"
                                        }
                                    },
                                    {
                                        "id": "410109",
                                        "imageId": "rng/md/carousel/production/mbcjw5tiuemimw1pfjli",
                                        "action": {
                                            "link": "swiggy://collectionV2?collection_id=54797&tags=layout_ux4,DISCOUNTING_COUPON_JUMBO",
                                            "text": "JUBO",
                                            "type": "DEEPLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "JUMBO",
                                            "altTextCta": "DEALS FOR TWO - UPTO Rs.200 OFF"
                                        }
                                    },
                                    {
                                        "id": "410114",
                                        "imageId": "rng/md/carousel/production/glitfsp43tqn8rsfq23a",
                                        "action": {
                                            "link": "swiggy://collectionV2?collection_id=50880&tags=layout_ux4,DISCOUNTING_COUPON_PARTY",
                                            "text": "PARTY",
                                            "type": "DEEPLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "PARTY",
                                            "altTextCta": "Party Steals upto 300/- off"
                                        }
                                    }
                                ],
                                "style": {
                                    "width": {
                                        "type": "TYPE_RELATIVE",
                                        "value": 0.35714287,
                                        "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                                    },
                                    "height": {
                                        "type": "TYPE_RELATIVE",
                                        "value": 1.1916667,
                                        "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                                    }
                                }
                            },
                            "id": "Home_P2_Food_Offerwidget_MainComponent_Scrollcards",
                            "gridElements": {
                                "infoWithStyle": {
                                    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                                    "info": [
                                        {
                                            "id": "410105",
                                            "imageId": "rng/md/carousel/production/ngjatt8hwriaytmugmqz",
                                            "action": {
                                                "link": "swiggy://collectionV2?collection_id=54793&tags=layout_ux4,DISCOUNTING_COUPON_DEAL60",
                                                "text": "DEAL60",
                                                "type": "DEEPLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "DEAL60",
                                                "altTextCta": "Tap to grab best deals from best restaurant"
                                            },
                                            "entityId": "54793",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "410104",
                                            "imageId": "rng/md/carousel/production/dzm1eo2punmiqd1idyzn",
                                            "action": {
                                                "link": "swiggy://collectionV2?collection_id=54802&tags=DISCOUNTING_COUPON_TRYNEW",
                                                "text": "TRYNEW",
                                                "type": "DEEPLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "TRYNEW",
                                                "altTextCta": "explore Unique tastes from new eateries"
                                            },
                                            "entityId": "54802",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "410121",
                                            "imageId": "rng/md/carousel/production/skp6dyt64rxasxs3bqse",
                                            "action": {
                                                "link": "swiggy://collectionV2?collection_id=54908&tags=layout_ux4,DISCOUNTING_COUPON_SWIGGYIT",
                                                "text": "TRYNEW",
                                                "type": "DEEPLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "SWIGGYIT",
                                                "altTextCta": "Offers for 1 Upto 50% off"
                                            },
                                            "entityId": "54908",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "410109",
                                            "imageId": "rng/md/carousel/production/mbcjw5tiuemimw1pfjli",
                                            "action": {
                                                "link": "swiggy://collectionV2?collection_id=54797&tags=layout_ux4,DISCOUNTING_COUPON_JUMBO",
                                                "text": "JUBO",
                                                "type": "DEEPLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "JUMBO",
                                                "altTextCta": "DEALS FOR TWO - UPTO Rs.200 OFF"
                                            },
                                            "entityId": "54797",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "410114",
                                            "imageId": "rng/md/carousel/production/glitfsp43tqn8rsfq23a",
                                            "action": {
                                                "link": "swiggy://collectionV2?collection_id=50880&tags=layout_ux4,DISCOUNTING_COUPON_PARTY",
                                                "text": "PARTY",
                                                "type": "DEEPLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "PARTY",
                                                "altTextCta": "Party Steals upto 300/- off"
                                            },
                                            "entityId": "50880",
                                            "frequencyCapping": {}
                                        }
                                    ],
                                    "style": {
                                        "width": {
                                            "type": "TYPE_RELATIVE",
                                            "value": 0.35714287,
                                            "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                                        },
                                        "height": {
                                            "type": "TYPE_RELATIVE",
                                            "value": 1.1916667,
                                            "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                                        }
                                    }
                                }
                            },
                            "footer": {
                                "labelWrapper": {}
                            }
                        }
                    },
                    {
                        "relevance": {},
                        "gridWidget": {
                            "header": {
                                "title": "All Restaurants Nearby",
                                "subtitle": "Discover unique tastes near you",
                                "action": {},
                                "imageId": "rng/md/production/ipai4xhkoy9ovshdnyn6",
                                "headerStyling": {
                                    "padding": {
                                        "left": 16,
                                        "top": 24,
                                        "bottom": 24
                                    }
                                }
                            },
                            "layout": {
                                "rows": 25,
                                "columns": 1,
                                "lineSpacing": 24,
                                "widgetPadding": {},
                                "containerStyle": {
                                    "containerPadding": {
                                        "right": 12,
                                        "bottom": 8
                                    }
                                },
                                "scrollBar": {
                                    "scrollStyling": {
                                        "padding": {}
                                    }
                                },
                                "autoScrollConfig": {},
                                "separatorConfig": {}
                            },
                            "imageGridCards": {
                                "style": {
                                    "width": {},
                                    "height": {}
                                }
                            },
                            "id": "restaurantCollectionDeliveringNowTheme",
                            "gridElements": {
                                "infoWithStyle": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantInfoWithStyle",
                                    "restaurants": [
                                        {
                                            "info": {
                                                "id": "694945",
                                                "name": "Maharaja Chaap - The Pure Veg",
                                                "cloudinaryImageId": "7533174edc9b8b784aa24b984ebc7c6c",
                                                "locality": "Narmada Rd",
                                                "areaName": "Jab_West",
                                                "costForTwo": "₹200 for two",
                                                "cuisines": [
                                                    "North Indian",
                                                    "Punjabi",
                                                    "Tandoor",
                                                    "Biryani",
                                                    "Snacks",
                                                    "Indian",
                                                    "Beverages"
                                                ],
                                                "avgRating": 2.2,
                                                "veg": true,
                                                "feeDetails": {
                                                    "restaurantId": "694945",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "397297",
                                                "avgRatingString": "2.2",
                                                "totalRatingsString": "10+",
                                                "promoted": true,
                                                "adTrackingId": "cid=7491588~p=1~eid=00000189-796e-bad2-274c-e28b00d9014c~srvts=1689959447250~45826",
                                                "sla": {
                                                    "deliveryTime": 23,
                                                    "lastMileTravel": 3,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "23 mins",
                                                    "lastMileTravelString": "3.0 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "30% OFF",
                                                    "subHeader": "UPTO ₹75"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "isNewlyOnboarded": true,
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=694945",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "97298",
                                                "name": "Domino's Pizza",
                                                "cloudinaryImageId": "gxwfddnvobqwzvp9ri7i",
                                                "locality": "Russel Chowk",
                                                "areaName": "Napier Town",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Pizzas",
                                                    "Italian",
                                                    "Pastas",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.2,
                                                "feeDetails": {
                                                    "restaurantId": "97298",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "2456",
                                                "avgRatingString": "4.2",
                                                "totalRatingsString": "1K+",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25 mins",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 22:59:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "30% OFF",
                                                    "subHeader": "UPTO ₹75"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=97298",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "460360",
                                                "name": "Burger Singh (Big Punjabi Burgers)",
                                                "cloudinaryImageId": "exjtn7t7mrxptuzbv0y1",
                                                "locality": "Manas Bhawan",
                                                "areaName": "Wright Town",
                                                "costForTwo": "₹300 for two",
                                                "cuisines": [
                                                    "Snacks",
                                                    "Indian",
                                                    "American",
                                                    "Beverages",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4,
                                                "feeDetails": {
                                                    "restaurantId": "460360",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "375065",
                                                "avgRatingString": "4.0",
                                                "totalRatingsString": "500+",
                                                "sla": {
                                                    "deliveryTime": 19,
                                                    "lastMileTravel": 0.9,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "19 mins",
                                                    "lastMileTravelString": "0.9 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "30% OFF",
                                                    "subHeader": "UPTO ₹75"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=460360",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "199324",
                                                "name": "SSS Veg South Indian Restaurant",
                                                "cloudinaryImageId": "ybbqlckuhvvnurlzeyjm",
                                                "locality": "1st Block",
                                                "areaName": "Napier Town",
                                                "costForTwo": "₹250 for two",
                                                "cuisines": [
                                                    "Chinese",
                                                    "South Indian"
                                                ],
                                                "avgRating": 3.6,
                                                "veg": true,
                                                "feeDetails": {
                                                    "restaurantId": "199324",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "195203",
                                                "avgRatingString": "3.6",
                                                "totalRatingsString": "500+",
                                                "promoted": true,
                                                "adTrackingId": "cid=7419716~p=2~eid=00000189-796e-bad2-274c-e28c00d90235~srvts=1689959447250~45826",
                                                "sla": {
                                                    "deliveryTime": 23,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "23 mins",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 22:45:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textExtendedBadges": {},
                                                        "textBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "₹125 OFF",
                                                    "subHeader": "ABOVE ₹199",
                                                    "discountTag": "FLAT DEAL"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=199324",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "572881",
                                                "name": "The Belgian Waffle Co.",
                                                "cloudinaryImageId": "yoagucuemfcpykhzoexk",
                                                "locality": "Bhawartal garden",
                                                "areaName": "Napier Town",
                                                "costForTwo": "₹200 for two",
                                                "cuisines": [
                                                    "Waffle",
                                                    "Desserts",
                                                    "Ice Cream",
                                                    "Beverages"
                                                ],
                                                "avgRating": 4.4,
                                                "veg": true,
                                                "feeDetails": {
                                                    "restaurantId": "572881",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "2233",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "100+",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "lastMileTravel": 0.9,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25 mins",
                                                    "lastMileTravelString": "0.9 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-22 00:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=572881",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "622716",
                                                "name": "Haldiram's Restaurant",
                                                "cloudinaryImageId": "c058b951bd917bf716630dff74648a5d",
                                                "locality": "Bloom Chowk",
                                                "areaName": "Napier Town",
                                                "costForTwo": "₹500 for two",
                                                "cuisines": [
                                                    "North Indian",
                                                    "South Indian",
                                                    "Sweets",
                                                    "Desserts",
                                                    "Chaat"
                                                ],
                                                "avgRating": 3.9,
                                                "veg": true,
                                                "feeDetails": {
                                                    "restaurantId": "622716",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "351771",
                                                "avgRatingString": "3.9",
                                                "totalRatingsString": "100+",
                                                "sla": {
                                                    "deliveryTime": 20,
                                                    "lastMileTravel": 1.2,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20 mins",
                                                    "lastMileTravelString": "1.2 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-22 00:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "40% OFF",
                                                    "subHeader": "UPTO ₹80"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=622716",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "128196",
                                                "name": "Barbecue",
                                                "cloudinaryImageId": "as7srhgf3v3wnq30mrvp",
                                                "locality": "Katanga square",
                                                "areaName": "Gorakhpur",
                                                "costForTwo": "₹350 for two",
                                                "cuisines": [
                                                    "Indian"
                                                ],
                                                "avgRating": 3.7,
                                                "feeDetails": {
                                                    "restaurantId": "128196",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "41776",
                                                "avgRatingString": "3.7",
                                                "totalRatingsString": "1K+",
                                                "promoted": true,
                                                "adTrackingId": "cid=7512368~p=3~eid=00000189-796e-bad2-274c-e28d00d9034a~srvts=1689959447250~45826",
                                                "sla": {
                                                    "deliveryTime": 22,
                                                    "lastMileTravel": 2.3,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "22 mins",
                                                    "lastMileTravelString": "2.3 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-22 00:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textExtendedBadges": {},
                                                        "textBased": {},
                                                        "imageBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "20% OFF",
                                                    "subHeader": "UPTO ₹50"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=128196",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "427129",
                                                "name": "The Good Bowl",
                                                "cloudinaryImageId": "tqluaetavka8eeg1m36q",
                                                "locality": "Russel Chowk",
                                                "areaName": "Ganjipura",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Biryani",
                                                    "North Indian",
                                                    "Pastas",
                                                    "Punjabi",
                                                    "Desserts",
                                                    "Beverages"
                                                ],
                                                "avgRating": 3.9,
                                                "feeDetails": {
                                                    "restaurantId": "427129",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "7918",
                                                "avgRatingString": "3.9",
                                                "totalRatingsString": "100+",
                                                "sla": {
                                                    "deliveryTime": 30,
                                                    "lastMileTravel": 0.6,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "30 mins",
                                                    "lastMileTravelString": "0.6 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=427129",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "427125",
                                                "name": "Oven Story Pizza",
                                                "cloudinaryImageId": "ab979bffbd658e74de650a15ca0092a3",
                                                "locality": "Russel Chowk",
                                                "areaName": "Ganjipura",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Pizzas",
                                                    "Pastas",
                                                    "Italian",
                                                    "Desserts",
                                                    "Beverages"
                                                ],
                                                "avgRating": 3.9,
                                                "feeDetails": {
                                                    "restaurantId": "427125",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "3534",
                                                "avgRatingString": "3.9",
                                                "totalRatingsString": "100+",
                                                "sla": {
                                                    "deliveryTime": 31,
                                                    "lastMileTravel": 0.6,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "31 mins",
                                                    "lastMileTravelString": "0.6 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "60% OFF",
                                                    "subHeader": "UPTO ₹120"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=427125",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "101257",
                                                "name": "Hotel National Biriyani",
                                                "cloudinaryImageId": "fzdcvgcok450gw2nxwma",
                                                "locality": "Samdariya Mall",
                                                "areaName": "Malviya Chowk",
                                                "costForTwo": "₹250 for two",
                                                "cuisines": [
                                                    "Indian"
                                                ],
                                                "avgRating": 3.5,
                                                "feeDetails": {
                                                    "restaurantId": "101257",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "100531",
                                                "avgRatingString": "3.5",
                                                "totalRatingsString": "1K+",
                                                "promoted": true,
                                                "adTrackingId": "cid=7513444~p=4~eid=00000189-796e-bad2-274c-e28e00d90471~srvts=1689959447250~45826",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "lastMileTravel": 0.1,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25 mins",
                                                    "lastMileTravelString": "0.1 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=101257",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "93851",
                                                "name": "Pizza Hut",
                                                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                                                "locality": "Russel Chowk",
                                                "areaName": "Napier Town",
                                                "costForTwo": "₹350 for two",
                                                "cuisines": [
                                                    "Pizzas"
                                                ],
                                                "avgRating": 4,
                                                "feeDetails": {
                                                    "restaurantId": "93851",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "721",
                                                "avgRatingString": "4.0",
                                                "totalRatingsString": "1K+",
                                                "sla": {
                                                    "deliveryTime": 28,
                                                    "lastMileTravel": 0.8,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "28 mins",
                                                    "lastMileTravelString": "0.8 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-22 01:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textExtendedBadges": {},
                                                        "textBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "60% OFF",
                                                    "subHeader": "UPTO ₹120"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=93851",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "219652",
                                                "name": "La Pino'z Pizza",
                                                "cloudinaryImageId": "5fe4444a065b60c4fe39ef975222c12b",
                                                "locality": "4th Bridge Road",
                                                "areaName": "Napier Town",
                                                "costForTwo": "₹200 for two",
                                                "cuisines": [
                                                    "Pizzas",
                                                    "Pastas",
                                                    "Italian",
                                                    "Desserts",
                                                    "Beverages"
                                                ],
                                                "avgRating": 3.8,
                                                "feeDetails": {
                                                    "restaurantId": "219652",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "4961",
                                                "avgRatingString": "3.8",
                                                "totalRatingsString": "1K+",
                                                "sla": {
                                                    "deliveryTime": 28,
                                                    "lastMileTravel": 1.3,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "28 mins",
                                                    "lastMileTravelString": "1.3 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-22 02:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=219652",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "452121",
                                                "name": "Chicken & The Grill",
                                                "cloudinaryImageId": "gwi1gwx3pmkyks3crufn",
                                                "locality": "Narmada Road",
                                                "areaName": "Rampur",
                                                "costForTwo": "₹500 for two",
                                                "cuisines": [
                                                    "Chinese",
                                                    "North Indian",
                                                    "Indian"
                                                ],
                                                "avgRating": 3.5,
                                                "feeDetails": {
                                                    "restaurantId": "452121",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "272010",
                                                "avgRatingString": "3.5",
                                                "totalRatingsString": "20+",
                                                "promoted": true,
                                                "adTrackingId": "cid=7512692~p=5~eid=00000189-796e-bad2-274c-e28f00d90538~srvts=1689959447250~45826",
                                                "sla": {
                                                    "deliveryTime": 29,
                                                    "lastMileTravel": 3.7,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "29 mins",
                                                    "lastMileTravelString": "3.7 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:30:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textExtendedBadges": {},
                                                        "textBased": {},
                                                        "imageBased": {}
                                                    }
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=452121",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "288595",
                                                "name": "Baskin Robbins - Ice Cream Desserts",
                                                "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
                                                "locality": "Panagar",
                                                "areaName": "Civil Lines",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "North Indian"
                                                ],
                                                "avgRating": 4.2,
                                                "veg": true,
                                                "feeDetails": {
                                                    "restaurantId": "288595",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "5588",
                                                "avgRatingString": "4.2",
                                                "totalRatingsString": "100+",
                                                "sla": {
                                                    "deliveryTime": 31,
                                                    "lastMileTravel": 2.1,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "31 mins",
                                                    "lastMileTravelString": "2.1 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textExtendedBadges": {},
                                                        "textBased": {},
                                                        "imageBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "30% OFF",
                                                    "subHeader": "UPTO ₹75"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY",
                                                    "exclusiveOfferMessage": "EXTRA 10% OFF"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=288595",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "538236",
                                                "name": "Natural Ice Cream",
                                                "cloudinaryImageId": "zg2eoo7kbxahulm7c5zi",
                                                "locality": "Muskan Park",
                                                "areaName": "Civil Lines",
                                                "costForTwo": "₹150 for two",
                                                "cuisines": [
                                                    "Ice Cream",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.5,
                                                "veg": true,
                                                "feeDetails": {
                                                    "restaurantId": "538236",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "2093",
                                                "avgRatingString": "4.5",
                                                "totalRatingsString": "500+",
                                                "sla": {
                                                    "deliveryTime": 23,
                                                    "lastMileTravel": 1.5,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "23 mins",
                                                    "lastMileTravelString": "1.5 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-22 00:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "20% OFF",
                                                    "subHeader": "UPTO ₹50"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=538236",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "527037",
                                                "name": "The Foodies Cartel",
                                                "cloudinaryImageId": "dbakd3vpskfllgnxw2jz",
                                                "locality": "Garha Fatak Road",
                                                "areaName": "Wright Town",
                                                "costForTwo": "₹250 for two",
                                                "cuisines": [
                                                    "Pizzas",
                                                    "Italian",
                                                    "American",
                                                    "Chinese",
                                                    "Snacks",
                                                    "Desserts",
                                                    "Ice Cream",
                                                    "Beverages",
                                                    "Fast Food"
                                                ],
                                                "avgRating": 3.8,
                                                "feeDetails": {
                                                    "restaurantId": "527037",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "317495",
                                                "avgRatingString": "3.8",
                                                "totalRatingsString": "20+",
                                                "promoted": true,
                                                "adTrackingId": "cid=7196599~p=6~eid=00000189-796e-bad2-274c-e29000d90674~srvts=1689959447250~45826",
                                                "sla": {
                                                    "deliveryTime": 31,
                                                    "lastMileTravel": 0.8,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "31 mins",
                                                    "lastMileTravelString": "0.8 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-22 01:30:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "₹150 OFF",
                                                    "subHeader": "ABOVE ₹599",
                                                    "discountTag": "FLAT DEAL"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=527037",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "529645",
                                                "name": "Sagar Ratna",
                                                "cloudinaryImageId": "yaljwpdx7jiaav9rsidn",
                                                "locality": "Manas Bhawan Road",
                                                "areaName": "Jab_North",
                                                "costForTwo": "₹500 for two",
                                                "cuisines": [
                                                    "South Indian",
                                                    "North Indian",
                                                    "Chinese",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4,
                                                "feeDetails": {
                                                    "restaurantId": "529645",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "793",
                                                "avgRatingString": "4.0",
                                                "totalRatingsString": "100+",
                                                "sla": {
                                                    "deliveryTime": 22,
                                                    "lastMileTravel": 1,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "22 mins",
                                                    "lastMileTravelString": "1.0 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "25% OFF",
                                                    "subHeader": "UPTO ₹65"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=529645",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "427127",
                                                "name": "Sweet Truth - Cake and Desserts",
                                                "cloudinaryImageId": "3ec8bccd0fc2c6303d7602dd642248d5",
                                                "locality": "Russel Chowk",
                                                "areaName": "Ganjipura",
                                                "costForTwo": "₹450 for two",
                                                "cuisines": [
                                                    "Snacks",
                                                    "Bakery",
                                                    "Desserts",
                                                    "Beverages"
                                                ],
                                                "avgRating": 4.4,
                                                "feeDetails": {
                                                    "restaurantId": "427127",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "4444",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "100+",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "lastMileTravel": 0.6,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25 mins",
                                                    "lastMileTravelString": "0.6 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textExtendedBadges": {},
                                                        "textBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "20% OFF",
                                                    "subHeader": "UPTO ₹50"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=427127",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "261911",
                                                "name": "The Treat Cake Shop",
                                                "cloudinaryImageId": "m97oiy0zclyyaknnhdgr",
                                                "locality": "Sadar",
                                                "areaName": "Cantt",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Bakery"
                                                ],
                                                "avgRating": 4.1,
                                                "veg": true,
                                                "feeDetails": {
                                                    "restaurantId": "261911",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "214870",
                                                "avgRatingString": "4.1",
                                                "totalRatingsString": "500+",
                                                "promoted": true,
                                                "adTrackingId": "cid=7512362~p=7~eid=00000189-796e-bad2-274c-e29100d90730~srvts=1689959447250~45826",
                                                "sla": {
                                                    "deliveryTime": 29,
                                                    "lastMileTravel": 2.6,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "29 mins",
                                                    "lastMileTravelString": "2.6 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "30% OFF",
                                                    "subHeader": "UPTO ₹75"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=261911",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "628456",
                                                "name": "KFC",
                                                "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
                                                "locality": "Mr4 Road",
                                                "areaName": "Vijay Nagar",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Burgers",
                                                    "Biryani",
                                                    "American",
                                                    "Snacks",
                                                    "Fast Food"
                                                ],
                                                "avgRating": 3.5,
                                                "feeDetails": {
                                                    "restaurantId": "628456",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "547",
                                                "avgRatingString": "3.5",
                                                "totalRatingsString": "100+",
                                                "sla": {
                                                    "deliveryTime": 33,
                                                    "lastMileTravel": 3.8,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "33 mins",
                                                    "lastMileTravelString": "3.8 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textExtendedBadges": {},
                                                        "textBased": {},
                                                        "imageBased": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "40% OFF",
                                                    "subHeader": "UPTO ₹80"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=628456",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "478937",
                                                "name": "New Nayab Biryani Center And Colddrinks Parlour",
                                                "cloudinaryImageId": "gddh7ttdcbqim24dzf0b",
                                                "locality": "Shakti Marg",
                                                "areaName": "Civil Lines",
                                                "costForTwo": "₹100 for two",
                                                "cuisines": [
                                                    "Biryani",
                                                    "North Indian",
                                                    "Snacks"
                                                ],
                                                "avgRating": 3.3,
                                                "feeDetails": {
                                                    "restaurantId": "478937",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "287699",
                                                "avgRatingString": "3.3",
                                                "totalRatingsString": "20+",
                                                "promoted": true,
                                                "adTrackingId": "cid=7510277~p=8~eid=00000189-796e-bad2-274c-e29200d90856~srvts=1689959447250~45826",
                                                "sla": {
                                                    "deliveryTime": 32,
                                                    "lastMileTravel": 3,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "32 mins",
                                                    "lastMileTravelString": "3.0 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:59:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "10% OFF",
                                                    "subHeader": "UPTO ₹40"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=478937",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "427128",
                                                "name": "LunchBox - Meals and Thalis",
                                                "cloudinaryImageId": "hsyfld78rvs3tbvw3ubv",
                                                "locality": "Russel Chowk",
                                                "areaName": "Ganjipura",
                                                "costForTwo": "₹200 for two",
                                                "cuisines": [
                                                    "Biryani",
                                                    "North Indian",
                                                    "Punjabi",
                                                    "Healthy Food",
                                                    "Desserts",
                                                    "Beverages"
                                                ],
                                                "avgRating": 4,
                                                "feeDetails": {
                                                    "restaurantId": "427128",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "4925",
                                                "avgRatingString": "4.0",
                                                "totalRatingsString": "100+",
                                                "sla": {
                                                    "deliveryTime": 30,
                                                    "lastMileTravel": 0.6,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "30 mins",
                                                    "lastMileTravelString": "0.6 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "40% OFF",
                                                    "subHeader": "UPTO ₹80"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=427128",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "427124",
                                                "name": "Behrouz Biryani",
                                                "cloudinaryImageId": "dvoodb1ez3p1v3h2tjoa",
                                                "locality": "Russel Chowk",
                                                "areaName": "Ganjipura",
                                                "costForTwo": "₹500 for two",
                                                "cuisines": [
                                                    "Biryani",
                                                    "Mughlai",
                                                    "Lucknowi",
                                                    "Hyderabadi",
                                                    "Kebabs",
                                                    "North Indian",
                                                    "Desserts",
                                                    "Beverages"
                                                ],
                                                "avgRating": 4.3,
                                                "feeDetails": {
                                                    "restaurantId": "427124",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "1803",
                                                "avgRatingString": "4.3",
                                                "totalRatingsString": "1K+",
                                                "sla": {
                                                    "deliveryTime": 30,
                                                    "lastMileTravel": 0.6,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "30 mins",
                                                    "lastMileTravelString": "0.6 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "40% OFF",
                                                    "subHeader": "UPTO ₹80"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=427124",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "427123",
                                                "name": "Faasos - Wraps & Rolls",
                                                "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
                                                "locality": "Russel Chowk",
                                                "areaName": "Ganjipura",
                                                "costForTwo": "₹200 for two",
                                                "cuisines": [
                                                    "Kebabs",
                                                    "Fast Food",
                                                    "Snacks",
                                                    "North Indian",
                                                    "American",
                                                    "Healthy Food",
                                                    "Desserts",
                                                    "Beverages"
                                                ],
                                                "avgRating": 4.1,
                                                "feeDetails": {
                                                    "restaurantId": "427123",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "21809",
                                                "avgRatingString": "4.1",
                                                "totalRatingsString": "500+",
                                                "sla": {
                                                    "deliveryTime": 29,
                                                    "lastMileTravel": 0.6,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "29 mins",
                                                    "lastMileTravelString": "0.6 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=427123",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "162357",
                                                "name": "Darbar Veg Restaurant",
                                                "cloudinaryImageId": "caa8e4htckgmpp1hpzc6",
                                                "locality": "Rajiv Gandhi Square",
                                                "areaName": "Naya Mohalla",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "North Indian",
                                                    "Indian",
                                                    "Thalis"
                                                ],
                                                "avgRating": 3.8,
                                                "veg": true,
                                                "feeDetails": {
                                                    "restaurantId": "162357",
                                                    "fees": [
                                                        {
                                                            "name": "BASE_DISTANCE",
                                                            "fee": 500
                                                        },
                                                        {
                                                            "name": "BASE_TIME"
                                                        },
                                                        {
                                                            "name": "ANCILLARY_SURGE_FEE"
                                                        }
                                                    ],
                                                    "totalFee": 500
                                                },
                                                "parentId": "68469",
                                                "avgRatingString": "3.8",
                                                "totalRatingsString": "1K+",
                                                "sla": {
                                                    "deliveryTime": 26,
                                                    "lastMileTravel": 0.4,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "26 mins",
                                                    "lastMileTravelString": "0.4 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-07-21 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "textBased": {},
                                                        "imageBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "40% OFF",
                                                    "subHeader": "UPTO ₹80"
                                                },
                                                "loyaltyDiscoverPresentationInfo": {
                                                    "logoCtx": {
                                                        "text": "BENEFITS",
                                                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                                                    },
                                                    "freedelMessage": "FREE DELIVERY"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "swiggy://menu?restaurant_id=162357",
                                                "text": "RESTAURANT_MENU",
                                                "type": "DEEPLINK"
                                            }
                                        }
                                    ],
                                    "theme": "DELIVERING_NOW",
                                    "collectionId": "45826"
                                }
                            },
                            "footer": {
                                "labelWrapper": {
                                    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.Label",
                                    "text": "See all restaurants",
                                    "textColor": "#ffffff",
                                    "fontSize": 17,
                                    "fontName": "FONT_NAME_BOLD",
                                    "alignment": "ALIGNMENT_CENTER",
                                    "borderRadius": 6,
                                    "margin": {
                                        "left": 16,
                                        "top": 16,
                                        "right": 16,
                                        "bottom": 16
                                    },
                                    "padding": {
                                        "top": 18,
                                        "bottom": 18
                                    },
                                    "backgroundColor": "#e46d47",
                                    "cta": {
                                        "link": "swiggy://restaurantList",
                                        "text": "See all restaurants",
                                        "type": "DEEPLINK"
                                    },
                                    "maxLines": 1
                                }
                            }
                        }
                    }
                ],
                    "firstOffsetRequest": true,
                        "ribbons": [
                            {
                                "text": "Preorder",
                                "textColor": "#ffffff",
                                "imageId": "sfefefefeegeg",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#af2330",
                                "type": "PREORDER"
                            },
                            {
                                "text": "Exclusive",
                                "textColor": "#ffffff",
                                "imageId": "sfefefefeegeg",
                                "topBackgroundColor": "#fa4a5b",
                                "bottomBackgroundColor": "#d12a3b",
                                "type": "EXCLUSIVE"
                            },
                            {
                                "text": "Newly Added",
                                "textColor": "#ffffff",
                                "imageId": "sfefefefeegeg",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#af2330",
                                "type": "NEW"
                            },
                            {
                                "text": "Repeat",
                                "textColor": "#ffffff",
                                "imageId": "sfefefefeegeg",
                                "topBackgroundColor": "#D53D4C",
                                "bottomBackgroundColor": "#B02331",
                                "type": "REPEAT"
                            },
                            {
                                "text": "Daily Menus",
                                "textColor": "#ffffff",
                                "imageId": "sfefefefeegeg",
                                "topBackgroundColor": "#fa4a5b",
                                "bottomBackgroundColor": "#d12a3b",
                                "type": "CLOUD"
                            },
                            {
                                "text": "Premium",
                                "textColor": "#ffffff",
                                "imageId": "sfefefefeegeg",
                                "topBackgroundColor": "#8a584b",
                                "bottomBackgroundColor": "#583229",
                                "type": "PREMIUM"
                            },
                            {
                                "text": "Promoted",
                                "textColor": "#ffffff",
                                "imageId": "sfefefefeegeg",
                                "topBackgroundColor": "#3a3c41",
                                "bottomBackgroundColor": "#1e2023",
                                "type": "PROMOTED"
                            }
                        ],
                            "cacheExpiryTime": {
                "value": 600
            },
            "nextFetch": 3
        },
        "requestId": "92dfaed7-d3d5-4204-b690-72a803c00b06"
    },
    "tid": "d780a4b5-9968-46fa-9ddf-9cdef76fa828",
        "sid": "8ba819d1-87f9-4bc4-9eed-5c9ef98a879b",
            "deviceId": "b336a5a9-b88b-aefa-d29a-39700f05a293",
                "csrfToken": "fryqCGDhoBdJ-Lzv4NaWVaBMr-Dq0t3BCEFgd7NM"
};
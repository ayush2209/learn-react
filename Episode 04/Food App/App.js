import React from "react";
import ReactDOM from "react-dom/client";
const headerLogo = require("./assets/logo.jpg");

const url =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Start Rating
                        - Type of restaurant
                        - Avg Delivery time.
            3) Footer
                - Links
                - Copyrights
       
*/

const color = {
    color: "#db7c38",
};

const restaurantList = [
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "137887",
            name: "Manbhawan Sweets",
            uuid: "173edee0-eab6-4fd0-9d62-8de521126b0c",
            city: "79",
            area: "Kankarbagh",
            totalRatingsString: "5000+ ratings",
            cloudinaryImageId: "lhkoovaajfufwkeommiz",
            cuisines: [
                "Sweets",
                "Snacks",
                "South Indian",
                "Chaat",
                "Bakery",
                "Pan-Asian",
            ],
            tags: [],
            costForTwo: 15000,
            costForTwoString: "₹150 FOR TWO",
            deliveryTime: 28,
            minDeliveryTime: 28,
            maxDeliveryTime: 28,
            slaString: "28 MINS",
            lastMileTravel: 4.400000095367432,
            slugs: {
                restaurant: "manbhawan-sweets-kankarbagh-kankarbagh",
                city: "patna",
            },
            cityState: "79",
            address:
                "Sundar apartment, bhootnath more, near NMCH kankarbagh,patna 800026",
            locality: "Chitragupta Nagar",
            parentId: 131434,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "60% off",
                shortDescriptionList: [
                    {
                        meta: "60% off | Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹120 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "60% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹120 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            ribbon: [
                {
                    type: "PROMOTED",
                },
            ],
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "distance",
                        fee: 2400,
                        message: "",
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: "",
                    },
                    {
                        name: "special",
                        fee: 0,
                        message: "",
                    },
                ],
                totalFees: 2400,
                message: "",
                title: "Delivery Charge",
                amount: "2400",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID:
                "cid=6278446~p=1~eid=00000187-31da-88ed-069e-5d2b00110138",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "4.4 kms",
            hasSurge: false,
            sla: {
                restaurantId: "137887",
                deliveryTime: 28,
                minDeliveryTime: 28,
                maxDeliveryTime: 28,
                lastMileTravel: 4.400000095367432,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: true,
            avgRating: "3.8",
            totalRatings: 5000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "152335",
            name: "Hungry Hope",
            uuid: "9ef51d0d-3f4a-49c8-8601-3c3b16f816e5",
            city: "79",
            area: "Kankarbagh",
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "cv4hmfd42qioasn0tqtd",
            cuisines: ["Indian", "Chinese"],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 28,
            minDeliveryTime: 28,
            maxDeliveryTime: 28,
            slaString: "28 MINS",
            lastMileTravel: 2.4000000953674316,
            slugs: {
                restaurant: "hungry-hope-kankarbagh-kankarbagh",
                city: "patna",
            },
            cityState: "79",
            address: "Shila Ram Complex, Kankarbagh, Patna",
            locality: "RBI Flats Colony",
            parentId: 104720,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "60% off",
                shortDescriptionList: [
                    {
                        meta: "60% off | Use STEALDEAL",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹120 | Use code STEALDEAL",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "60% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use STEALDEAL",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹120 | Use code STEALDEAL",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "distance",
                        fee: 1900,
                        message: "",
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: "",
                    },
                    {
                        name: "special",
                        fee: 0,
                        message: "",
                    },
                ],
                totalFees: 1900,
                message: "",
                title: "Delivery Charge",
                amount: "1900",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "2.4 kms",
            hasSurge: false,
            sla: {
                restaurantId: "152335",
                deliveryTime: 28,
                minDeliveryTime: 28,
                maxDeliveryTime: 28,
                lastMileTravel: 2.4000000953674316,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.7",
            totalRatings: 10000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "242395",
            name: "Ram Babu Restaurant",
            uuid: "d681e274-d851-4cd9-ba53-8cfe1810572d",
            city: "79",
            area: "Kankarbagh",
            totalRatingsString: "5000+ ratings",
            cloudinaryImageId: "mq1vlwbzjanzdeukja3d",
            cuisines: ["Chinese", "North Indian", "Biryani"],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 25,
            minDeliveryTime: 25,
            maxDeliveryTime: 25,
            slaString: "25 MINS",
            lastMileTravel: 0.6000000238418579,
            slugs: {
                restaurant: "ram-babu-restaurant-kankarbagh-kankarbagh",
                city: "patna",
            },
            cityState: "79",
            address: "Chandmadi road,Kankarbagh,patna - 800020",
            locality: "Chandmadi road",
            parentId: 166239,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "60% off",
                shortDescriptionList: [
                    {
                        meta: "60% off | Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹120 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "60% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹120 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "distance",
                        fee: 1900,
                        message: "",
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: "",
                    },
                    {
                        name: "special",
                        fee: 0,
                        message: "",
                    },
                ],
                totalFees: 1900,
                message: "",
                title: "Delivery Charge",
                amount: "1900",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "0.6 kms",
            hasSurge: false,
            sla: {
                restaurantId: "242395",
                deliveryTime: 25,
                minDeliveryTime: 25,
                maxDeliveryTime: 25,
                lastMileTravel: 0.6000000238418579,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.5",
            totalRatings: 5000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "659435",
            name: "Haldiram (Kadamkuan)",
            uuid: "ae5a3d44-7fb1-41b3-acc7-bfe10dbf95d1",
            city: "79",
            area: "Kadam Kuan",
            totalRatingsString: "100+ ratings",
            cloudinaryImageId: "779fe291c901340e065dd6d64b742b9d",
            cuisines: [
                "Sweets",
                "Indian",
                "Snacks",
                "South Indian",
                "North Indian",
                "Thalis",
                "Chinese",
                "Fast Food",
                "Tandoor",
            ],
            tags: [],
            costForTwo: 50000,
            costForTwoString: "₹500 FOR TWO",
            deliveryTime: 30,
            minDeliveryTime: 30,
            maxDeliveryTime: 30,
            slaString: "30 MINS",
            lastMileTravel: 3.799999952316284,
            slugs: {
                restaurant: "haldiram-kankarbagh-kankarbagh",
                city: "patna",
            },
            cityState: "79",
            address:
                "Shop 007, Ground Floor, Ambition Ojha Plaza, Near Sahitya Sammelan Kadamkuan, Golambar, Patna",
            locality: "Rajendra Path",
            parentId: 396806,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "60% off",
                shortDescriptionList: [
                    {
                        meta: "60% off | Use WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹100 | Use code WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "60% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹100 | Use code WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            ribbon: [
                {
                    type: "PROMOTED",
                },
            ],
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "distance",
                        fee: 1900,
                        message: "",
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: "",
                    },
                    {
                        name: "special",
                        fee: 0,
                        message: "",
                    },
                ],
                totalFees: 1900,
                message: "",
                title: "Delivery Charge",
                amount: "1900",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID:
                "cid=6277888~p=4~eid=00000187-31da-88ed-069e-5d2c00110476",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "3.7 kms",
            hasSurge: false,
            sla: {
                restaurantId: "659435",
                deliveryTime: 30,
                minDeliveryTime: 30,
                maxDeliveryTime: 30,
                lastMileTravel: 3.799999952316284,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: true,
            avgRating: "4.0",
            totalRatings: 100,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "88781",
            name: "Sujata Family Restaurant",
            uuid: "3ac5f62e-fca8-4c33-8fdc-4603804bb14a",
            city: "79",
            area: "Fraser Road",
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "np13tsnfrxylkrk1ykm5",
            cuisines: ["Mughlai", "Chinese", "North Indian"],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 28,
            minDeliveryTime: 28,
            maxDeliveryTime: 28,
            slaString: "28 MINS",
            lastMileTravel: 2.700000047683716,
            slugs: {
                restaurant: "sujata-family-restaurant-fraser-road-fraser-road",
                city: "patna",
            },
            cityState: "79",
            address: "Hotel Mayur, Fraser Road Area, Patna",
            locality: "",
            parentId: 196672,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "60% off",
                shortDescriptionList: [
                    {
                        meta: "60% off | Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹120 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "60% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹120 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "distance",
                        fee: 1900,
                        message: "",
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: "",
                    },
                    {
                        name: "special",
                        fee: 0,
                        message: "",
                    },
                ],
                totalFees: 1900,
                message: "",
                title: "Delivery Charge",
                amount: "1900",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "2.7 kms",
            hasSurge: false,
            sla: {
                restaurantId: "88781",
                deliveryTime: 28,
                minDeliveryTime: 28,
                maxDeliveryTime: 28,
                lastMileTravel: 2.700000047683716,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.5",
            totalRatings: 10000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "591085",
            name: " 0612 Road Chef ( Kankarbagh)",
            uuid: "60f81790-ef98-41f5-b195-1a0c9fca266f",
            city: "79",
            area: "Kankarbagh",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "qo1ypqreeaulytd7cmgr",
            cuisines: ["Indian", "Tandoor", "Chinese", "Biryani"],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "₹200 FOR TWO",
            deliveryTime: 27,
            minDeliveryTime: 27,
            maxDeliveryTime: 27,
            slaString: "27 MINS",
            lastMileTravel: 1.2999999523162842,
            slugs: {
                restaurant: "0612-road-chef-online-kankarbagh-kankarbagh",
                city: "patna",
            },
            cityState: "79",
            address: "SANJAY NAGAR ROAD NO.10 NEAR BY PASS ROAD KANKARBAGH",
            locality: "Sanjay Nagar Road",
            parentId: 353495,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "60% off",
                shortDescriptionList: [
                    {
                        meta: "60% off | Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹120 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "60% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹120 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "distance",
                        fee: 1900,
                        message: "",
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: "",
                    },
                    {
                        name: "special",
                        fee: 0,
                        message: "",
                    },
                ],
                totalFees: 1900,
                message: "",
                title: "Delivery Charge",
                amount: "1900",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "1.2 kms",
            hasSurge: false,
            sla: {
                restaurantId: "591085",
                deliveryTime: 27,
                minDeliveryTime: 27,
                maxDeliveryTime: 27,
                lastMileTravel: 1.2999999523162842,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.1",
            totalRatings: 1000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "380456",
            name: "Hariram's",
            uuid: "0282843b-f936-4d4f-8b9c-c8895f38f0da",
            city: "79",
            area: "Kankarbagh",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "simgdgz6nye3oaibfhaq",
            cuisines: ["Street Food", "Sweets", "Desserts"],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "₹200 FOR TWO",
            deliveryTime: 39,
            minDeliveryTime: 39,
            maxDeliveryTime: 39,
            slaString: "39 MINS",
            lastMileTravel: 4,
            slugs: {
                restaurant:
                    "hariram-sweet's-&-restaurant-patna-city-patna-city",
                city: "patna",
            },
            cityState: "79",
            address:
                "Kanti Factory Rd, Near Bank of Baroda New Colony Kankarbagh, Chitragupta Nagar ,Patna",
            locality: "Kanti Factory Road",
            parentId: 93959,
            unserviceable: false,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "60% off",
                shortDescriptionList: [
                    {
                        meta: "60% off | Use WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹100 | Use code WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "60% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹100 | Use code WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            ribbon: [
                {
                    type: "PROMOTED",
                },
            ],
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "distance",
                        fee: 4000,
                        message: "",
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: "",
                    },
                    {
                        name: "special",
                        fee: 0,
                        message: "",
                    },
                ],
                totalFees: 4000,
                message: "",
                title: "Delivery Charge",
                amount: "4000",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID:
                "cid=6278898~p=7~eid=00000187-31da-88ed-069e-5d2d0011070b",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "4 kms",
            hasSurge: false,
            sla: {
                restaurantId: "380456",
                deliveryTime: 39,
                minDeliveryTime: 39,
                maxDeliveryTime: 39,
                lastMileTravel: 4,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: true,
            avgRating: "3.7",
            totalRatings: 1000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "87385",
            name: "Khana Khazana",
            uuid: "b31ad21f-cd4b-41b2-8bbd-8abcd5f085ca",
            city: "79",
            area: "Sri Krishnapuri",
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "jxaulq6vdq1laxrtiufo",
            cuisines: ["North Indian", "Chinese", "Biryani"],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 35,
            minDeliveryTime: 35,
            maxDeliveryTime: 35,
            slaString: "35 MINS",
            lastMileTravel: 4,
            slugs: {
                restaurant: "khana-khazana-boring-road-srikrishnapuri",
                city: "patna",
            },
            cityState: "79",
            address:
                "Gorakhnath Compound, Behind Trishul Market, E Boring Canal Road, Sri Krishnapuri, Patna",
            locality: "Boring Road",
            parentId: 2928,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "60% off",
                shortDescriptionList: [
                    {
                        meta: "60% off | Use WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹100 | Use code WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "60% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹100 | Use code WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "distance",
                        fee: 2400,
                        message: "",
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: "",
                    },
                    {
                        name: "special",
                        fee: 0,
                        message: "",
                    },
                ],
                totalFees: 2400,
                message: "",
                title: "Delivery Charge",
                amount: "2400",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "4 kms",
            hasSurge: false,
            sla: {
                restaurantId: "87385",
                deliveryTime: 35,
                minDeliveryTime: 35,
                maxDeliveryTime: 35,
                lastMileTravel: 4,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.4",
            totalRatings: 10000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "246443",
            name: "HARILAL (Kankarbagh)",
            uuid: "ad5ff1d4-5533-4cec-9ca0-3ec0a298dbbb",
            city: "79",
            area: "Kankarbagh",
            totalRatingsString: "5000+ ratings",
            cloudinaryImageId: "cb3elcisgcyajxfsom43",
            cuisines: ["Bakery", "Sweets", "Indian"],
            tags: [],
            costForTwo: 15000,
            costForTwoString: "₹150 FOR TWO",
            deliveryTime: 29,
            minDeliveryTime: 29,
            maxDeliveryTime: 29,
            slaString: "29 MINS",
            lastMileTravel: 2.200000047683716,
            slugs: {
                restaurant: "harilal's-kankarbagh-kankarbagh",
                city: "patna",
            },
            cityState: "79",
            address: "gayatri mandir road, kankarbagh colony",
            locality: "Gayatri Mandir Road",
            parentId: 22072,
            unserviceable: false,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "60% off",
                shortDescriptionList: [
                    {
                        meta: "60% off | Use WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹100 | Use code WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "60% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹100 | Use code WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "distance",
                        fee: 1900,
                        message: "",
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: "",
                    },
                    {
                        name: "special",
                        fee: 0,
                        message: "",
                    },
                ],
                totalFees: 1900,
                message: "",
                title: "Delivery Charge",
                amount: "1900",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "2.2 kms",
            hasSurge: false,
            sla: {
                restaurantId: "246443",
                deliveryTime: 29,
                minDeliveryTime: 29,
                maxDeliveryTime: 29,
                lastMileTravel: 2.200000047683716,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.2",
            totalRatings: 5000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "611043",
            name: "La Pino'z Pizza",
            uuid: "2c672757-7f7c-4b20-8e91-1b2d77205e5e",
            city: "79",
            area: "Golambar",
            totalRatingsString: "100+ ratings",
            cloudinaryImageId: "pwllxm2marsfiln5dlvi",
            cuisines: ["Pizzas", "Italian", "Snacks", "Desserts", "Beverages"],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 32,
            minDeliveryTime: 32,
            maxDeliveryTime: 32,
            slaString: "32 MINS",
            lastMileTravel: 3.5999999046325684,
            slugs: {
                restaurant: "la-pinoz-pizza-south-gandhi-maidan-fraser-road",
                city: "patna",
            },
            cityState: "79",
            address:
                "A-5,A-6 Twin Tower , Hathua, South Gandhi Maidan , Patna - 800001",
            locality: "Old Jakkanpur",
            parentId: 4961,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                    {
                        meta: "50% off | Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹100 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "50% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹100 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            ribbon: [
                {
                    type: "PROMOTED",
                },
            ],
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "distance",
                        fee: 1900,
                        message: "",
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: "",
                    },
                    {
                        name: "special",
                        fee: 0,
                        message: "",
                    },
                ],
                totalFees: 1900,
                message: "",
                title: "Delivery Charge",
                amount: "1900",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID:
                "cid=6266190~p=10~eid=00000187-31da-88ed-069e-5d2e00110a4b",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "3.5 kms",
            hasSurge: false,
            sla: {
                restaurantId: "611043",
                deliveryTime: 32,
                minDeliveryTime: 32,
                maxDeliveryTime: 32,
                lastMileTravel: 3.5999999046325684,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: true,
            avgRating: "3.5",
            totalRatings: 100,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "132703",
            name: "Dosa Station",
            uuid: "88548026-0dfa-457d-a8c0-f6f4dea37b58",
            city: "79",
            area: "Kankarbagh",
            totalRatingsString: "5000+ ratings",
            cloudinaryImageId: "rv8vzoxlvdb80jwvx21h",
            cuisines: ["South Indian"],
            tags: [],
            costForTwo: 15000,
            costForTwoString: "₹150 FOR TWO",
            deliveryTime: 25,
            minDeliveryTime: 25,
            maxDeliveryTime: 25,
            slaString: "25 MINS",
            lastMileTravel: 1.7000000476837158,
            slugs: {
                restaurant: "dosa-station-kankarbagh-kankarbagh",
                city: "patna",
            },
            cityState: "79",
            address: "P.c Colony, East A Nagar, Kankarbagh, Patna",
            locality: "P C Colony",
            parentId: 19938,
            unserviceable: false,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FLAT125 off",
                shortDescriptionList: [
                    {
                        meta: "FLAT125 off | Use FLATDEAL",
                        discountType: "Flat",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "FLAT125 off | Use FLATDEAL",
                        discountType: "Flat",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "₹125 OFF",
                shortDescriptionList: [
                    {
                        meta: "Use FLATDEAL",
                        discountType: "Flat",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "FLAT125 off | Use FLATDEAL",
                        discountType: "Flat",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "distance",
                        fee: 1900,
                        message: "",
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: "",
                    },
                    {
                        name: "special",
                        fee: 0,
                        message: "",
                    },
                ],
                totalFees: 1900,
                message: "",
                title: "Delivery Charge",
                amount: "1900",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "1.7 kms",
            hasSurge: false,
            sla: {
                restaurantId: "132703",
                deliveryTime: 25,
                minDeliveryTime: 25,
                maxDeliveryTime: 25,
                lastMileTravel: 1.7000000476837158,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.0",
            totalRatings: 5000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "98494",
            name: "Dhaba & Kabab wala",
            uuid: "4de6df7f-a838-4163-995b-bf436e09c28f",
            city: "79",
            area: "Bankman Colony",
            totalRatingsString: "5000+ ratings",
            cloudinaryImageId: "w8g1dmoovqggbwhjc2rt",
            cuisines: ["Indian", "Chinese"],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "₹200 FOR TWO",
            deliveryTime: 30,
            minDeliveryTime: 30,
            maxDeliveryTime: 30,
            slaString: "30 MINS",
            lastMileTravel: 2.200000047683716,
            slugs: {
                restaurant: "dhaba-kabab-wala-kankarbagh-kankarbagh",
                city: "patna",
            },
            cityState: "79",
            address:
                "A-244, PC colony, Near Shri Ram Hospital, Kankarbagh ,panta 20",
            locality: "PC Colony",
            parentId: 71819,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "60% off",
                shortDescriptionList: [
                    {
                        meta: "60% off | Use WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹100 | Use code WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "60% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹100 | Use code WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            ribbon: [
                {
                    type: "PROMOTED",
                },
            ],
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "distance",
                        fee: 1900,
                        message: "",
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: "",
                    },
                    {
                        name: "special",
                        fee: 0,
                        message: "",
                    },
                ],
                totalFees: 1900,
                message: "",
                title: "Delivery Charge",
                amount: "1900",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID:
                "cid=6278501~p=13~eid=00000187-31da-88ed-069e-5d2f00110d38",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "2.2 kms",
            hasSurge: false,
            sla: {
                restaurantId: "98494",
                deliveryTime: 30,
                minDeliveryTime: 30,
                maxDeliveryTime: 30,
                lastMileTravel: 2.200000047683716,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: true,
            avgRating: "3.3",
            totalRatings: 5000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "350701",
            name: "Desi Tadka Family Resturant",
            uuid: "eabb4da9-1f73-47bd-bbfe-96941bd4e578",
            city: "79",
            area: "Golambar",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "zcyjwznquzdovqypenhz",
            cuisines: ["Biryani", "Indian", "Chinese"],
            tags: [],
            costForTwo: 25000,
            costForTwoString: "₹250 FOR TWO",
            deliveryTime: 33,
            minDeliveryTime: 33,
            maxDeliveryTime: 33,
            slaString: "33 MINS",
            lastMileTravel: 2.700000047683716,
            slugs: {
                restaurant:
                    "desi-tadka-family-restaurant-fraser-road-fraser-road",
                city: "patna",
            },
            cityState: "79",
            address: "Near Komal kunal hotel, jamal Road, Patna, Bihar",
            locality: "Budh Vihar",
            parentId: 71268,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "60% off",
                shortDescriptionList: [
                    {
                        meta: "60% off | Use WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹100 | Use code WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "60% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹100 | Use code WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "distance",
                        fee: 1900,
                        message: "",
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: "",
                    },
                    {
                        name: "special",
                        fee: 0,
                        message: "",
                    },
                ],
                totalFees: 1900,
                message: "",
                title: "Delivery Charge",
                amount: "1900",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "2.7 kms",
            hasSurge: false,
            sla: {
                restaurantId: "350701",
                deliveryTime: 33,
                minDeliveryTime: 33,
                maxDeliveryTime: 33,
                lastMileTravel: 2.700000047683716,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.7",
            totalRatings: 1000,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "453850",
            name: "D-Zaprino",
            uuid: "620c9b22-b9ec-41fc-b60d-fa2c1193dfff",
            city: "79",
            area: "Mithapur",
            totalRatingsString: "500+ ratings",
            cloudinaryImageId: "r3jtq0ipwol9tby1khja",
            cuisines: ["Continental", "Desserts", "Beverages"],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "₹200 FOR TWO",
            deliveryTime: 25,
            minDeliveryTime: 25,
            maxDeliveryTime: 25,
            slaString: "25 MINS",
            lastMileTravel: 0.6000000238418579,
            slugs: {
                restaurant: "d-zaprino-kankarbagh-kankarbagh",
                city: "patna",
            },
            cityState: "79",
            address:
                "2, Karbhigya, Old Bus stand road, Opp to power house, Patna,",
            locality: "Chriyantand",
            parentId: 5656,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "60% off",
                shortDescriptionList: [
                    {
                        meta: "60% off | Use WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹100 | Use code WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "60% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹100 | Use code WELCOMEBACK",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "distance",
                        fee: 1900,
                        message: "",
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: "",
                    },
                    {
                        name: "special",
                        fee: 0,
                        message: "",
                    },
                ],
                totalFees: 1900,
                message: "",
                title: "Delivery Charge",
                amount: "1900",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "0.6 kms",
            hasSurge: false,
            sla: {
                restaurantId: "453850",
                deliveryTime: 25,
                minDeliveryTime: 25,
                maxDeliveryTime: 25,
                lastMileTravel: 0.6000000238418579,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.9",
            totalRatings: 500,
            new: false,
        },
        subtype: "basic",
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "81235",
            name: "KFC",
            uuid: "e43fd06b-00f2-47c9-a5ca-98233f16c8f1",
            city: "79",
            area: "Kankarbagh",
            totalRatingsString: "5000+ ratings",
            cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
            cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
            tags: [],
            costForTwo: 45000,
            costForTwoString: "₹450 FOR TWO",
            deliveryTime: 26,
            minDeliveryTime: 26,
            maxDeliveryTime: 26,
            slaString: "26 MINS",
            lastMileTravel: 2.200000047683716,
            slugs: {
                restaurant: "kfc-chinnilal-mega-mart-test-patna",
                city: "patna",
            },
            cityState: "79",
            address:
                "KFC Restautant,No-367,Ground Floor, Radhey Shree Patna,  Kankarbagh Main Road,Patna,Bihar-800020",
            locality: "Bankman Colony",
            parentId: 547,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "30% off",
                shortDescriptionList: [
                    {
                        meta: "30% off | Use SWIGGYIT",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "30% off up to ₹70 on select items | Use code SWIGGYIT",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "30% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use SWIGGYIT",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "30% off up to ₹70 on select items | Use code SWIGGYIT",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [
                    {
                        name: "distance",
                        fee: 1900,
                        message: "",
                    },
                    {
                        name: "time",
                        fee: 0,
                        message: "",
                    },
                    {
                        name: "special",
                        fee: 0,
                        message: "",
                    },
                ],
                totalFees: 1900,
                message: "",
                title: "Delivery Charge",
                amount: "1900",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "2.2 kms",
            hasSurge: false,
            sla: {
                restaurantId: "81235",
                deliveryTime: 26,
                minDeliveryTime: 26,
                maxDeliveryTime: 26,
                lastMileTravel: 2.200000047683716,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.0",
            totalRatings: 5000,
            new: false,
        },
        subtype: "basic",
    },
];
// Header Component
const Header = () => (
    <div className='header-Item'>
        <div className='imgage-logo'>
            <img src={headerLogo} alt='logo not loaded' />
        </div>
        <div className='menu-list'>
            <ul>
                <li>Home</li>
                <li>Restaurants</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>
                    <i className='fa-solid fa-cart-shopping'></i>
                </li>
                <li>
                    <i className='fa fa-thin fa-user'></i>
                </li>
            </ul>
        </div>
    </div>
);

// Searchbar Component.
const SearchInput = () => (
    <div className='searchBar'>
        <div></div>
        <div>
            <input type='text' placeholder='Search Item ' />
            <button>
                <i className='fa fa-duotone fa-magnifying-glass'></i>
            </button>
        </div>
    </div>
);

const RestaurantCardComponent = ({ resObj }) => {
    const {
        cloudinaryImageId,
        name,
        cuisines,
        area,
        avgRating,
        lastMileTravelString,
        costForTwoString,
    } = resObj.data;
    return (
        <div className='card'>
            <img src={url + cloudinaryImageId} />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{area}</h5>
            <hr />
            <span>
                <p style={color}>
                    <i className='fa-solid fa-star'></i> {avgRating}
                </p>
                <p>| </p>
                <p>{lastMileTravelString}</p>
                <p>| </p>
                <p>{costForTwoString}</p>
            </span>
        </div>
    );
};
const Body = () => {
    return (
        <>
            <SearchInput />
            <div className='restaurant-list'>
                {restaurantList.map((eachRes) => {
                    return (
                        <RestaurantCardComponent
                            key={eachRes.data.id}
                            resObj={eachRes}
                        />
                    );
                })}
            </div>
        </>
    );
};

// Footer component for footer section
const Footer = () => {
    return (
        <div className='footer'>
            <i className='fa-solid fa-heart'></i>
            <a href='https://www.linkedin.com/in/chetannada/' target='_blank'>
                Ayush Anand
            </a>
            <i className='fa-solid fa-copyright'></i>2023
            <strong>
                Food<span>Fire</span>
            </strong>
        </div>
    );
};
// App Page
const AppLayout = () => (
    <div className='app-Conatiner'>
        <Header />
        <Body></Body>
        <Footer />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
